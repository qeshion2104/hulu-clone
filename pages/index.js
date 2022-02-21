import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  console.warn(results)
  return (
    <div>
      <Head>
        <title>Hulu-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Results */}
      <Results results={results.results}/>
    </div>
  )
}


// server side render
// this will execute before render
export async function getServerSideProps(context) {
  const genre = context.query.genre

  try {
    const url = `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
    const response = await fetch(url)
    const json = await response.json()
    return { 
      props: { 
        results: json 
      } 
    }
  } catch (err) {
    console.error("ERROR:", err)
    return { props: { response: null } }
  }
}