import React from "react";
import { MetamaskContext } from "../../../hooks/connectWallet";
import styles from "./ConnectWallet.module.scss";

export type ConnectWalletProps = {
  closeModal: (data: boolean) => {};
};
export default function ConnectWallet<ConnectWalletProps>({ closeModal }: any) {
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

  return (
    <div className={styles.connectWallet}>
      <div className={styles.card}>
        <div className={styles.header}>
          <p onClick={() => closeModal(false)} className={styles.left}>
            x
          </p>
          <h1 className={styles.title}>Connect Wallet</h1>
          <div className={styles.right}></div>
        </div>

        <div className={styles.cardBody}>
          <p className={styles.policy}>
            By connecting your wallet, you agree to our Terms of Service and
            Privacy Policy
          </p>
          {account ? (
            <>{account}</>
          ) : (
            <div className={styles.buttons}>
              <button
                id="connect1"
                className={styles.one}
                disabled={walletConnected}
                onClick={() => {
                  getAccount();
                  getNetwork();
                  getChainId();
                }}
              >
                {walletConnected ? "Wallet Connected" : "Metamask"}
              </button>
              <button
                id="connect2"
                disabled={true}
                className={styles.two}
                onClick={() => {
                  getAccount();
                  getNetwork();
                  getChainId();
                }}
              >
                {walletConnected ? "Wallet Connected" : "WalletConnect"}
              </button>
            </div>
          )}
          <div className={styles.wrongNetwork}>
            {networkConnected
              ? ""
              : "You need to connect to the binance test network"}
          </div>
          {/* <div>active account: {account}</div>
          <div>active network: {network}</div>
          <div>active chain Id: {chainId}</div> */}
          <p> Don&apos;t have a wallet?</p>
          <p>Check our complete guide on wallets</p>
        </div>
      </div>

      {/* <button onClick={changeTokenPrice}>change price of existing token</button> */}
    </div>
  );
}
