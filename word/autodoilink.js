const SITE_URL = "https://www.luyentiengtrung.c1om";
const HANZI_BASE = "/hanzi1/";

document.querySelectorAll(".learn-btn").forEach(btn => {

    const word = btn.dataset.word;

    btn.href =
        HANZI_BASE +
        encodeURIComponent(word) +
        ".html";
});
