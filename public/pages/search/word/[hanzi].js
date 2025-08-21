import Head from "next/head";

export default function WordPage({ hanzi }) {
  return (
    <>
      <Head>
        <title>Học chữ Hán với từ "{hanzi}" - Học Tiếng Trung</title>
        <meta name="description" content={`Học chữ Hán "${hanzi}" với ví dụ và nghĩa tiếng Trung.`} />

        {/* Open Graph cho Facebook */}
        <meta property="og:title" content={`Học chữ Hán "${hanzi}"`} />
        <meta property="og:description" content={`Tìm hiểu chữ Hán "${hanzi}" với nghĩa, pinyin, và ví dụ.`} />
        <meta property="og:image" content="/share.png" />
        <meta property="og:url" content={`https://hoctiengtrung.vercel.app/search/word/${hanzi}`} />
      </Head>

      <h1>{hanzi}</h1>
      <div id="results">Nội dung chữ {hanzi} sẽ hiển thị ở đây...</div>
    </>
  );
}

// getServerSideProps: lấy hanzi từ URL
export async function getServerSideProps({ params }) {
  return { props: { hanzi: params.hanzi } };
}
