import { Signer } from "ethers";
import React from "react";
import { useWeb3Wallet } from '../../hooks/useWeb3Wallet';

export type ContextProps = {
    signer: Signer | null;
    connectMobileWallet: () => void;
    disconnectMobileWallet: () => void;
    connectExtensionWallet: () => void;
};

export const WalletContext = React.createContext<ContextProps>({
    signer: {} as Signer,
    connectMobileWallet: () => {},
    disconnectMobileWallet: () => {},
    connectExtensionWallet: () => {}
});

export const WalletContextProvider = ({children} : any) => {
    const {signer, connectMobileWallet, disconnectMobileWallet, connectExtensionWallet} = useWeb3Wallet();
    return (
        <WalletContext.Provider value= {{
            signer,
            connectMobileWallet,
            disconnectMobileWallet,
            connectExtensionWallet
        }}>{children}</WalletContext.Provider>
    );
};
