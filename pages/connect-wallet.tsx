import MetaMaskOnboarding from "@metamask/onboarding";
import { ethers } from "ethers";
import React from "react";
import { useEffect } from "react";
import * as abi from "../SongOrAlbumNFT.json";
export default function ConnectWallet() {
  const { isMetaMaskInstalled } = MetaMaskOnboarding;
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
  } = React.useContext(MetamaskContext);
  const [provider, setProvider] = React.useState<any | null>(null);
  const [contract, setContract] = React.useState<any | null>(null);

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
    }
  }, []);

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

export type MetamaskContext = {
  accounts: string[];
  setAccounts: (data: []) => void;
  getAccounts: () => void;
  getNetwork: () => void;
  getChainId: () => void;
  network: string;
  setNetwork: (data: string) => void;
  chainId: string;
  setChainId: (id: string) => void;
  walletConnected: boolean;
  networkConnected: boolean;
  setWalletConnected: (data: boolean) => void;
  setNetworkConnected: (data: boolean) => void;
};

export const MetamaskContext = React.createContext<MetamaskContext>({
  accounts: [],
  setAccounts: (data: []) => {},
  network: "",
  setNetwork: (data: string) => {},
  chainId: "",
  setChainId: (id: string) => {},
  walletConnected: false,
  networkConnected: false,
  setWalletConnected: (data: boolean) => {},
  setNetworkConnected: (data: boolean) => {},
  getAccounts: () => {},
  getNetwork: () => {},
  getChainId: () => {},
});

export const MetamaskContextProvider = ({ children }: any) => {
  const { isMetaMaskInstalled } = MetaMaskOnboarding;

  const [accounts, setAccounts] = React.useState([]);
  const [network, setNetwork] = React.useState("");
  const [chainId, setChainId] = React.useState("");
  const [walletConnected, setWalletConnected] = React.useState<any | null>(
    false
  );
  const [networkConnected, setNetworkConnected] = React.useState<any | null>(
    false
  );
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
  const getNetwork = async () => {
    try {
      const newNetwork = await (window as any).ethereum.request({
        method: "net_version",
      });
      setNetwork(newNetwork);
    } catch (err) {
      console.error("Error on init when getting network ID", err);
    }
  };
  const getChainId = async () => {
    try {
      const newChainId = await (window as any).ethereum.request({
        method: "eth_chainId",
      });
      setChainId(newChainId);
    } catch (err) {
      console.error("Error on init when getting chain ID", err);
    }
  };
  useEffect(() => {
    if (isMetaMaskInstalled()) {
      (window as any).ethereum.on("accountsChanged", (newAccounts: []) => {
        setAccounts(newAccounts);
      });
      (window as any).ethereum.on("networkChanged", (newNetwork: string) => {
        setNetwork(newNetwork);
      });
      (window as any).ethereum.on("chainChanged", (newChainId: string) => {
        setChainId(newChainId);
      });
    }
  }, []);
  useEffect(() => {
    if (network === "97" && chainId === "0x61") {
      setNetworkConnected(true);
    } else {
      setNetworkConnected(false);
    }
  }, [network, chainId]);
  useEffect(() => {
    if (accounts.length > 0) {
      setWalletConnected(true);
    } else {
      setWalletConnected(false);
    }
  }, [accounts]);
  return (
    <MetamaskContext.Provider
      value={{
        accounts,
        setAccounts,
        network,
        setNetwork,
        chainId,
        setChainId,
        walletConnected,
        setWalletConnected,
        networkConnected,
        setNetworkConnected,
        getAccounts,
        getChainId,
        getNetwork,
      }}
    >
      {children}
    </MetamaskContext.Provider>
  );
};
