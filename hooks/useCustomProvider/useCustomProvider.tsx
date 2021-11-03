import { Signer } from "ethers";
import React from "react";
import { useWeb3Wallet } from '../useWeb3Wallet';

export type ContextProps = {
    signer: Signer;
    connectWallet: () => void;
    disconnectWallet: () => void;
};

export const CustomContext = React.createContext<ContextProps>({
    signer: {} as Signer,
    connectWallet: () => {},
    disconnectWallet: () => {}
});

export const CustomContextProvider = ({children} : any) => {
    const {signer, connectWallet, disconnectWallet} = useWeb3Wallet();
    return (
        <CustomContext.Provider value= {{
            signer,
            connectWallet,
            disconnectWallet
        }}>{children}</CustomContext.Provider>
    );
};
