import Head from "next/head";
import data from "../../../public/base.json";

export default function WordPage({ hanzi, entry }) {
  return (
    <>
      <Head>
        <title>{`Chữ Hán ${hanzi} - Học Tiếng Trung`}</title>
        <meta name="description" content={`Học chữ Hán "${hanzi}" với nghĩa: ${entry.mean || "Không tìm thấy"}`} />
      </Head>

      <h1>{hanzi}</h1>
      <p>Nghĩa: {entry.mean || "Chưa có trong từ điển"}</p>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const hanzi = params.hanzi;
  const entry = data[hanzi] || { mean: "" };
  return { props: { hanzi, entry } };
}
