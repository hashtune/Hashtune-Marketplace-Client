import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./ConnectWallet.module.scss";

interface IconButtonProps {
  icon: string;
  title: string;
  onClick: () => void;
  walletConnected: boolean;
  class: string;
}
export const IconButton = (props: IconButtonProps) => {
  const hrefStart = "dist/icons/sprite.svg#hashtune-";
  const metamaskBtn: React.RefObject<HTMLAnchorElement> = useRef(null);

  const [isAuthenticatingMetaMask, setAuthenticatingMetaMask] = useState(false);
  useEffect(() => {
    metamaskBtn.current?.classList.toggle(styles["buttons__btn--one--active"]);
  }, [isAuthenticatingMetaMask]);

  return (
    <a
      onClick={() => {
        setAuthenticatingMetaMask(true);
        props.onClick;
      }}
      className={styles[props.class]}
      ref={metamaskBtn}
    >
      <svg width={30} height={30}>
        <use xlinkHref={hrefStart + props.icon}></use>
      </svg>
      <h2>{props.walletConnected ? "Wallet Connected" : props.title}</h2>
    </a>
  );
};
