import { Signer } from "@ethersproject/abstract-signer";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";
import { useState } from "react";

export const useWeb3Wallet = () => {

    const [signer, setSigner] = useState<Signer>({} as Signer);
    const provider = new WalletConnectProvider({
        rpc: {
            97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
        }
    });

    const connectWallet = async () => {
        await provider.enable().then(async () => {
            const web3Provider = await new providers.Web3Provider(provider);
            setSigner(web3Provider.getSigner());
        });
    };

    const disconnectWallet = async () => {
        await provider.disconnect();
    };

    return {signer, connectWallet, disconnectWallet};
};