import type { NextPage } from 'next'
import Head from 'next/head'
import VideoUpload from '../components/VideoUpload'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Submit ur mp4 video</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome 
        </h1>
        <VideoUpload/>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
