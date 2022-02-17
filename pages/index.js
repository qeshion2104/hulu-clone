import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="underline p-20">
        Hello world!
      </h1>

      {/* Header */}
      <Header />

      {/* Nav */}

      {/* Results */}

    </div>
  )
}
