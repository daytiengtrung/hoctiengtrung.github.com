// app/page.tsx
'use client'

import { useEffect, useState, useRef, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import TabNavigation from './components/TabNavigation'
import SearchSection from './components/SearchSection'
import CategoriesGrid from './components/CategoriesGrid'
import WriterSection from './components/WriterSection'
import VocabPage from './components/VocabPage'
import SentencePage from './components/SentencePage'
import Footer from './components/Footer'

interface Word {
  chinese: string;
  meaning: string;
  category?: string;
}

interface Sentence {
  chinese: string;
  vietnamese: string;
  category?: string;
}

interface CharacterData {
  hanviet?: string;
  words: Word[];
  sentences: Sentence[];
}

interface DictionaryData {
  [key: string]: CharacterData;
}

declare global {
  interface Window {
    HanziWriter: any;
    pinyinPro: any;
    speechSynthesis: any;
  }
}

function HomePageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<string>('page-hanzi')
  const [searchValue, setSearchValue] = useState('')
  const [dictionaryData, setDictionaryData] = useState<DictionaryData | null>(null)
  const [dictionaryMap, setDictionaryMap] = useState<Map<string, any> | null>(null)
  const [allWords, setAllWords] = useState<Word[]>([])
  const [allSentences, setAllSentences] = useState<Sentence[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<string[]>([])
  const writerSectionRef = useRef<HTMLDivElement>(null)

  // Load data on component mount
  useEffect(() => {
    loadData()
    loadDictionary()
  }, [])

  // Handle URL parameters
  useEffect(() => {
    const word = searchParams.get('word')
    if (word) {
      setSearchValue(word)
      triggerSearch(word)
      updateMeta(word)
    }
  }, [searchParams])

  const loadData = async () => {
    try {
      const response = await fetch('https://hoctiengtrung.vercel.app/data/base.json')
      if (!response.ok) throw new Error('Failed to load base.json')
      const data: DictionaryData = await response.json()
      setDictionaryData(data)

      // Extract all words and sentences
      const words: Word[] = []
      const sentences: Sentence[] = []
      Object.keys(data).forEach(char => {
        if (data[char].words) {
          data[char].words.forEach(word => words.push(word))
        }
        if (data[char].sentences) {
          data[char].sentences.forEach(sentence => sentences.push(sentence))
        }
      })
      setAllWords(words)
      setAllSentences(sentences)
    } catch (error) {
      console.error('Error loading base.json:', error)
    }
  }

  const loadDictionary = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/skishore/makemeahanzi/master/dictionary.txt')
      if (!response.ok) throw new Error('Failed to load dictionary')
      const text = await response.text()
      const lines = text.trim().split('\n')
      const map = new Map()
      
      for (let line of lines) {
        if (line) {
          const entry = JSON.parse(line)
          if (entry.character && entry.decomposition) {
            map.set(entry.character, entry)
          }
        }
      }
      setDictionaryMap(map)
    } catch (error) {
      console.error('Error loading dictionary:', error)
    }
  }

  const getPinyinWithTone = (char: string): string => {
    try {
      if (typeof window !== 'undefined' && window.pinyinPro && window.pinyinPro.pinyin) {
        const pinyin = window.pinyinPro.pinyin(char, { 
          toneType: 'symbol',
          type: 'array'
        })
        if (pinyin && pinyin.length > 0) {
          return pinyin.join(' ')
        }
      }
    } catch (error) {
      console.log('Lỗi pinyin-pro:', error)
    }
    return getPinyinFallback(char)
  }

  const getPinyinFallback = (char: string): string => {
    const pinyinMap: {[key: string]: string} = {
      '山': 'shān', '大': 'dà', '小': 'xiǎo', '你': 'nǐ', '我': 'wǒ', '他': 'tā',
      '好': 'hǎo', '人': 'rén', '土': 'tǔ', '水': 'shuǐ', '火': 'huǒ', '天': 'tiān',
      '地': 'dì', '作': 'zuò', '工': 'gōng', '做': 'zuò', '业': 'yè', '职': 'zhí',
      '学': 'xué', '们': 'men', '会': 'huì', '不': 'bù', '是': 'shì', '的': 'de'
    }
    return pinyinMap[char] || 'Chưa có pinyin'
  }

  const playAudio = (text: string, lang: string = 'zh-CN') => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = lang
      utterance.rate = 0.8
      utterance.pitch = 1
      utterance.volume = 1
      window.speechSynthesis.speak(utterance)
    } else {
      alert('Trình duyệt không hỗ trợ phát âm')
    }
  }

  const isChineseChar = (char: string): boolean => {
    return /[\u4e00-\u9fff]/.test(char)
  }

  const triggerSearch = async (input: string) => {
    if (!input.trim()) return

    setIsLoading(true)
    const uniqueChars = [...new Set(input.split(''))].filter(isChineseChar)
    
    if (uniqueChars.length === 0) {
      setIsLoading(false)
      return
    }

    setSearchResults(uniqueChars)
    
    // Update URL without page reload
    const url = new URL(window.location.href)
    url.searchParams.set('word', input)
    window.history.pushState({}, '', `/search/word/${encodeURIComponent(input)}.html`)
    updateMeta(input)

    setIsLoading(false)

    // Scroll to writer section
    setTimeout(() => {
      if (writerSectionRef.current) {
        writerSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const updateMeta = (word: string) => {
    document.title = `Học chữ hán với từ "${word}" - Học Tiếng Trung`
    
    let descText = ""
    if (dictionaryData && dictionaryData[word]) {
      const entry = dictionaryData[word]
      const mean = entry.hanviet || ""
      
      let words = ""
      if (entry.words && entry.words.length > 0) {
        words = entry.words.slice(0, 2).map(w => `${w.chinese} (${w.meaning})`).join("; ")
      }
      
      descText = `Học chữ Hán "${word}" nghĩa là "${mean}". ${words ? `Ví dụ từ vựng: ${words}.` : ""}`
    }

    // Update meta description
    let desc = document.querySelector("meta[name='description']") as HTMLMetaElement
    if (!desc) {
      desc = document.createElement("meta")
      desc.name = "description"
      document.head.appendChild(desc)
    }
    desc.content = descText
  }

  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <a href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <h1>汉字学习</h1>
            <div className="panda">🐼</div>
          </a>
        </div>
        <div className="subtitle">Khám phá thế giới chữ Hán một cách dễ dàng</div>
      </div>

      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Hanzi Learning Tab */}
      {activeTab === 'page-hanzi' && (
        <div className="page-content active">
          <SearchSection 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onSearch={triggerSearch}
            getPinyinWithTone={getPinyinWithTone}
            playAudio={playAudio}
          />
          
          <WriterSection 
            ref={writerSectionRef}
            searchResults={searchResults}
            dictionaryData={dictionaryData}
            dictionaryMap={dictionaryMap}
            getPinyinWithTone={getPinyinWithTone}
            playAudio={playAudio}
            onCharacterClick={triggerSearch}
          />
          
          <CategoriesGrid onCharacterClick={triggerSearch} />
        </div>
      )}

      {/* Vocabulary Tab */}
      {activeTab === 'page-vocab' && (
        <VocabPage 
          allWords={allWords}
          getPinyinWithTone={getPinyinWithTone}
          playAudio={playAudio}
        />
      )}

      {/* Sentences Tab */}
      {activeTab === 'page-sentences' && (
        <SentencePage 
          allSentences={allSentences}
          getPinyinWithTone={getPinyinWithTone}
          playAudio={playAudio}
        />
      )}

      <Footer />
    </div>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  )
}
