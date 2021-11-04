import React, { useContext, useEffect, useRef, useState } from "react";
import { WalletContext } from "../../../context/WalletContext";
import styles from "./ConnectWallet.module.scss";
import { IconButton } from "./IconButton";

export type ConnectWalletProps = {
  toggleModal: any;
  isActive: boolean;
};

const ConnectWallet = (props: ConnectWalletProps) => {
  // If metamask is installed then window.ethereum is available.
  // Also need to listen for account changes.

  const { connectMobileWallet, connectExtensionWallet } = useContext(WalletContext);
  useEffect(() => {
    showModal();
  }, [close]);
  const overlay: React.RefObject<HTMLDivElement> = useRef(null);
  const showModal = () => {
    overlay.current?.classList.toggle("site-overlay--visible");
  };
  const handleClick = () => {
    showModal();
    props.toggleModal(!props.isActive);
  };

  const [isAuthenticatingMM, setAuthenticatingMM] = useState(false);
  const [isAuthenticatingWC, setAuthenticatingWC] = useState(false);
  const iconButtonOne: React.ReactNode = (
    <IconButton
      title={"Metamask"}
      onClick={() => {
        connectExtensionWallet();
        setAuthenticatingMM(true);
      }}
      walletConnected={false}
      isAuthenticating={false}
      class={styles["buttons__btn--two"]}
    />
  );
  const iconButtonTwo: React.ReactNode = (
    <IconButton
      title={"WalletConnect"}
      onClick={() => {
        connectMobileWallet();
        setAuthenticatingWC(true);
      }}
      walletConnected={false}
      isAuthenticating={false}
      class={styles["buttons__btn--two"]}
    />
  );
  const connectingText = (walletName: string) => {
    return (
      <a className={styles["inActiveText"]}>
        Confirm by signing in to authenticate with your {walletName} Wallet …
      </a>
    );
  };

  const wrongNetwork: React.RefObject<HTMLParagraphElement> = useRef(null);
  const footer: React.RefObject<HTMLDivElement> = useRef(null);

  const toggleWrongNetworkAndFooter = () => {
    wrongNetwork.current?.classList.toggle(
      styles["buttons__wrong-network--invisible"]
    );
    footer.current?.classList.toggle(styles["body__footer--invisible"]);
  };

  const toggleAuthenticatingMM = () => {
    if (isAuthenticatingMM) {
      setButtonOne(iconButtonOne);
      setButtonTwo(connectingText("Metamask"));
    } else {
      setButtonOne(iconButtonOne);
      setButtonTwo(iconButtonTwo);
    }
  };
  useEffect(() => {
    toggleAuthenticatingMM();
    toggleWrongNetworkAndFooter();
  }, [isAuthenticatingMM]);

  useEffect(() => {
    toggleAuthenticatingWC();
    toggleWrongNetworkAndFooter();
  }, [isAuthenticatingWC]);

  const toggleAuthenticatingWC = () => {
    if (isAuthenticatingWC) {
      setButtonOne(iconButtonTwo);
      setButtonTwo(connectingText("WalletConnect"));
    } else {
      setButtonOne(iconButtonOne);
      setButtonTwo(iconButtonTwo);
    }
  };

  const [buttonOne, setButtonOne] = useState(iconButtonOne);
  const [buttonTwo, setButtonTwo] = useState(iconButtonTwo);

  return (
    <div>
      <div className={styles["connect-card"]}>
        <div className={styles["header"]}>
          <div
            className={styles["header__close"]}
            onClick={() => handleClick()}
          >
            <div className={styles["header__close--up"]}></div>
            <div className={styles["header__close--down"]}></div>
          </div>
          <a className={styles["header__title"]}>Connect Wallet</a>
        </div>
        <p className={styles["policy"]}>
          By connecting your wallet, you agree to our <b>Terms of Service</b>{" "}
          and <b>Privacy Policy</b>
        </p>
        <div className={styles["body"]}>
          <div className={styles["body__buttons"]}>
            <div className={styles["buttons"]}>
              {buttonOne}
              {buttonTwo}
            </div>
            <p ref={wrongNetwork} className={styles["buttons__wrong-network"]}>
              You need to connect to the binance test network
            </p>
          </div>
          {/* <div>active account: {account}</div>
          <div>active network: {network}</div>
          <div>active chain Id: {chainId}</div> */}
          <div ref={footer} className={styles["body__footer"]}>
            <p>
              <b>Don't have a wallet?</b>
            </p>
            <p>Check our complete guide on wallets.</p>
          </div>
        </div>
        {/* <button onClick={changeTokenPrice}>change price of existing token</button> */}
      </div>
      <div ref={overlay} className={"site-overlay"}></div>
    </div>
  );
};

export default ConnectWallet;
