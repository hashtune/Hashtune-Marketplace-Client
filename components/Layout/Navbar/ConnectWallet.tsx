import React, { useEffect, useRef, useState } from "react";
import { MetamaskContext } from "../../../hooks/connectWallet";
import styles from "./ConnectWallet.module.scss";
import { IconButton } from "./IconButton";

export type ConnectWalletProps = {
  toggleModal: any;
  isActive: boolean;
};

const ConnectWallet = (props: ConnectWalletProps) => {
  // If metamask is installed then window.ethereum is available.
  // Also need to listen for account changes.
  const {
    account,
    network,
    chainId,
    walletConnected,
    networkConnected,
    getAccount,
    getNetwork,
    getChainId,
    changeTokenPrice,
  } = React.useContext(MetamaskContext);
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
  // const div : HTMLDivElement = <div></div>

  return (
    <div>
      <div className={styles["connectWallet"]}>
        <div className={styles["card"]}>
          <div className={styles["header"]}>
            <div
              className={styles["header__close"]}
              onClick={() => handleClick()}
            >
              <div className={styles["header__close--up"]}></div>
              <div className={styles["header__close--down"]}></div>
            </div>
            <a className={styles["title"]}>Connect Wallet</a>
            <div className={styles["right"]}></div>
          </div>

          <div className={styles["cardBody"]}>
            <p className={styles["policy"]}>
              By connecting your wallet, you agree to our{" "}
              <b>Terms of Service</b> and <b>Privacy Policy</b>
            </p>
            <div className={styles["buttons__wrapper"]}>
              {account ? (
                <>{account}</>
              ) : (
                <div className={styles["buttons"]}>
                  <IconButton
                    icon={"metamask"}
                    title={"Metamask"}
                    onClick={() => {
                      getAccount();
                      getNetwork();
                      getChainId();
                    }}
                    walletConnected={walletConnected}
                    class={"buttons__btn--one"}
                  />
                  <IconButton
                    icon={"wallet-connect"}
                    title={"WalletConnect"}
                    onClick={() => {
                      getAccount();
                      getNetwork();
                      getChainId();
                    }}
                    walletConnected={walletConnected}
                    class={"buttons__btn--two"}
                  />
                </div>
              )}
              <p className={styles["wrongNetwork"]}>
                {networkConnected
                  ? ""
                  : "You need to connect to the binance test network"}
              </p>
            </div>
            {/* <div>active account: {account}</div>
          <div>active network: {network}</div>
          <div>active chain Id: {chainId}</div> */}
            <div className={styles["footer"]}>
              <p>
                <b>Don't have a wallet?</b>
              </p>
              <p>Check our complete guide on wallets.</p>
            </div>
          </div>
        </div>
        {/* <button onClick={changeTokenPrice}>change price of existing token</button> */}
      </div>
      <div ref={overlay} className={"site-overlay"}></div>
    </div>
  );
};

export default ConnectWallet;
