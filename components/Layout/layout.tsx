import Head from "next/head";
import styles from "./Layout.module.scss";
import Link from "next/link";
import { Navbar } from "./Navbar/Navbar";

export const siteTitle = "Hashtune";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container} data-cy="cont-layout">
      <Head>
        <meta name="description" content="Hashtune" />
        <meta name="theme-color" content="#F0D065" />
        <title>Hashtune</title>
        <meta name="og:title" content={siteTitle} /> 
      </Head>
      <Navbar/>
      <main className= {styles.main} data-cy= "children-layout">{children}</main>
    </div>
  );
}
