import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Tab from "./Tab";
import Search from "./Search";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { MetamaskContext } from "../../../hooks/connectWallet";
import React, { useEffect, useRef } from "react";
import ConnectWallet from "./ConnectWallet";
import { useRouter } from "next/router";

export const Navbar = () => {
  const [connectVisible, setConnectVisible] = React.useState(false);

  const overlay: React.RefObject<HTMLDivElement> = useRef(null);
  const router = useRouter();
  const {
    account,
    walletConnected,
    networkConnected,
    fetchingAccount,
    fetchingChain,
    fetchingNetwork,
  } = React.useContext(MetamaskContext);

  const walletState = () => {

    if (fetchingAccount || fetchingChain || fetchingNetwork) {
      return <></>;
    } else if (!walletConnected) {
      return (
        <>
          <a
            className={styles["navbar__wallet"] + " btn"}
            data-cy="navbar-wallet"
            onClick={() => setConnectVisible(true)}
          >
            Connect Wallet
          </a>
        </>
      );
    } else if (walletConnected && !networkConnected) {
      return <div>Binance testnet required</div>;
    } else {
      return <div>Connected: {account}</div>;
    }
  };

  if(router.pathname !== "/signup"){
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
        {walletState()}
        <BurgerMenu />
        {connectVisible === true && (
          <ConnectWallet
            isActive={connectVisible}
            toggleModal={setConnectVisible}
          ></ConnectWallet>
        )}
      </nav>
    );
  } else {
    return (
      <nav className={styles["navbar"] + " flex-content-center"} data-cy="navbar">
        <div className={styles["navbar__logo"]} data-cy="navbar-logo">
          <Link href="/">
            <a>
              <Image src="/images/logo.svg" width={133} height={32} />
            </a>
          </Link>
        </div>
        {/* {walletState()}
        <BurgerMenu />
        {connectVisible === true && (
          <ConnectWallet
            isActive={connectVisible}
            toggleModal={setConnectVisible}
          ></ConnectWallet>
        )} */}
      </nav>
    )
  }
};
