// app/components/VocabPage.tsx
import { useState, useMemo } from 'react'

interface Word {
  chinese: string;
  meaning: string;
  category?: string;
}

interface VocabPageProps {
  allWords: Word[];
  getPinyinWithTone: (char: string) => string;
  playAudio: (text: string) => void;
}

export default function VocabPage({ allWords, getPinyinWithTone, playAudio }: VocabPageProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const WORDS_PER_PAGE = 24

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'du lịch', label: 'Du lịch ✈️' },
    { id: 'kỹ thuật', label: 'Kỹ thuật 🛠️' },
    { id: 'học tập', label: 'Học tập 📚' }
  ]

  const normalizeString = (str: string) => {
    if (!str) return ''
    return str.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, 'd').replace(/Đ/g, 'D')
  }

  const filteredWords = useMemo(() => {
    let filtered = allWords

    if (activeCategory !== 'all') {
      filtered = filtered.filter(word => word.category?.includes(activeCategory))
    }

    if (searchTerm) {
      const normalizedQuery = normalizeString(searchTerm)
      filtered = filtered.filter(word => {
        const normalizedPinyin = normalizeString(getPinyinWithTone(word.chinese))
        const pinyinMatches = normalizedPinyin.includes(normalizedQuery)
        const chineseMatches = word.chinese.includes(searchTerm)
        const normalizedMeaning = normalizeString(word.meaning)
        const meaningMatches = normalizedMeaning.includes(normalizedQuery)
        return chineseMatches || pinyinMatches || meaningMatches
      })
    }

    return filtered
  }, [allWords, activeCategory, searchTerm, getPinyinWithTone])

  const totalPages = Math.ceil(filteredWords.length / WORDS_PER_PAGE)
  const startIndex = (currentPage - 1) * WORDS_PER_PAGE
  const displayedWords = filteredWords.slice(startIndex, startIndex + WORDS_PER_PAGE)

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setCurrentPage(1)
    setSearchTerm('')
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="page-content active">
      <div className="search-section">
        <div className="search-bar">
          <input
            type="text"
            className="input-search"
            placeholder="Tìm kiếm từ vựng"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1)
            }}
          />
        </div>
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="content-wrapper">
          <div className="search-results-info">
            Tổng cộng {filteredWords.length} từ vựng
          </div>
          <div className="vocab-char-section">
            <h2 className="vocab-char-title">Bảng từ vựng</h2>
            <div className="vocab-grid">
              {displayedWords.map((word, index) => (
                <div key={index} className="word-item">
                  <button
                    className="audio-btn"
                    onClick={() => playAudio(word.chinese)}
                  >
                    🔊
                  </button>
                  <div className="word-pinyin">{getPinyinWithTone(word.chinese)}</div>
                  <div className="word-chinese">{word.chinese}</div>
                  <div className="word-meaning">{word.meaning}</div>
                </div>
              ))}
            </div>
          </div>
          
          {totalPages > 1 && (
            <div className="pagination-controls">
              <button
                className="pagination-btn"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ← Trước
              </button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + Math.max(1, currentPage - 2)
                if (page > totalPages) return null
                return (
                  <button
                    key={page}
                    className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                    onClick={() => goToPage(page)}
                  >
                    {page}
                  </button>
                )
              })}
              
              <button
                className="pagination-btn"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Sau →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
