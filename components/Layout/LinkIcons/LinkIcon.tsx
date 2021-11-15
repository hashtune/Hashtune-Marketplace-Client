import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./BurgerMenu.module.scss";
import { PAGES } from "../../../utils/constants/enum";

interface IconLinkProps {
  icon: string;
  href: string;
  // directorydifference: number;
  pre: string;
  hover?: boolean;
}
export const LinkIcon = (props: IconLinkProps) => {
  const hrefStart = "dist/icons/sprite.svg#hashtune-";
  return (
    <a href={props.href}>
      {props.hover ? (
        <div className={"tooltip"}>
          {props.icon}
          <span />
        </div>
      ) : (
        <></>
      )}
      <svg fill="#fff">
        <use xlinkHref={props.pre + hrefStart + props.icon} />
      </svg>
    </a>
  );
};
