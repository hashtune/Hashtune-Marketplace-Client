import { useEffect, useRef, useState } from "react";
import styles from "./ConnectWallet.module.scss";
import React from "react";

interface IconButtonProps {
  title: string;
  onClick: () => void;
  walletConnected: boolean;

  isAuthenticating: boolean;
  class: string;
  firstLoad: boolean;
}

export const IconButton = (props: IconButtonProps) => {
  const hrefStart = "dist/icons/sprite.svg#hashtune-";
  const btn: React.RefObject<HTMLAnchorElement> = useRef(null);

  const toggleAuthenticating = () => {
    btn.current?.classList.toggle(styles["buttons__btn--one--active"]);
  };

  const isMetamask = props.title == "Metamask";
  const icon = isMetamask ? "metamask" : "wallet-connect";

  const [styleClass, setStyleClass] = useState(props.class);

  useEffect(() => {
    //TODO still needs to start off Metamask at 100% size and toggle to 80% instead of other way around
    if (styleClass === styles["buttons__btn--one"]) {
      toggleAuthenticating();
    }
  }, [styleClass]);

  return (
    <a
      onClick={() => {
        props.onClick();
        {
          props.isAuthenticating
            ? setStyleClass(styles["buttons__btn--one"])
            : setStyleClass(props.class);
        }
      }}
      className={styleClass}
      ref={btn}
    >
      <svg width={30} height={30}>
        <use xlinkHref={hrefStart + icon}></use>
      </svg>
      <h2>{props.walletConnected ? "Wallet Connected" : props.title}</h2>
    </a>
  );
};

// USEFUL PRINT:
// console.log(
//       isMetamask
//         ? "MetamaskBtn classList" + btn.current?.classList
//         : "WalletConnect classList" + btn.current?.classList
//     );
