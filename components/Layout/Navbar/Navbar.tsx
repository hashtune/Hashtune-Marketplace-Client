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
import { useDisconnectUserMutation } from "../../../graphql/generated/apolloComponents";
import { Session } from "../../../hooks/session";

export type NavbarProps = {
  session: Session
}

export const Navbar = (props: NavbarProps) => {
  // Needs to be passed into Navbar on each page
  const [connectVisible, setConnectVisible] = React.useState(false);

  const router = useRouter();
  const {
    walletConnected,
    networkConnected,
    fetchingAccount,
    fetchingChain,
    fetchingNetwork,
    disconnectAccount
  } = React.useContext(MetamaskContext);
  let creatorImage = "/dist/images/mock/users/26.png";

  const [dropDownOpen, setDropDownOpen] = React.useState(false)
  const [disconnectUser] = useDisconnectUserMutation();
  async function handleDisconnect() {
    disconnectAccount()
    const res = await disconnectUser();
    return res.data?.disconnected;
  }
  function toggleDropDown () {
    setDropDownOpen(!dropDownOpen)
  }
  const walletState = () => {
    if (fetchingAccount || fetchingChain || fetchingNetwork) {
      return <></>;
    } else if (!walletConnected || !props.session) {
      return (
        <>
          <a
            className={styles["navbar__wallet"] + " btn"}
            onClick={() => setConnectVisible(true)}
          >
            Connect Wallet
          </a>
        </>
      );
    } else if (walletConnected && !networkConnected) {
      return <div>Binance testnet required</div>;
    } else if (props.session) {
      return (
        <div className={styles["navbar__profileContainer"]}>
          {/* TODO if approved creator */}
          <button className={styles["navbar__uploadMusic"]} onClick={() => router.replace("/upload")}><span>Upload Music</span></button>
        <div className={styles["navbar__profilePicker"]}>
        <Image
              alt="cover image"
              src={creatorImage}
              width={35}
              height={35}
              onClick={() => toggleDropDown()}
            />
            <svg onClick={() => toggleDropDown()} fill="#ffffff" className={styles["navbar__down"]}>
              <use xlinkHref="/dist/icons/sprite.svg#hashtune-arrow-down" />
            </svg>
            <div className={dropDownOpen ? styles["navbar__dropdown"] : styles["navbar__dropdown--inactive"]}>
              <div className={styles["navbar__dropdown--item"]} onClick={() => router.push(`/${props.session.user.handle}`)}>
                <div className={styles["navbar__dropdown--name"]}>
                {props.session?.user.fullName}
                </div>
                <div className={styles["navbar__dropdown--handle"]}>
                  @{props.session?.user.handle}
                </div>
              </div>
              <div className={styles["navbar__dropdown--item"]} onClick={() =>  handleDisconnect()}>Sign out</div>
            </div>
            
        </div>
        </div>
      );
    }
  };

  if (router.pathname !== "/signup") {
    return (
      <nav className={styles["navbar"]} data-cy="navbar">
        <div className={styles["navbar__logo"]} data-cy="navbar-logo">
          <Link href="/">
            <a>
              <Image
                src="/images/logo.svg"
                width={133}
                height={32}
                alt="Hashtune Logo"
              />
            </a>
          </Link>
        </div>
        <div className={styles["navbar__menu"]} data-cy="navbar-menu">
          <div
            className={styles["navbar__menu-item"]}
            data-cy="navbar-menu-item"
          >
            <Tab href="/" title="Songs" icon="record" />
          </div>
          <div
            className={styles["navbar__menu-item"]}
            data-cy="navbar-menu-item"
          >
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
          />
        )}
      </nav>
    );
  } else {
    return (
      <nav
        className={
          styles["navbar"] +
          " " +
          styles["register__navbar"] +
          " flex-content-center"
        }
        data-cy="navbar"
      >
        <div className={styles["navbar__logo"]} data-cy="navbar-logo">
          <Link href="/">
            <a>
              {/* <Image src="/images/logo.svg" width={169} height={39} /> */}
              <Image
                src="/images/logo.svg"
                width={133}
                height={32}
                alt="Hashtune Logo"
              />
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
    );
  }
};
