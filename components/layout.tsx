import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
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
          content="Hashtune Home Page"
        />
        <meta
          property="og:image"

        />
        <title>Hashtune</title>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar/>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
