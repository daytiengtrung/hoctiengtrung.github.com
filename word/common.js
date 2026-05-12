const HANZI_BASE = "/hanzi/";

document.querySelectorAll(".learn-btn").forEach(btn => {

    const word = btn.dataset.word;

    btn.href =
        HANZI_BASE +
        encodeURIComponent(word) +
        ".html";
});
