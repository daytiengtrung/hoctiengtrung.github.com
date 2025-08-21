// app/components/CategoriesGrid.tsx
import { useState } from 'react'

interface CategoriesGridProps {
  onCharacterClick: (char: string) => void;
}

interface CategoryData {
  title: string;
  icon: string;
  className: string;
  characters: string[];
  collapsed?: boolean;
}

export default function CategoriesGrid({ onCharacterClick }: CategoriesGridProps) {
  const [categories, setCategories] = useState<CategoryData[]>([
    {
      title: 'Bộ Thủ : Nhân - 人(人)',
      icon: '👥',
      className: 'work',
      characters: ['人', '他', '个', '们', '会', '你', '作', '从', '体', '什', '做', '住', '今', '候', '件', '介', '休', '以', '但', '使', '信', '住', '件', '便', '像', '例', '低', '倒', '停', '份'],
      collapsed: false
    },
    {
      title: 'Bộ Thủ : Khẩu - 口(kǒu)',
      icon: '🗣️',
      className: 'nature',
      characters: ['和', '后', '同', '吃', '听', '告', '呢', '叫', '商', '吗', '呀', '啊', '号', '哪', '喜', '右', '哥', '喝', '唱', '可', '吗', '向', '吸', '周', '哭', '回', '啊', '味'],
      collapsed: false
    },
    {
      title: 'Bộ thủ : Đại - 大(dà)',
      icon: '💼',
      className: 'people',
      characters: ['大', '天', '太', '头', '套', '失', '夫', '奇', '奖', '奋', '央', '奈', '夹', '夺', '奔', '奉', '秦', '奥', '契', '夸', '夷', '奁', '奢'],
      collapsed: false
    },
    {
      title: 'Bộ Thủ : Nhi - 儿(ér)',
      icon: '🔤',
      className: 'basic',
      characters: ['先', '光', '兄', '党', '充', '兆', '兜', '兢'],
      collapsed: true
    },
    {
      title: 'Bộ Thủ : Con - 子(zǐ)',
      icon: '🔤',
      className: 'basic',
      characters: ['学', '字', '孩', '存', '孙', '季', '孤', '孕', '孛', '孵', '孪'],
      collapsed: true
    },
    {
      title: 'Bộ Thủ : Thân - 身(shēn)',
      icon: '🔤',
      className: 'basic',
      characters: ['身', '躺', '躲', '躯', '躬'],
      collapsed: true
    },
    {
      title: 'Bộ Thủ : Thủ - 手(扌)',
      icon: '🔤',
      className: 'basic',
      characters: ['打', '找', '拿', '把', '报', '扫', '接', '拉', '推', '护', '排', '换', '掉', '挺', '把', '指', '按', '抓', '批', '按', '抢', '握', '拍', '挂', '播', '搬', '投', '担'],
      collapsed: true
    }
  ])

  const toggleCategory = (index: number) => {
    setCategories(prev => 
      prev.map((cat, i) => 
        i === index ? { ...cat, collapsed: !cat.collapsed } : cat
      )
    )
  }

  return (
    <div className="categories-grid">
      {categories.map((category, index) => (
        <div key={index} className={`category-card ${category.className} ${category.collapsed ? 'collapsed' : ''}`}>
          <div className="category-header" onClick={() => toggleCategory(index)}>
            <div className="category-title">
              <span className="category-icon">{category.icon}</span>
              <span>{category.title}</span>
            </div>
            <span className="toggle-arrow">▼</span>
          </div>
          <div className="char-grid">
            {category.characters.map((char, charIndex) => (
              <button
                key={charIndex}
                className="char-button"
                onClick={() => onCharacterClick(char.trim())}
              >
                {char}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
