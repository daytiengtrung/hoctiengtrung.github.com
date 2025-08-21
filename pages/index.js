import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Học Tiếng Trung</title>
        <meta name="description" content="Học chữ Hán miễn phí với ví dụ, pinyin, và nghĩa tiếng Việt." />
        <link rel="stylesheet" href="/style.css" />
        <script src="/script.js" defer></script>
      </Head>

      <div className="container">
        <h1>Học Tiếng Trung</h1>
        <div className="search-bar">
          <input id="input-char" placeholder="Nhập chữ Hán..." />
          <button id="search-btn">Tìm</button>
        </div>
        <div id="results"></div>
      </div>
    </>
  );
}
