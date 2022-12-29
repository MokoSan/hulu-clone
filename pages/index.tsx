import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

const Home : NextPage<Results> = ( results ) => {
  return (
    <div> 
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <Results results={results.results} />
    </div>
  )
}

export default Home

export async function getServerSideProps(context : any) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
    .then((res) => {
      return res.json();
    });
  return {
    props: {
      results: request.results
    }
  }
}
