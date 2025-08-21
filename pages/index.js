import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Học Tiếng Trung</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
        <script src="/script.js" defer></script>
      </Head>

      <div id="app">
        {/* Toàn bộ nội dung trong <body> của index.html bạn copy sang đây */}
        <header>
          <h1>Học Tiếng Trung</h1>
        </header>
        <main>
          <input id="input-char" placeholder="Nhập chữ Hán..." />
          <div id="results"></div>
        </main>
      </div>
    </>
  );
}
