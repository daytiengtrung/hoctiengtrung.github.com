// app/components/WriterSection.tsx
import { forwardRef, useEffect, useRef, useState } from 'react'

interface Word {
  chinese: string;
  meaning: string;
}

interface Sentence {
  chinese: string;
  vietnamese: string;
}

interface CharacterData {
  hanviet?: string;
  words: Word[];
  sentences: Sentence[];
}

interface WriterSectionProps {
  searchResults: string[];
  dictionaryData: { [key: string]: CharacterData } | null;
  dictionaryMap: Map<string, any> | null;
  getPinyinWithTone: (char: string) => string;
  playAudio: (text: string) => void;
  onCharacterClick: (char: string) => void;
}

const WriterSection = forwardRef<HTMLDivElement, WriterSectionProps>(
  ({ searchResults, dictionaryData, dictionaryMap, getPinyinWithTone, playAudio, onCharacterClick }, ref) => {
    const [activeCharIndex, setActiveCharIndex] = useState(0)
    const writerRefs = useRef<{ [key: string]: any }>({})

    useEffect(() => {
      if (searchResults.length > 0 && typeof window !== 'undefined' && window.HanziWriter) {
        searchResults.forEach((char) => {
          const writerId = `writer-${char}`
          if (!writerRefs.current[char]) {
            try {
              writerRefs.current[char] = window.HanziWriter.create(writerId, char, {
                width: 220,
                height: 220,
                padding: 10,
                strokeColor: '#333',
                radicalColor: '#168F16',
                showOutline: true,
                showCharacter: true,
                strokeAnimationSpeed: 1,
                delayBetweenStrokes: 200
              })
              writerRefs.current[char].animateCharacter()
            } catch (error) {
              console.error(`Error creating writer for ${char}:`, error)
            }
          }
        })
      }
    }, [searchResults])

    const getComponentsInfo = (char: string) => {
      if (!dictionaryMap) return null
      const entry = dictionaryMap.get(char)
      if (entry && entry.decomposition) {
        const components = entry.decomposition.split('')
        const filteredComponents = components.filter(c => 
          c !== '?' && !['⿰', '⿱', '⿲', '⿳', '⿴', '⿵', '⿶', '⿷', '⿸', '⿹', '⿺', '⿻'].includes(c)
        )
        return filteredComponents.map(comp => ({
          char: comp,
          meaning: dictionaryData?.[comp]?.hanviet || 'Chưa có'
        }))
      }
      return null
    }

    const createExamplesSection = (char: string) => {
      const examples = dictionaryData?.[char]
      if (!examples) return null

      return (
        <div className="examples-section">
          <div className="examples-title">📚 Từ vựng phổ biến</div>
          <div className="word-examples">
            {examples.words.map((word, index) => (
              <div 
                key={index} 
                className="word-item"
                onClick={() => onCharacterClick(word.chinese)}
              >
                <button 
                  className="audio-btn" 
                  onClick={(e) => {
                    e.stopPropagation()
                    playAudio(word.chinese)
                  }}
                >
                  🔊
                </button>
                <div className="word-pinyin">{getPinyinWithTone(word.chinese)}</div>
                <div className="word-chinese">{word.chinese}</div>
                <div className="word-meaning">{word.meaning}</div>
              </div>
            ))}
          </div>
          <div className="sentence-examples">
            <div className="examples-title">💬 Ví dụ câu</div>
            {examples.sentences.map((sentence, index) => (
              <div key={index} className="sentence-item">
                <button 
                  className="audio-btn sentence-audio" 
                  onClick={() => playAudio(sentence.chinese)}
                >
                  🔊
                </button>
                <div className="sentence-pinyin">{getPinyinWithTone(sentence.chinese)}</div>
                <div className="sentence-chinese">{sentence.chinese}</div>
                <div className="sentence-vietnamese">{sentence.vietnamese}</div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (searchResults.length === 0) {
      return null
    }

    return (
      <div ref={ref} className="writer-section">
        {searchResults.length > 1 && (
          <div className="char-tabs">
            {searchResults.map((char, index) => (
              <button
                key={char}
                className={`char-tab-btn ${index === activeCharIndex ? 'active' : ''}`}
                onClick={() => setActiveCharIndex(index)}
              >
                {char}
              </button>
            ))}
          </div>
        )}
        
        <div className="char-content-container">
          {searchResults.map((char, index) => {
            const pinyinInfo = getPinyinWithTone(char)
            const hanVietInfo = dictionaryData?.[char]?.hanviet || 'Chưa có Hán Việt'
            const componentsInfo = getComponentsInfo(char)
            const examples = createExamplesSection(char)

            let componentsHtml = 'Chưa có thông tin phân tách'
            if (componentsInfo && componentsInfo.length > 0) {
              const combinedComponents = componentsInfo.map(c => `${c.char} (${c.meaning})`).join(', ')
              componentsHtml = combinedComponents
            }

            return (
              <div 
                key={char}
                className={`character-display ${index === activeCharIndex ? 'active' : ''}`}
              >
                <div className="writer-container">
                  <div className="writer-div" id={`writer-${char}`}></div>
                </div>
                <div className="info-panel">
                  <h3>🔍 Chữ: {char}</h3>
                  <div className="info-item">
                    <div className="info-label">🗣️ Dịch:</div>
                    <div className="info-value">{hanVietInfo}</div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">🗣️ Pinyin:</div>
                    <div className="info-value pinyin-display">{pinyinInfo}</div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">🧩 Bộ thủ:</div>
                    <div className="info-value">{componentsHtml}</div>
                  </div>
                  <div className="writer-controls">
                    <button 
                      className="control-btn"
                      onClick={() => writerRefs.current[char]?.animateCharacter()}
                    >
                      🔄 Vẽ lại
                    </button>
                    <button 
                      className="control-btn"
                      onClick={() => {
                        writerRefs.current[char]?.quiz({
                          showHintAfterMisses: 3,
                          highlightOnComplete: true,
                          onComplete: () => {
                            alert(`🎉 Tuyệt vời! Bạn đã viết đúng chữ ${char}`)
                          }
                        })
                      }}
                    >
                      ✏️ Tập viết
                    </button>
                    <button 
                      className="control-btn"
                      onClick={() => playAudio(char)}
                    >
                      🔊 Nghe
                    </button>
                  </div>
                  {examples}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)

WriterSection.displayName = 'WriterSection'

export default WriterSection
