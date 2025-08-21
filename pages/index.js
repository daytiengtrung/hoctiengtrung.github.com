<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>汉字学习 - Học chữ Hán</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n        \n        body {\n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n            min-height: 100vh;\n            padding: 5px;\n        }\n        \n        .container {\n            max-width: 1200px;\n            margin: 0 auto;\n        }\n        \n        .header {\n            text-align: center;\n            margin-bottom: 20px;\n        }\n        \n        .title {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            gap: 15px;\n            margin-bottom: 5px;\n        }\n        \n        .title h1 {\n            color: white;\n            font-size: 48px;\n            font-weight: bold;\n        }\n        \n        .panda {\n            font-size: 48px;\n        }\n        \n        .subtitle {\n            color: rgba(255, 255, 255, 0.9);\n            font-size: 16px;\n            margin-bottom: 30px;\n        }\n\n        .tab-nav {\n            display: flex;\n            justify-content: center;\n            gap: 10px;\n            margin-bottom: 10px;\n        }\n\n        .tab-btn {\n            padding: 12px 25px;\n            font-size: 16px;\n            font-weight: 600;\n            color: white;\n            background: rgba(255, 255, 255, 0.2);\n            border: none;\n            border-radius: 12px;\n            cursor: pointer;\n\t\t\ttext-decoration: none;\n            transition: all 0.3s ease;\n        }\n\n        .tab-btn:hover {\n            background: rgba(255, 255, 255, 0.3);\n        }\n\n        .tab-btn.active {\n            background: white;\n            color: #667eea;\n            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n        }\n        \n        .page-content {\n            display: none;\n        }\n\n        .page-content.active {\n            display: block;\n        }\n\n        .search-section {\n            background: rgba(255, 255, 255, 0.95);\n            padding: 10px;\n            border-radius: 20px;\n            margin-bottom: 10px;\n            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n        }\n        \n        .search-title {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            gap: 10px;\n            margin-bottom: 20px;\n            font-size: 20px;\n            color: #333;\n            font-weight: 600;\n        }\n        \n        .search-bar {\n            display: flex;\n            gap: 15px;\n            align-items: center;\n            margin-bottom: 15px;\n        }\n        \n        #input-char, .input-search {\n            flex: 1;\n            padding: 15px 20px;\n            border: 2px solid #e0e0e0;\n            border-radius: 12px;\n            font-size: 16px;\n            outline: none;\n            transition: all 0.3s;\n        }\n        \n        #input-char:focus, .input-search:focus {\n            border-color: #667eea;\n            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n        }\n        \n        .search-btn {\n            padding: 15px 15px;\n            background: linear-gradient(45deg, #667eea, #764ba2);\n            color: white;\n            border: none;\n            border-radius: 12px;\n            font-size: 14px;\n            font-weight: 600;\n            cursor: pointer;\n            transition: transform 0.2s;\n        }\n        \n        .search-btn:hover {\n            transform: translateY(-2px);\n        }\n        \n        .search-hint {\n            text-align: center;\n            color: #666;\n            font-size: 14px;\n        }\n        \n        .categories-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n            gap: 20px;\n            margin-top: 10px;\n        }\n        \n        .category-card {\n            background: rgba(255, 255, 255, 0.95);\n            padding: 20px 10px 20px 20px;\n            border-radius: 16px;\n            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n            transition: all 0.3s ease;\n            cursor: pointer;\n        }\n        \n        .category-card:hover {\n            transform: translateY(-5px);\n            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);\n        }\n        \n        .category-header {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            margin-bottom: 15px;\n            font-size: 16px;\n            font-weight: 600;\n            color: #333;\n        }\n        \n        .category-title {\n            display: flex;\n            align-items: center;\n            gap: 8px;\n        }\n        \n        .toggle-arrow {\n            font-size: 14px;\n            color: #666;\n            transition: transform 0.3s ease;\n        }\n        \n        .category-card.collapsed .toggle-arrow {\n            transform: rotate(-90deg);\n        }\n        \n        .char-grid {\n            overflow: hidden;\n            transition: all 0.3s ease;\n            max-height: 200px;\n        }\n        \n        .category-card.collapsed .char-grid {\n            max-height: 0;\n            margin-top: 0;\n        }\n        \n        .category-icon {\n            font-size: 20px;\n        }\n        \n        .char-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));\n    gap: 10px;\n    overflow-y: auto; /* Thay đổi ở đây */\n    max-height: 250px; /* Thêm dòng này để giới hạn chiều cao */\n    padding-right: 15px; /* Thêm khoảng trống để tránh nút bị che bởi thanh cuộn */\n              }\n        \n        .char-button {\n            aspect-ratio: 1;\n            border: none;\n            border-radius: 12px;\n            font-size: 24px;\n            font-weight: bold;\n            color: white;\n            cursor: pointer;\n            transition: all 0.3s;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n        \n        .char-button:hover {\n            transform: scale(1.1);\n            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n        }\n        \n        .char-button:active {\n            transform: scale(0.95);\n        }\n        \n        .work .char-button { background: linear-gradient(45deg, #36D1DC, #5B86E5); }\n        .nature .char-button { background: linear-gradient(45deg, #11998E, #38EF7D); }\n        .people .char-button { background: linear-gradient(45deg, #FC466B, #3F5EFB); }\n        .basic .char-button { background: linear-gradient(45deg, #FDBB2D, #22C1C3); }\n        \n        .writer-section {\n            background: rgba(255, 255, 255, 0.95);\n            padding: 30px;\n            border-radius: 20px;\n            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n            margin-top: 20px;\n        }\n        \n        /* New styles for multi-character results */\n        .char-tabs {\n            display: flex;\n            justify-content: center;\n            flex-wrap: wrap;\n            gap: 10px;\n            margin-bottom: 20px;\n            border-bottom: 2px solid #e0e0e0;\n            padding-bottom: 10px;\n        }\n        .char-tab-btn {\n            padding: 10px 15px;\n            font-size: 24px;\n            font-weight: bold;\n            background: none;\n            border: none;\n            cursor: pointer;\n            transition: color 0.2s, transform 0.2s;\n            color: #999;\n            transform: translateY(2px);\n        }\n        .char-tab-btn.active {\n            color: #667eea;\n            border-bottom: 2px solid #667eea;\n            transform: translateY(0);\n        }\n        .char-content-container {\n            position: relative;\n            min-height: 400px; /* Adjusted for better layout */\n        }\n        .character-display {\n            display: none; /* Hide all by default */\n            grid-template-columns: 250px 1fr;\n            gap: 30px;\n            margin-bottom: 30px;\n        }\n        .character-display.active {\n            display: grid; /* Show active one */\n        }\n        \n        .writer-container {\n            background: #f8f9fa;\n            border-radius: 12px;\n            padding: 15px;\n            display: flex;\n            align-items: flex-start;\n            justify-content: center;\n        }\n        \n        .writer-div {\n            width: 220px;\n            height: 220px;\n            border: 2px solid #e0e0e0;\n            border-radius: 8px;\n            background: white;\n        }\n        \n        .info-panel h3 {\n            color: #333;\n            margin-bottom: 20px;\n            font-size: 24px;\n        }\n        \n        .info-item {\n            display: flex;\n            margin-bottom: 15px;\n        }\n        \n        .info-label {\n            font-weight: 600;\n            color: #666;\n            width: 110px;\n            flex-shrink: 0;\n        }\n        \n        .info-value {\n            color: #d80e0e;\n            flex: 1;\n\t\t\tfont-weight: bold;\n        }\n        \n        .pinyin-display {\n            font-size: 18px;\n            color: #2196F3;\n            font-weight: bold;\n        }\n        \n        .radical-display {\n            display: flex;\n            align-items: center;\n            gap: 10px;\n        }\n        \n        .radical-char {\n            font-size: 12px;\n            color: #4CAF50;\n            font-weight: bold;\n        }\n        \n        .radical-meaning {\n            color: #666;\n            font-size: 14px;\n        }\n        \n        .writer-controls {\n            display: flex;\n            gap: 10px;\n            margin: 20px 0;\n        }\n        \n        .control-btn {\n            padding: 10px 20px;\n            background: linear-gradient(45deg, #667eea, #764ba2);\n            color: white;\n            border: none;\n            border-radius: 8px;\n            cursor: pointer;\n            font-size: 14px;\n            font-weight: 500;\n            transition: transform 0.2s;\n        }\n        \n        .control-btn:hover {\n            transform: translateY(-1px);\n        }\n        \n        .examples-section {\n            margin-top: 20px;\n            padding: 20px;\n            background: #f8f9fa;\n            border-radius: 12px;\n            border-left: 4px solid #667eea;\n        }\n        \n        .examples-title {\n            font-weight: 600;\n            color: #333;\n            margin-bottom: 15px;\n            font-size: 16px;\n        }\n        \n        .word-examples {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n            gap: 10px;\n            margin-bottom: 20px;\n        }\n        \n        .word-item {\n            background: white;\n            padding: 12px 16px;\n            border-radius: 8px;\n            cursor: pointer;\n            transition: all 0.2s;\n            border: 1px solid #e0e0e0;\n            display: flex;\n            flex-direction: column;\n            align-items: flex-start;\n            justify-content: flex-start;\n            position: relative;\n        }\n        \n        .word-item:hover {\n            background: #e3f2fd;\n            transform: translateY(-1px);\n            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n        }\n        \n        .word-content {\n            display: flex;\n            flex-direction: column;\n            align-items: flex-start;\n            flex: 1;\n        }\n        \n        .word-chinese {\n            font-weight: bold;\n            color: #333;\n            margin-right: 10px;\n            font-size: 16px;\n        }\n        .word-pinyin {\n            font-size: 14px;\n            color: #2196F3;\n            margin-bottom: 5px;\n        }\n        \n        .word-meaning {\n            color: #666;\n            font-size: 14px;\n        }\n        \n        .audio-btn {\n            background: none;\n            border: none;\n            cursor: pointer;\n            padding: 15px 30px;\n            border-radius: 4px;\n            font-size: 16px;\n            transition: all 0.2s;\n            color: #667eea;\n            opacity: 0.7;\n            position: absolute;\n            top: 5px;\n            right: 5px;\n        }\n        \n        .audio-btn:hover {\n            background: #e3f2fd;\n            opacity: 1;\n            transform: scale(1.1);\n        }\n        \n        .sentence-examples {\n            border-top: 1px solid #e0e0e0;\n            padding-top: 15px;\n        }\n        \n        .sentence-item {\n            margin-bottom: 10px;\n            padding: 10px;\n            background: white;\n            border-radius: 8px;\n            border-left: 3px solid #4caf50;\n            position: relative;\n        }\n        \n        .sentence-audio {\n            position: absolute;\n            top: 10px;\n            right: 10px;\n        }\n        \n        .sentence-chinese {\n            font-weight: bold;\n            color: #333;\n            margin-bottom: 8px;\n            font-size: 16px;\n            padding-right: 40px;\n        }\n        \n        .sentence-pinyin {\n            font-size: 14px;\n            color: #2196F3;\n            margin-bottom: 5px;\n        }\n        \n        .sentence-vietnamese {\n            color: #666;\n            font-style: italic;\n            font-size: 14px;\n        }\n        \n        .loading {\n            color: #999;\n            font-style: italic;\n        }\n\n        .vocab-char-section {\n            margin-bottom: 30px;\n            border-left: 4px solid #667eea;\n            padding-left: 20px;\n        }\n        .vocab-char-title {\n            font-size: 28px;\n            font-weight: bold;\n            color: #333;\n            margin-bottom: 15px;\n        }\n        .vocab-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n            gap: 15px;\n        }\n\n        #page-vocab {\n            background: rgba(255, 255, 255, 0.98);\n            padding: 10px;\n            border-radius: 20px;\n            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n        }\n\n        #page-sentences {\n            background: rgba(255, 255, 255, 0.98);\n            padding: 10px;\n            border-radius: 20px;\n            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n        }\n        .sentences-char-section {\n            margin-bottom: 30px;\n            border-left: 4px solid #4caf50;\n            padding-left: 20px;\n        }\n        .sentences-char-title {\n            font-size: 28px;\n            font-weight: bold;\n            color: #333;\n            margin-bottom: 15px;\n        }\n        .sentences-list {\n            display: grid;\n            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n            gap: 15px;\n        }\n        .section-separator {\n            width: 100%;\n            height: 1px;\n            background-color: #e0e0e0;\n            margin: 40px 0;\n        }\n        .search-results-info {\n            text-align: center;\n            margin-bottom: 20px;\n            font-size: 14px;\n            color: #666;\n        }\n\n        .pagination-controls {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            gap: 10px;\n            margin-top: 20px;\n            padding-top: 10px;\n            border-top: 1px solid #e0e0e0;\n        }\n        .pagination-btn {\n            padding: 8px 12px;\n            border-radius: 8px;\n            border: 1px solid #ccc;\n            background-color: #f8f9fa;\n            cursor: pointer;\n            transition: all 0.2s;\n        }\n        .pagination-btn:hover:not(.active) {\n            background-color: #e0e0e0;\n        }\n        .pagination-btn.active {\n            background-color: #667eea;\n            color: white;\n            border-color: #667eea;\n        }\n        \n        .footer {\n            margin-top: 40px;\n            padding: 20px;\n            text-align: center;\n            color: rgba(255, 255, 255, 0.8);\n            border-top: 1px solid rgba(255, 255, 255, 0.2);\n            font-size: 24px;\n        }\n        \n        .footer-links a {\n            color: white;\n            text-decoration: none;\n            margin: 5px 10px;\n            font-size: 20px;\n            transition: transform 0.2s;\n            display: inline-block;\n        }\n        \n        .footer-links a:hover {\n            transform: scale(1.2);\n        }\n\n        .search-results-info {\n            text-align: center;\n            margin-bottom: 20px;\n            font-size: 24px;\n            color: #666;\n        }\n        /* New styles for category buttons */\n        .category-buttons {\n            display: flex;\n            justify-content: center;\n            flex-wrap: wrap;\n            gap: 10px;\n            margin-bottom: 20px;\n        }\n        .filter-btn {\n            padding: 10px 20px;\n            border: 1px solid #ccc;\n            border-radius: 20px;\n            background-color: white;\n            cursor: pointer;\n            transition: all 0.2s;\n            font-size: 14px;\n        }\n        .filter-btn:hover {\n            background-color: #f0f0f0;\n        }\n        .filter-btn.active {\n            background: linear-gradient(45deg, #667eea, #764ba2);\n            color: white;\n            border-color: #667eea;\n            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n        }\n\n        @media (max-width: 768px) {\n            .categories-grid {\n                grid-template-columns: 1fr;\n            }\n            \n            .character-display {\n                grid-template-columns: 1fr;\n                text-align: left;\n            }\n            \n            .title h1 {\n                font-size: 32px;\n            }\n            \n            .char-grid {\n                grid-template-columns: repeat(4, 1fr);\n            }\n        }\n    "
    }}
  />
  <div className="container">
    <div className="header">
      <div className="title">
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            gap: 15
          }}
        >
          <h1>汉字学习</h1>
          <div className="panda">🐼</div>
        </a>
      </div>
      <div className="subtitle">Khám phá thế giới chữ Hán một cách dễ dàng</div>
    </div>
    <div className="tab-nav">
      <button className="tab-btn active" data-page="page-hanzi">
        ✏️ Học chữ Hán
      </button>
      <button className="tab-btn" data-page="page-vocab">
        📚 Bảng từ vựng
      </button>
      <button className="tab-btn" data-page="page-sentences">
        💬 Ví dụ câu
      </button>
    </div>
    <div id="page-hanzi" className="page-content active">
      <div className="search-section">
        <div className="search-title">
          <span>🔍</span>
          <span>Tìm kiếm chữ Hán</span>
        </div>
        <div className="search-bar">
          <input
            type="text"
            id="input-char"
            placeholder="Nhập chữ Hán (ví dụ: 山, 作, 工)"
          />
          <button type="button" className="search-btn" id="search-btn">
            Học ngay
          </button>
        </div>
        <div className="search-hint">
          💡 Mẹo: Bạn có thể nhập một hoặc nhiều chữ Hán cùng lúc
        </div>
      </div>
      <div
        id="writer-section"
        className="writer-section"
        style={{ display: "none" }}
      />
      <div className="categories-grid">
        <div className="category-card work">
          <div className="category-header" onclick="toggleCategory(this)">
            <div className="category-title">
              <span className="category-icon">👥</span>
              <span>Bộ Thủ : Nhân - 人(亻) </span>
            </div>
            <span className="toggle-arrow">▼</span>
          </div>
          <div className="char-grid">
            <button className="char-button" data-char="     人     ">
              {" "}
              人{" "}
            </button>
            <button className="char-button" data-char="他">
              他{" "}
            </button>
            <button className="char-button" data-char="个">
              个
            </button>
            <button className="char-button" data-char="们">
              们
            </button>
            <button className="char-button" data-char="会">
              会
            </button>
            <button className="char-button" data-char="你">
              你
            </button>
            <button className="char-button" data-char="作">
              作
            </button>
            <button className="char-button" data-char="从">
              从
            </button>
            <button className="char-button" data-char="体">
              体
            </button>
            <button className="char-button" data-char="什">
              什
            </button>
            <button className="char-button" data-char="做">
              做
            </button>
            <button className="char-button" data-char="住">
              住
            </button>
            <button className="char-button" data-char="今">
              今
            </button>
            <button className="char-button" data-char="候">
              候
            </button>
            <button className="char-button" data-char="假">
              假
            </button>
            <button className="char-button" data-char="介">
              介
            </button>
            <button className="char-button" data-char="休">
              休
            </button>
            <button className="char-button" data-char="以">
              以
            </button>
            <button className="char-button" data-char="但">
              但
            </button>
            <button className="char-button" data-char="使">
              使
            </button>
            <button className="char-button" data-char="信">
              信
            </button>
            <button className="char-button" data-char="位">
              位
            </button>
            <button className="char-button" data-char="件">
              件
            </button>
            <button className="char-button" data-char="便">
              便
            </button>
            <button className="char-button" data-char="像">
              像
            </button>
            <button className="char-button" data-char="例">
              例
            </button>
            <button className="char-button" data-char="低">
              低
            </button>
            <button className="char-button" data-char="倒">
              倒
            </button>
            <button className="char-button" data-char="停">
              停
            </button>
            <button className="char-button" data-char="份">
              份
            </button>
          </div>
        </div>
        <div className="category-card nature">
          <div className="category-header" onclick="toggleCategory(this)">
            <div className="category-title">
              <span className="category-icon">🏔️</span>
              <span>Bộ Thủ : Khẩu - 口(kǒu) </span>
            </div>
            <span className="toggle-arrow">▼</span>
          </div>
          <div className="char-grid">
            <button className="char-button" data-char="和">
              和
            </button>
            <button className="char-button" data-char="后">
              后
            </button>
            <button className="char-button" data-char="同">
              同
            </button>
            <button className="char-button" data-char="名">
              名
            </button>
            <button className="char-button" data-char="听">
              听
            </button>
            <button className="char-button" data-char="告">
              告
            </button>
            <button className="char-button" data-char="呢">
              呢
            </button>
            <button className="char-button" data-char="叫">
              叫
            </button>
            <button className="char-button" data-char="商">
              商
            </button>
            <button className="char-button" data-char="吗">
              吗
            </button>
            <button className="char-button" data-char="吧">
              吧
            </button>
            <button className="char-button" data-char="吃">
              吃
            </button>
            <button className="char-button" data-char="号">
              号
            </button>
            <button className="char-button" data-char="哪">
              哪
            </button>
            <button className="char-button" data-char="喜">
              喜
            </button>
            <button className="char-button" data-char="右">
              右
            </button>
            <button className="char-button" data-char="哥">
              哥
            </button>
            <button className="char-button" data-char="喝">
              喝
            </button>
            <button className="char-button" data-char="唱">
              唱
            </button>
            <button className="char-button" data-char="可">
              可
            </button>
            <button className="char-button" data-char="只">
              只
            </button>
            <button className="char-button" data-char="向">
              向
            </button>
            <button className="char-button" data-char="合">
              合
            </button>
            <button className="char-button" data-char="司">
              司
            </button>
            <button className="char-button" data-char="周">
              周
            </button>
            <button className="char-button" data-char="响">
              响
            </button>
            <button className="char-button" data-char="句">
              句
            </button>
            <button className="char-button" data-char="啊">
              啊
            </button>
            <button className="char-button" data-char="味">
              味
            </button>
          </div>
        </div>
        <div className="category-card people">
          <div className="category-header" onclick="toggleCategory(this)">
            <div className="category-title">
              <span className="category-icon">💼</span>
              <span>Bộ thủ : Đại - 大(dà)</span>
            </div>
            <span className="toggle-arrow">▼</span>
          </div>
          <div className="char-grid">
            <button className="char-button" data-char="     大    ">
              {" "}
              大{" "}
            </button>
            <button className="char-button" data-char="     天     ">
              {" "}
              天{" "}
            </button>
            <button className="char-button" data-char="     太     ">
              {" "}
              太{" "}
            </button>
            <button className="char-button" data-char="     头     ">
              {" "}
              头{" "}
            </button>
            <button className="char-button" data-char="     套     ">
              {" "}
              套{" "}
            </button>
            <button className="char-button" data-char="     失     ">
              {" "}
              失{" "}
            </button>
            <button className="char-button" data-char="     夫     ">
              {" "}
              夫{" "}
            </button>
            <button className="char-button" data-char="     奇     ">
              {" "}
              奇{" "}
            </button>
            <button className="char-button" data-char="     奖    ">
              {" "}
              奖{" "}
            </button>
            <button className="char-button" data-char="     奋     ">
              {" "}
              奋{" "}
            </button>
            <button className="char-button" data-char="     央     ">
              {" "}
              央{" "}
            </button>
            <button className="char-button" data-char="     奈     ">
              {" "}
              奈{" "}
            </button>
            <button className="char-button" data-char="     夹     ">
              {" "}
              夹{" "}
            </button>
            <button className="char-button" data-char="     夺     ">
              {" "}
              夺{" "}
            </button>
            <button className="char-button" data-char="     奔     ">
              {" "}
              奔{" "}
            </button>
            <button className="char-button" data-char="     奉     ">
              {" "}
              奉{" "}
            </button>
            <button className="char-button" data-char="     秦    ">
              {" "}
              秦{" "}
            </button>
            <button className="char-button" data-char="     奥     ">
              {" "}
              奥{" "}
            </button>
            <button className="char-button" data-char="     契     ">
              {" "}
              契{" "}
            </button>
            <button className="char-button" data-char="     夸     ">
              {" "}
              夸{" "}
            </button>
            <button className="char-button" data-char="     夷     ">
              {" "}
              夷{" "}
            </button>
            <button className="char-button" data-char="     奠     ">
              {" "}
              奠{" "}
            </button>
            <button className="char-button" data-char="     奢     ">
              {" "}
              奢{" "}
            </button>
          </div>
        </div>
        <div className="category-card basic collapsed">
          <div className="category-header" onclick="toggleCategory(this)">
            <div className="category-title">
              <span className="category-icon">🔤</span>
              <span>Bộ Thủ : Nhi - 儿(ér)</span>
            </div>
            <span className="toggle-arrow">▼</span>
          </div>
          <div className="char-grid">
            <button className="char-button" data-char="     先    ">
              {" "}
              先{" "}
            </button>
            <button className="char-button" data-char="     光     ">
              {" "}
              光{" "}
            </button>
            <button className="char-button" data-char="     兄     ">
              {" "}
              兄{" "}
            </button>
            <button className="char-button" data-char="     党    ">
              {" "}
              党{" "}
            </button>
            <button className="char-button" data-char="     允     ">
              {" "}
              允{" "}
            </button>
            <button className="char-button" data-char="     兆     ">
              {" "}
              兆{" "}
            </button>
            <button className="char-button" data-char="     兜     ">
              {" "}
              兜{" "}
            </button>
            <button className="char-button" data-char="     兢     ">
              {" "}
              兢{" "}
            </button>
          </div>
        </div>
        <div className="category-card basic collapsed">
          <div className="category-header" onclick="toggleCategory(this)">
            <div className="category-title">
              <span className="category-icon">🔤</span>
              <span>Bộ Thủ : Con - 子(zǐ)</span>
            </div>
            <span className="toggle-arrow">▼</span>
          </div>
          <div className="char-grid">
            <button className="char-button" data-char="     学     ">
              {" "}
              学{" "}
            </button>
            <button className="char-button" data-char="     字     ">
              {" "}
              字{" "}
            </button>
            <button className="char-button" data-char="     孩     ">
              {" "}
              孩{" "}
            </button>
            <button className="char-button" data-char="     存     ">
              {" "}
              存{" "}
            </button>
            <button className="char-button" data-char="     孙     ">
              {" "}
              孙{" "}
            </button>
            <button className="char-button" data-char="     季     ">
              {" "}
              季{" "}
            </button>
            <button className="char-button" data-char="     孤     ">
              {" "}
              孤{" "}
            </button>
            <button className="char-button" data-char="     孕     ">
              {" "}
              孕{" "}
            </button>
            <button className="char-button" data-char="     孝     ">
              {" "}
              孝{" "}
            </button>
            <button className="char-button" data-char="     孵     ">
              {" "}
              孵{" "}
            </button>
            <button className="char-button" data-char="     孪     ">
              {" "}
              孪{" "}
            </button>
          </div>
        </div>
        <div className="category-card basic collapsed">
          <div className="category-header" onclick="toggleCategory(this)">
            <div className="category-title">
              <span className="category-icon">🔤</span>
              <span>Bộ Thủ : Thân - 身(shēn)</span>
            </div>
            <span className="toggle-arrow">▼</span>
          </div>
          <div className="char-grid">
            <button className="char-button" data-char="     身     ">
              {" "}
              身{" "}
            </button>
            <button className="char-button" data-char="     躺     ">
              {" "}
              躺{" "}
            </button>
            <button className="char-button" data-char="     躲     ">
              {" "}
              躲{" "}
            </button>
            <button className="char-button" data-char="     躯     ">
              {" "}
              躯{" "}
            </button>
            <button className="char-button" data-char="     躬     ">
              {" "}
              躬{" "}
            </button>
          </div>
        </div>
        <div className="category-card basic collapsed">
          <div className="category-header" onclick="toggleCategory(this)">
            <div className="category-title">
              <span className="category-icon">🔤</span>
              <span>Bộ Thủ : Thủ - 手(扌)</span>
            </div>
            <span className="toggle-arrow">▼</span>
          </div>
          <div className="char-grid">
            <button className="char-button" data-char="     打     ">
              {" "}
              打{" "}
            </button>
            <button className="char-button" data-char="     找     ">
              {" "}
              找{" "}
            </button>
            <button className="char-button" data-char="     拿     ">
              {" "}
              拿{" "}
            </button>
            <button className="char-button" data-char="     提     ">
              {" "}
              提{" "}
            </button>
            <button className="char-button" data-char="     报     ">
              {" "}
              报{" "}
            </button>
            <button className="char-button" data-char="     才     ">
              {" "}
              才{" "}
            </button>
            <button className="char-button" data-char="     接     ">
              {" "}
              接{" "}
            </button>
            <button className="char-button" data-char="     拉     ">
              {" "}
              拉{" "}
            </button>
            <button className="char-button" data-char="     推     ">
              {" "}
              推{" "}
            </button>
            <button className="char-button" data-char="     护     ">
              {" "}
              护{" "}
            </button>
            <button className="char-button" data-char="     排     ">
              {" "}
              排{" "}
            </button>
            <button className="char-button" data-char="     换     ">
              {" "}
              换{" "}
            </button>
            <button className="char-button" data-char="     掉     ">
              {" "}
              掉{" "}
            </button>
            <button className="char-button" data-char="     挺     ">
              {" "}
              挺{" "}
            </button>
            <button className="char-button" data-char="     把     ">
              {" "}
              把{" "}
            </button>
            <button className="char-button" data-char="     指     ">
              {" "}
              指{" "}
            </button>
            <button className="char-button" data-char="     据     ">
              {" "}
              据{" "}
            </button>
            <button className="char-button" data-char="     持     ">
              {" "}
              持{" "}
            </button>
            <button className="char-button" data-char="     技     ">
              {" "}
              技{" "}
            </button>
            <button className="char-button" data-char="     批     ">
              {" "}
              批{" "}
            </button>
            <button className="char-button" data-char="     按     ">
              {" "}
              按{" "}
            </button>
            <button className="char-button" data-char="     抓     ">
              {" "}
              抓{" "}
            </button>
            <button className="char-button" data-char="     握     ">
              {" "}
              握{" "}
            </button>
            <button className="char-button" data-char="     拍     ">
              {" "}
              拍{" "}
            </button>
            <button className="char-button" data-char="     挂     ">
              {" "}
              挂{" "}
            </button>
            <button className="char-button" data-char="     播     ">
              {" "}
              播{" "}
            </button>
            <button className="char-button" data-char="     搬     ">
              {" "}
              搬{" "}
            </button>
            <button className="char-button" data-char="     投     ">
              {" "}
              投{" "}
            </button>
            <button className="char-button" data-char="     担     ">
              {" "}
              担{" "}
            </button>
          </div>
        </div>
        <div className="category-card basic collapsed">
          <div className="category-header" onclick="toggleCategory(this)">
            <div className="category-title">
              <span className="category-icon">🔤</span>
              <span>Bộ Thủ : Thân - 身(shēn)</span>
            </div>
            <span className="toggle-arrow">▼</span>
          </div>
          <div className="char-grid">
            <button className="char-button" data-char="     身     ">
              {" "}
              身{" "}
            </button>
            <button className="char-button" data-char="     躺     ">
              {" "}
              躺{" "}
            </button>
            <button className="char-button" data-char="     躲     ">
              {" "}
              躲{" "}
            </button>
            <button className="char-button" data-char="     躯     ">
              {" "}
              躯{" "}
            </button>
            <button className="char-button" data-char="     躬     ">
              {" "}
              躬{" "}
            </button>
          </div>
        </div>
        <div className="category-card basic collapsed">
          <div className="category-header" onclick="toggleCategory(this)">
            <div className="category-title">
              <span className="category-icon">🔤</span>
              <span>Bộ Thủ : Thân - 身(shēn)</span>
            </div>
            <span className="toggle-arrow">▼</span>
          </div>
          <div className="char-grid">
            <button className="char-button" data-char="     身     ">
              {" "}
              身{" "}
            </button>
            <button className="char-button" data-char="     躺     ">
              {" "}
              躺{" "}
            </button>
            <button className="char-button" data-char="     躲     ">
              {" "}
              躲{" "}
            </button>
            <button className="char-button" data-char="     躯     ">
              {" "}
              躯{" "}
            </button>
            <button className="char-button" data-char="     躬     ">
              {" "}
              躬{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="page-vocab" className="page-content">
      <div className="search-section">
        <div className="search-bar">
          <input
            type="text"
            className="input-search"
            placeholder="Tìm kiếm từ vựng"
          />
        </div>
        <div className="category-buttons">
          <button className="filter-btn active" data-category="all">
            Tất cả
          </button>
          <button className="filter-btn" data-category="du lịch">
            Du lịch ✈️
          </button>
          <button className="filter-btn" data-category="kỹ thuật">
            Kỹ thuật 🛠️
          </button>
          <button className="filter-btn" data-category="học tập">
            Học tập 📚
          </button>
        </div>
        <div className="content-wrapper" />
      </div>
    </div>
    <div id="page-sentences" className="page-content">
      <div className="search-section">
        <div className="search-bar">
          <input
            type="text"
            className="input-search"
            placeholder="Tìm kiếm ví dụ"
          />
        </div>
        <div className="category-buttons">
          <button className="filter-btn active" data-category="all">
            Tất cả
          </button>
          <button className="filter-btn" data-category="du lịch">
            Du lịch ✈️
          </button>
          <button className="filter-btn" data-category="kỹ thuật">
            Kỹ thuật 🛠️
          </button>
          <button className="filter-btn" data-category="học tập">
            Học tập 📚
          </button>
        </div>
        <div className="content-wrapper" />
      </div>
    </div>
  </div>
  <footer className="footer">
    <div className="footer-links">
      <div className="tab-nav">
        <a
          href="https://tinhluongtaowine.vercel.app"
          className="tab-btn"
          target="_blank"
          data-page="page-hanzi"
        >
          🌐 Tính Lương TaoWine
        </a>
      </div>
      <p>
        © 2025 🐙 Học Tiếng trung |{" "}
        <a
          href="https://www.facebook.com/profile.php?id=100007963391487"
          target="_blank"
        >
          📘Tác giả: Nghĩa Anh{" "}
        </a>
      </p>
    </div>
  </footer>
</>
