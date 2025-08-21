// app/components/SentencePage.tsx
import { useState, useMemo } from 'react'

interface Sentence {
  chinese: string;
  vietnamese: string;
  category?: string;
}

interface SentencePageProps {
  allSentences: Sentence[];
  getPinyinWithTone: (char: string) => string;
  playAudio: (text: string) => void;
}

export default function SentencePage({ allSentences, getPinyinWithTone, playAudio }: SentencePageProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const SENTENCES_PER_PAGE = 24

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

  const filteredSentences = useMemo(() => {
    let filtered = allSentences

    if (activeCategory !== 'all') {
      filtered = filtered.filter(sentence => sentence.category?.includes(activeCategory))
    }

    if (searchTerm) {
      const normalizedQuery = normalizeString(searchTerm)
      filtered = filtered.filter(sentence => {
        const normalizedPinyin = normalizeString(getPinyinWithTone(sentence.chinese))
        const pinyinMatches = normalizedPinyin.includes(normalizedQuery)
        const chineseMatches = sentence.chinese.includes(searchTerm)
        const normalizedVietnamese = normalizeString(sentence.vietnamese)
        const vietnameseMatches = normalizedVietnamese.includes(normalizedQuery)
        return chineseMatches || pinyinMatches || vietnameseMatches
      })
    }

    return filtered
  }, [allSentences, activeCategory, searchTerm, getPinyinWithTone])

  const totalPages = Math.ceil(filteredSentences.length / SENTENCES_PER_PAGE)
  const startIndex = (currentPage - 1) * SENTENCES_PER_PAGE
  const displayedSentences = filteredSentences.slice(startIndex, startIndex + SENTENCES_PER_PAGE)

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
            placeholder="Tìm kiếm ví dụ"
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
            Tổng cộng {filteredSentences.length} câu giao tiếp tiếng trung
          </div>
          <div className="sentences-char-section">
            <h2 className="sentences-char-title">Ví dụ câu tiếng trung</h2>
            <div className="sentences-list">
              {displayedSentences.map((sentence, index) => (
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
