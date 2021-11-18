import MetaMaskOnboarding from "@metamask/onboarding";
import { ethers } from "ethers";
import React from "react";
import { useEffect } from "react";
import * as abi from "../SongOrAlbumNFT.json";

export type SaleType = "auction" | "fixed";
export type CreateNFTProps = {
  saleType: SaleType;
  price: string;
  creatorsList: string[];
  creatorsRoyalties: number[];
};

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
  approveArtist: () => void;
  createNFT: (props: CreateNFTProps) => Promise<string>;
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
  approveArtist: () => {},
  createNFT: () => ({} as Promise<string>),
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
      "0xAf266B3D45B11D8B3f28dc2427745c3970B0368C",
      abi.abi,
      ethersProvider.getSigner()
    );
    return { ethersProvider, contract };
  };
  const approveArtist = async () => {
    try {
      const result = await contract.approveArtist(
        "0x1Ab754099c55731A994AFB6356F1d129CcAD2375",
        {
          gasLimit: 100000,
        }
      );
      console.log({ result });
    } catch (e) {
      console.log({ e });
    }
  };

  const createNFT = async (props: CreateNFTProps) => {
    // Should they be able to specify the gas limit?
    const { saleType, price, creatorsList, creatorsRoyalties } = props;
    try {
      const result = await contract.create(
        creatorsList, // test user hashtune (contract deployer - already approved) and test user 4 from chain .env
        creatorsRoyalties,
        saleType === "auction" ? 2 : 1,
        "0x6c00000000000000000000000000000000000000000000000000000000000000",
        ethers.utils.parseEther(price),
        "0x6c00000000000000000000000000000000000000000000000000000000000000",
        "0x6c00000000000000000000000000000000000000000000000000000000000000",
        1,
        1,
        {
          gasLimit: 1000000,
        }
      );
      console.log({ result });
      return result.hash;
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
        approveArtist, // test function
        createNFT,
      }}
    >
      {children}
    </MetamaskContext.Provider>
  );
};
