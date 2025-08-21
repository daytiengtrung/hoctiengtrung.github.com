// app/components/TabNavigation.tsx
interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  const tabs = [
    { id: 'page-hanzi', label: '✏️ Học chữ Hán' },
    { id: 'page-vocab', label: '📚 Bảng từ vựng' },
    { id: 'page-sentences', label: '💬 Ví dụ câu' }
  ]

  return (
    <div className="tab-nav">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
