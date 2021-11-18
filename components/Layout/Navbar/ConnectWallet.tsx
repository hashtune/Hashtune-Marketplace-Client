import router from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useFindUserByPublicKeyQuery } from "../../../graphql/generated/apolloComponents";
import { MetamaskContext, msgParams } from "../../../hooks/connectWallet";
import styles from "./ConnectWallet.module.scss";
import { IconButton } from "./IconButton";
import { useSignupMutation } from "../../../graphql/generated/apolloComponents";

export type ConnectWalletProps = {
  toggleModal: any;
  isActive: boolean;
};

const ConnectWallet = (props: ConnectWalletProps) => {
  // If metamask is installed then window.ethereum is available.
  // Also need to listen for account changes.
  const {
    account,
    walletConnected,
    networkConnected,
    getAccount,
    getNetwork,
    getChainId,
  } = React.useContext(MetamaskContext);
  useEffect(() => {
    showModal();
  }, [close]);
  const overlay: React.RefObject<HTMLDivElement> = useRef(null);
  const showModal = () => {
    overlay.current?.classList.toggle("site-overlay--visible");
  };
  const handleClick = () => {
    showModal();
    props.toggleModal(!props.isActive);
  };

  const [isAuthenticatingMM, setAuthenticatingMM] = useState(false);
  const [isAuthenticatingWC, setAuthenticatingWC] = useState(false);
  const iconButtonOne: React.ReactNode = (
    <IconButton
      title={"Metamask"}
      onClick={() => {
        getAccount();
        getNetwork();
        getChainId();
        setAuthenticatingMM(!isAuthenticatingMM);
      }}
      walletConnected={walletConnected}
      isAuthenticating={isAuthenticatingMM}
      class={styles["buttons__btn--two"]}
    />
  );
  const iconButtonTwo: React.ReactNode = (
    <IconButton
      title={"WalletConnect"}
      onClick={() => {
        getAccount();
        getNetwork();
        getChainId();
        setAuthenticatingWC(!isAuthenticatingWC);
      }}
      walletConnected={walletConnected}
      isAuthenticating={isAuthenticatingWC}
      class={styles["buttons__btn--two"]}
    />
  );
  const connectingText = (walletName: string) => {
    return (
      <a className={styles["inActiveText"]}>
        Confirm by signing in to authenticate with your {walletName} Wallet …
      </a>
    );
  };

  const wrongNetwork: React.RefObject<HTMLParagraphElement> = useRef(null);
  const footer: React.RefObject<HTMLDivElement> = useRef(null);

  const toggleWrongNetworkAndFooter = () => {
    wrongNetwork.current?.classList.toggle(
      styles["buttons__wrong-network--invisible"]
    );
    footer.current?.classList.toggle(styles["body__footer--invisible"]);
  };

  const toggleAuthenticatingMM = () => {
    if (isAuthenticatingMM) {
      setButtonOne(iconButtonOne);
      setButtonTwo(connectingText("Metamask"));
    } else {
      setButtonOne(iconButtonOne);
      setButtonTwo(iconButtonTwo);
    }
  };
  useEffect(() => {
    toggleAuthenticatingMM();
    toggleWrongNetworkAndFooter();
  }, [isAuthenticatingMM]);

  useEffect(() => {
    toggleAuthenticatingWC();
    toggleWrongNetworkAndFooter();
  }, [isAuthenticatingWC]);

  const toggleAuthenticatingWC = () => {
    if (isAuthenticatingWC) {
      setButtonOne(iconButtonTwo);
      setButtonTwo(connectingText("WalletConnect"));
    } else {
      setButtonOne(iconButtonOne);
      setButtonTwo(iconButtonTwo);

    }
  };

  // TODO figure out why this component mounts like 50 times and runs this query
  const { data, loading, error } = useFindUserByPublicKeyQuery({
    variables: {
       findUserPublicKey: account
    },
    // Never cache this because if I edit the cookie I want a new request to go out
   fetchPolicy: "network-only"
  });

  const { getSignature } = React.useContext(MetamaskContext)
  const [signupMutation] = useSignupMutation();

  async function handleInvalidJWT () {
    const sig: string = await getSignature();
    const signupResult = await signupMutation({variables: {
      signedMessage: sig,
      publicKey: account,
      typedData: msgParams,
    }})
    if (signupResult.data?.cookie) {
      console.log("new cookie added!")
    } else {
      console.log(signupResult.errors)
    }
  }

  useEffect(() => {
    if (account) {
      // make query and decide to redirect to signup page or not based on public key
      console.log({data})
      if (data?.findUser.Users && data?.findUser.Users?.length > 0) {
        // user was found so don't do anything
        console.log("USER ALREADY EXISTS")
      } else if (data && data?.findUser.ClientErrorUserNotFound) {
        console.log("USER NON EXISTING")
        router.replace("/signup")
      } else if (data && data?.findUser.ClientErrorJWTInvalid) {
        // user exists but JWT expired, ask to sign again
        handleInvalidJWT()
      }
    }
  }, [data?.findUser.Users])

  const [buttonOne, setButtonOne] = useState(iconButtonOne);
  const [buttonTwo, setButtonTwo] = useState(iconButtonTwo);

  return (
    <div>
      <div className={styles["connect-card"]}>
        <div className={styles["header"]}>
          <div
            className={styles["header__close"]}
            onClick={() => handleClick()}
          >
            <div className={styles["header__close--up"]}></div>
            <div className={styles["header__close--down"]}></div>
          </div>
          <a className={styles["header__title"]}>Connect Wallet</a>
        </div>
        <p className={styles["policy"]}>
          By connecting your wallet, you agree to our <b>Terms of Service</b>{" "}
          and <b>Privacy Policy</b>
        </p>
        <div className={styles["body"]}>
          <div className={styles["body__buttons"]}>
            {account ? (
              <>{account}</>
            ) : (
              <div className={styles["buttons"]}>
                {buttonOne}
                {buttonTwo}
              </div>
            )}
            <p ref={wrongNetwork} className={styles["buttons__wrong-network"]}>
              {networkConnected
                ? ""
                : "You need to connect to the binance test network"}
            </p>
          </div>
          {/* <div>active account: {account}</div>
          <div>active network: {network}</div>
          <div>active chain Id: {chainId}</div> */}
          <div ref={footer} className={styles["body__footer"]}>
            <p>
              <b>Don&apos;t have a wallet?</b>
            </p>
            <p>Check our complete guide on wallets.</p>
          </div>
        </div>
      </div>
      <div ref={overlay} className={"site-overlay"}></div>
    </div>
  );
};

export default ConnectWallet;
