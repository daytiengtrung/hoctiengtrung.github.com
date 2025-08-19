const fs = require('fs');
const path = require('path');
const pinyinPro = require('pinyin-pro');

// Đọc dữ liệu từ file tuvung.json
const dictionaryData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data', 'tuvung.json'), 'utf-8'));

// Đọc mẫu HTML
const template = fs.readFileSync(path.join(__dirname, 'src', 'template.html'), 'utf-8');

// Tạo thư mục đầu ra nếu chưa có
const outputDir = 'public/chu-han';
if (!fs.existsSync('public')) fs.mkdirSync('public');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Hàm lấy thông tin bộ thủ (không phụ thuộc vào file ngoài)
function getComponentsInfo(char) {
    return 'Chưa có thông tin phân tách';
}

// Hàm tạo HTML cho từ vựng
function createWordsHtml(words) {
    return words.map(word => `
        <div class="word-item">
            <div class="word-pinyin">${pinyinPro.pinyin(word.chinese, { toneType: 'num' })}</div>
            <div class="word-chinese">${word.chinese}</div>
            <div class="word-meaning">${word.meaning}</div>
        </div>
    `).join('');
}

// Hàm tạo HTML cho câu ví dụ
function createSentencesHtml(sentences) {
    return sentences.map(sentence => `
        <div class="sentence-item">
            <div class="sentence-pinyin">${pinyinPro.pinyin(sentence.chinese, { toneType: 'num' })}</div>
            <div class="sentence-chinese">${sentence.chinese}</div>
            <div class="sentence-vietnamese">${sentence.vietnamese}</div>
        </div>
    `).join('');
}

// Lặp qua từng ký tự và tạo trang HTML
for (const char in dictionaryData) {
    const charData = dictionaryData[char];
    const pinyin = pinyinPro.pinyin(char, { toneType: 'num' });
    const hanViet = charData.hanviet || 'Chưa có Hán Việt';
    const components = getComponentsInfo(char);

    let finalHtml = template
        .replace(/%%CHARACTER%%/g, char)
        .replace(/%%PINYIN%%/g, pinyin)
        .replace(/%%HAN_VIET%%/g, hanViet)
        .replace(/%%COMPONENTS%%/g, components)
        .replace(/%%WORDS_HTML%%/g, createWordsHtml(charData.words || []))
        .replace(/%%SENTENCES_HTML%%/g, createSentencesHtml(charData.sentences || []));

    // Ghi tệp HTML vào thư mục 'public/chu-han'
    fs.writeFileSync(path.join(outputDir, `${char}.html`), finalHtml);
}

// Tạo trang chủ (index.html) trong thư mục public
// Đọc nội dung từ tệp index.html nguồn
const indexHtmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

// Ghi nội dung vào tệp public/index.html
fs.writeFileSync(path.join('public', 'index.html'), indexHtmlContent);

console.log('Tạo tất cả các trang HTML thành công!');
