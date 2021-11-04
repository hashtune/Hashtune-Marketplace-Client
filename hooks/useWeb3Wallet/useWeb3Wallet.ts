import { Signer } from "@ethersproject/abstract-signer";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";
import { useEffect, useMemo, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

export const useWeb3Wallet = () => {
    const [signer, setSigner] = useState<Signer | null>(null);
    const mobileWalletprovider = useMemo(() => (
        new WalletConnectProvider({
            rpc: {
                97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
            }
        })
    ),[]);

    const initWeb3Provider = (provider: any) => {
        const web3Provider = new providers.Web3Provider(provider);
        setSigner(web3Provider.getSigner());
    };

    const connectMobileWallet = async () => {
        await mobileWalletprovider.enable().then(async () => {
            await initWeb3Provider(mobileWalletprovider);
        });
    };

    const disconnectMobileWallet = async () => {
        if(mobileWalletprovider.connected) {
            await mobileWalletprovider.disconnect();
        }
    };

    const checkPreviousWcConnection = () => {
        const walletConnect: any = window.localStorage.getItem("walletconnect");
        if(walletConnect) {
            const parseToJSON = JSON.parse(walletConnect);
            return parseToJSON.connected;
        }
        return false;
    }

    const checkPreviousEwConnection = async () => {
        const injectedProvider:any = await detectEthereumProvider();
        if(injectedProvider) {
            await initWeb3Provider(injectedProvider);
            await signer?.getAddress().catch(() => {
                setSigner(null);
            });
        }
    }

    const connectExtensionWallet = async () => {
        const injectedProvider:any = await detectEthereumProvider();
        if(injectedProvider) {
            await (window as any).ethereum.request({method: 'eth_requestAccounts',}).then(async () => {
                await initWeb3Provider(injectedProvider);
            }).catch((err: any) => {
                console.error(err);
            });
        }
    }

    useEffect(() => {
        if(checkPreviousWcConnection()) {
            connectMobileWallet();
        }
        else {
            checkPreviousEwConnection();
        }
    }, []);

    return {signer, connectMobileWallet, connectExtensionWallet, disconnectMobileWallet};
};