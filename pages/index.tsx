import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from '../components/Card';

const Home: NextPage = () => {
  const handleContext = () => {
    console.log('context');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>yaoyaoCleo</title>
        <meta name="description" content="a Home of Cleo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>

        <div className={styles.grid}>
          <Card h2tag='Context &rarr;' ptag='Test Context.' onClick={handleContext} />
          <Card h2tag='Documentation &rarr;' ptag='Find in-depth information about Next.js features and API.' />
          <Card h2tag='Examples &rarr;' ptag='Discover and deploy boilerplate example Next.js projects.' />
          <Card h2tag='Deploy &rarr;' ptag='Instantly deploy your Next.js site to a public URL with Vercel.' />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
