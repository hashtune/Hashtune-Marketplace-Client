import React from "react";
import { MetamaskContext } from "../hooks/connectWallet";
export default function ConnectWallet() {
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
    <>
      <h1>Connect Wallet</h1>
      <button
        id="connect"
        disabled={walletConnected}
        onClick={() => {
          getAccount();
          getNetwork();
          getChainId();
        }}
      >
        {walletConnected ? "Wallet Connected" : "Connect wallet"}
      </button>
      <div>
        {networkConnected
          ? ""
          : "You need to connect to the binance test network"}
      </div>
      <div>active account: {account}</div>
      <div>active network: {network}</div>
      <div>active chain Id: {chainId}</div>
      <button onClick={changeTokenPrice}>change price of existing token</button>
    </>
  );
}
