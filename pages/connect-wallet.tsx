import MetaMaskOnboarding from "@metamask/onboarding";
import { ethers } from "ethers";
import React from "react";
import { useEffect } from "react";
import * as abi from "../SongOrAlbumNFT.json";
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

export type MetamaskContext = {
  accounts: string[];
  network: string;
  chainId: string;
  walletConnected: boolean;
  networkConnected: boolean;
  fetchingAccounts: boolean;
  fetchingNetwork: boolean;
  fetchingChain: boolean;
  setNetwork: (data: string) => void;
  setChainId: (id: string) => void;
  setAccounts: (data: []) => void;
  getAccounts: () => void;
  getNetwork: () => void;
  getChainId: () => void;
  setWalletConnected: (data: boolean) => void;
  setNetworkConnected: (data: boolean) => void;
  getContract: () => { ethersProvider: any; contract: any };
  setProvider: (data: string) => void;
  setContract: (data: string) => void;
  changeTokenPrice: (e: any) => void;
};

export const MetamaskContext = React.createContext<MetamaskContext>({
  accounts: [],
  network: "",
  chainId: "",
  walletConnected: false,
  networkConnected: false,
  fetchingAccounts: false,
  fetchingNetwork: false,
  fetchingChain: false,
  setAccounts: () => {},
  setNetwork: () => {},
  setChainId: () => {},
  setWalletConnected: () => {},
  setNetworkConnected: () => {},
  getAccounts: () => {},
  getNetwork: () => {},
  getChainId: () => {},
  getContract: () => ({} as { ethersProvider: any; contract: any }),
  setProvider: () => {},
  setContract: () => {},
  changeTokenPrice: () => {},
});

export const MetamaskContextProvider = ({ children }: any) => {
  const { isMetaMaskInstalled } = MetaMaskOnboarding;

  const [accounts, setAccounts] = React.useState([]);
  const [network, setNetwork] = React.useState("");
  const [chainId, setChainId] = React.useState("");
  const [fetchingAccounts, setFetchingAccounts] = React.useState(false);
  const [fetchingNetwork, setFetchingNetwork] = React.useState(false);
  const [fetchingChain, setFetchingChain] = React.useState(false);
  const [walletConnected, setWalletConnected] = React.useState<any | null>(
    false
  );
  const [networkConnected, setNetworkConnected] = React.useState<any | null>(
    false
  );
  const getAccounts = async () => {
    try {
      setFetchingAccounts(true);
      const newAccounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(newAccounts);
    } catch (err) {
      console.error("Error on init when getting accounts", err);
    } finally {
      setFetchingAccounts(false);
    }
  };
  const getNetwork = async () => {
    try {
      setFetchingNetwork(true);
      const newNetwork = await (window as any).ethereum.request({
        method: "net_version",
      });
      setNetwork(newNetwork);
    } catch (err) {
      console.error("Error on init when getting network ID", err);
    } finally {
      setFetchingNetwork(false);
    }
  };
  const getChainId = async () => {
    try {
      setFetchingChain(true);
      const newChainId = await (window as any).ethereum.request({
        method: "eth_chainId",
      });
      setChainId(newChainId);
    } catch (err) {
      console.error("Error on init when getting chain ID", err);
    } finally {
      setFetchingChain(false);
    }
  };
  useEffect(() => {
    if (isMetaMaskInstalled()) {
      getAccounts();
      getChainId();
      getNetwork();
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
      const { ethersProvider, contract } = getContract();
      console.log(ethersProvider, contract);
      setProvider(ethersProvider);
      setContract(contract);
    }
  }, []);

  return (
    <MetamaskContext.Provider
      value={{
        accounts,
        network,
        chainId,
        walletConnected,
        networkConnected,
        fetchingAccounts,
        fetchingChain,
        fetchingNetwork,
        setAccounts,
        setNetwork,
        setChainId,
        setWalletConnected,
        setNetworkConnected,
        getAccounts,
        getChainId,
        getNetwork,
        getContract,
        setProvider,
        setContract,
        changeTokenPrice,
      }}
    >
      {children}
    </MetamaskContext.Provider>
  );
};
