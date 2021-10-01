import Head from "next/head";
import styles from "./Layout.module.scss";
import Link from "next/link";
import { Navbar } from "./Navbar/Navbar";


export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container} data-cy="cont-layout">
      <Navbar data-cy="comp-navbar" />
      <main className={styles.main} data-cy="children-layout">
        {children}
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
