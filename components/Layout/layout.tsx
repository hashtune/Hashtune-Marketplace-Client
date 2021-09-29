import Head from 'next/head'
import styles from './Layout.module.scss'
import Link from 'next/link'
import { Navbar } from './Navbar/Navbar'

export const siteTitle = 'Hashtune'

export default function Layout({ children, home }: {
  children: React.ReactNode
  home?: boolean
})  {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Hashtune"
        />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="theme-color" content="#F0D065" />
        <meta property="og:image"/>
        <title>Hashtune</title>
        <meta name="og:title" content={siteTitle} />
        <link href="//db.onlinewebfonts.com/c/ace51fb0e489a977bed8a67511865c11?family=Averta+CY+W01" rel="stylesheet" type="text/css"/>
      </Head>
      <Navbar/>
      <main className= {styles.main}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/"><a>Home</a></Link>
        </div>
      )}
    </div>
  )
}
