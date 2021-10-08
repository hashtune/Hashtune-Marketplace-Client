import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./BurgerMenu.module.scss";

interface IconLinkProps {
  icon: string;
  href: string;
}
export const LinkIcon = (props: IconLinkProps) => {
  const hrefStart = "dist/icons/sprite.svg#hashtune-";
  if (props.icon !== "instagram") {
    return (
      <Link href={props.href}>
        <div className={styles["nav__socials--linkIcon"]}>
          <svg width={32.5} height={32.5}>
            <use xlinkHref={hrefStart + props.icon}></use>
          </svg>
        </div>
      </Link>
    );
  }
  return (
    <Link href={props.href}>
      <div className={styles["nav__socials--linkIcon"]}>
        <svg width={32.5} height={32.5}>
          <use xlinkHref={hrefStart + props.icon}></use>
          <radialGradient id="insta-gradient" r="150%" cx="30%" cy="107%">
            <stop stop-color="#fdf497" offset="0" />
            <stop stop-color="#fdf497" offset="0.05" />
            <stop stop-color="#fd5949" offset="0.45" />
            <stop stop-color="#d6249f" offset="0.6" />
            <stop stop-color="#285AEB" offset="0.9" />
          </radialGradient>
        </svg>
      </div>
    </Link>
  );
};
