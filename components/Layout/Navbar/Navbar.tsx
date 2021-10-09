import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Tab from "./Tab";
import Search from "./Search";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { MetamaskContext } from "../../../pages/connect-wallet";
import React from "react";

export const Navbar = () => {
  const {
    accounts,
    walletConnected,
    networkConnected,
    fetchingAccounts,
    fetchingChain,
    fetchingNetwork,
  } = React.useContext(MetamaskContext);

  const walletState = () => {
    if (fetchingAccounts || fetchingChain || fetchingNetwork) {
      return <></>;
    } else if (!walletConnected) {
      return (
        <a
          className={styles["navbar__wallet"] + " btn"}
          data-cy="navbar-wallet"
        >
          Connect Wallet
        </a>
      );
    } else if (walletConnected && !networkConnected) {
      return <div>Binance testnet required</div>;
    } else {
      return <div>Connected: {accounts[0]}</div>;
    }
  };
  return (
    <nav className={styles["navbar"]} data-cy="navbar">
      <div className={styles["navbar__logo"]} data-cy="navbar-logo">
        <Link href="/">
          <a>
            <Image src="/images/logo.svg" width={133} height={32} />
          </a>
        </Link>
      </div>
      <div className={styles["navbar__menu"]} data-cy="navbar-menu">
        <div className={styles["navbar__menu-item"]} data-cy="navbar-menu-item">
          <Tab href="/" title="Songs" icon="record" />
        </div>
        <div className={styles["navbar__menu-item"]} data-cy="navbar-menu-item">
          <Tab href="/artists" title="Artists" icon="music-note" />
        </div>
      </div>
      <Search />
      <Link href="/connect-wallet">{walletState()}</Link>
      <BurgerMenu />
    </nav>
  );
};
