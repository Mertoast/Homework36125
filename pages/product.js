import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function ProductPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.page}>
        <div className={styles.page__header} >
          <Header />
          <div className={styles.header__content}>
            Product Page
          </div>
        </div>
      </main>
    </>
  )
}
