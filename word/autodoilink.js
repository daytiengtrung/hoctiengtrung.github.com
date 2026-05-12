const SITE_URL = "https://www.luyentiengtrung.c1om";

const HANZI_BASE = "/hanzi/";

/*
  Tạo link học ngay
*/
document.querySelectorAll(".learn-btn").forEach(btn => {

    const word = btn.dataset.word;

    btn.href =
        HANZI_BASE +
        encodeURIComponent(word) +
        ".html";
});


/*
  Tạo canonical tự động
*/
const currentWord = document.body.dataset.word;

const canonical =
    SITE_URL +
    "/word/" +
    encodeURIComponent(currentWord) +
    ".html";

const canonicalTag =
    document.getElementById("canonical");

if (canonicalTag) {
    canonicalTag.href = canonical;
}
