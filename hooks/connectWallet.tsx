import MetaMaskOnboarding from "@metamask/onboarding";
import { ethers } from "ethers";
import React from "react";
import { useEffect } from "react";
import { HastuneMarketPlaceABI } from "../utils/ABI/HashtuneMarketplaceABI";
export type MetamaskContext = {
  account: string;
  network: string;
  chainId: string;
  walletConnected: boolean;
  networkConnected: boolean;
  fetchingAccount: boolean;
  fetchingNetwork: boolean;
  fetchingChain: boolean;
  setNetwork: (data: string) => void;
  setChainId: (id: string) => void;
  setAccount: (data: string) => void;
  getAccount: () => void;
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
  account: "",
  network: "",
  chainId: "",
  walletConnected: false,
  networkConnected: false,
  fetchingAccount: false,
  fetchingNetwork: false,
  fetchingChain: false,
  setAccount: () => {},
  setNetwork: () => {},
  setChainId: () => {},
  setWalletConnected: () => {},
  setNetworkConnected: () => {},
  getAccount: () => {},
  getNetwork: () => {},
  getChainId: () => {},
  getContract: () => ({} as { ethersProvider: any; contract: any }),
  setProvider: () => {},
  setContract: () => {},
  changeTokenPrice: () => {},
});

export const MetamaskContextProvider = ({ children }: any) => {
  const { isMetaMaskInstalled } = MetaMaskOnboarding;

  const [account, setAccount] = React.useState("");
  const [network, setNetwork] = React.useState("");
  const [chainId, setChainId] = React.useState("");
  const [fetchingAccount, setFetchingAccount] = React.useState(false);
  const [fetchingNetwork, setFetchingNetwork] = React.useState(false);
  const [fetchingChain, setFetchingChain] = React.useState(false);
  const [walletConnected, setWalletConnected] = React.useState<any | null>(
    false
  );
  const [networkConnected, setNetworkConnected] = React.useState<any | null>(
    false
  );
  const getAccount = async () => {
    try {
      setFetchingAccount(true);
      const newAccounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      if (Array.isArray(newAccounts)) {
        setAccount(newAccounts[0]);
      } else {
        setAccount(newAccounts);
      }
    } catch (err) {
      console.error("Error on init when getting accounts", err);
    } finally {
      setFetchingAccount(false);
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
      getAccount();
      getChainId();
      getNetwork();
      (window as any).ethereum.on(
        "accountsChanged",
        (newAccounts: string[] | string) => {
          if (Array.isArray(newAccounts)) {
            setAccount(newAccounts[0]);
          } else {
            setAccount(newAccounts);
          }
        }
      );
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
    if (account && account.length > 0) {
      setWalletConnected(true);
    } else {
      setWalletConnected(false);
    }
  }, [account]);
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
      HastuneMarketPlaceABI,
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
        account,
        network,
        chainId,
        walletConnected,
        networkConnected,
        fetchingAccount,
        fetchingChain,
        fetchingNetwork,
        setAccount,
        setNetwork,
        setChainId,
        setWalletConnected,
        setNetworkConnected,
        getAccount,
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
