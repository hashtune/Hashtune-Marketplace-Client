import MetaMaskOnboarding from "@metamask/onboarding";
import { ethers } from "ethers";
import React from "react";
import { useEffect } from "react";
import * as abi from "../SongOrAlbumNFT.json";
export default function ConnectWallet() {
  const { isMetaMaskInstalled } = MetaMaskOnboarding;
  // If metamask is installed then window.ethereum is available.
  // Also need to listen for account changes.
  const [accounts, setAccounts] = React.useState([]);
  const [provider, setProvider] = React.useState<any | null>(null);
  const [contract, setContract] = React.useState<any | null>(null);
  const [connected, setConnected] = React.useState<any | null>(false);
  const getAccounts = async () => {
    try {
      const newAccounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(newAccounts);
    } catch (err) {
      console.error("Error on init when getting accounts", err);
    }
  };
  const getContract = () => {
    const ethersProvider = new ethers.providers.Web3Provider(
      (window as any).ethereum,
      "any"
    );
    // Temporary Binance testnet contract
    const contract = new ethers.Contract(
      "0xbdd597aa6ddeabbdba6acd9f864438737e11c8af",
      abi.abi,
      ethersProvider.getSigner()
    );
    return { ethersProvider, contract };
  };

  const changeTokenPrice = async () => {
    try {
      const result = await contract.setCurrentPrice(
        ethers.utils.parseEther("0.005"),
        1,
        {
          gasLimit: 100000,
        }
      );
      console.log({ result });
    } catch (e) {
      console.log({ e });
    }
  };

  useEffect(() => {
    if (isMetaMaskInstalled()) {
      // Call this on the ever page to
      // get the active account as soon as the page loads
      // getAccounts();
      const { ethersProvider, contract } = getContract();
      console.log(ethersProvider, contract);
      setProvider(ethersProvider);
      setContract(contract);

      (window as any).ethereum.on("accountsChanged", (newAccounts: []) => {
        setAccounts(newAccounts);
      });
    }
  }, []);
  useEffect(() => {
    if (accounts.length > 0) setConnected(true);
    else {
      setConnected(false);
    }
  }, [accounts]);
  return (
    <>
      <h1>Connect Wallet</h1>
      <button id="connect" disabled={connected} onClick={getAccounts}>
        {connected ? "Connected" : "Connect"}
      </button>
      <div>active account: {accounts[0]}</div>
      <button onClick={changeTokenPrice}>change price of existing token</button>
    </>
  );
}
