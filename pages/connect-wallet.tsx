import MetaMaskOnboarding from "@metamask/onboarding";
import { ethers } from "ethers";
import React from "react";
import { useEffect } from "react";
import * as abi from "../SongOrAlbumNFT.json";
import { MetamaskContext } from "../hooks/connectWallet";
export default function ConnectWallet() {
  // If metamask is installed then window.ethereum is available.
  // Also need to listen for account changes.
  const {
    accounts,
    network,
    chainId,
    walletConnected,
    networkConnected,
    getAccounts,
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
          getAccounts();
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
      <div>active account: {accounts[0]}</div>
      <div>active network: {network}</div>
      <div>active chain Id: {chainId}</div>
      <button onClick={changeTokenPrice}>change price of existing token</button>
    </>
  );
}
