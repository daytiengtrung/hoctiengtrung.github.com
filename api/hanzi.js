const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    // Đọc dữ liệu từ file tuvung.json (đường dẫn tương đối với file API)
    const dictionaryData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'tuvung.json'), 'utf-8'));

    // Lấy ký tự tìm kiếm từ query string (vd: /api/hanzi?char=我)
    const { char } = req.query;

    if (!char) {
        return res.status(400).send('Missing character parameter');
    }

    const characterData = dictionaryData[char];

    if (characterData) {
        // Trả về dữ liệu nếu tìm thấy
        res.status(200).json(characterData);
    } else {
        // Trả về lỗi 404 nếu không tìm thấy
        res.status(404).json({ error: 'Character not found in database.' });
    }
};
