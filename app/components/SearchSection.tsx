// app/components/SearchSection.tsx
interface SearchSectionProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  onSearch: (value: string) => void;
  getPinyinWithTone: (char: string) => string;
  playAudio: (text: string) => void;
}

export default function SearchSection({ searchValue, setSearchValue, onSearch, getPinyinWithTone, playAudio }: SearchSectionProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(searchValue)
    }
  }

  return (
    <div className="search-section">
      <div className="search-title">
        <span>🔍</span>
        <span>Tìm kiếm chữ Hán</span>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="input-char"
          placeholder="Nhập chữ Hán (ví dụ: 山, 作, 工)"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button 
          type="button" 
          className="search-btn" 
          onClick={() => onSearch(searchValue)}
        >
          Học ngay
        </button>
      </div>
      <div className="search-hint">
        💡 Mẹo: Bạn có thể nhập một hoặc nhiều chữ Hán cùng lúc
      </div>
    </div>
  )
}
