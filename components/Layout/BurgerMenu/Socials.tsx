import React, { useEffect, useState } from "react";
import { LinkIcon } from "./LinkIcon";
import {PAGES} from "../../../utils/constants/enum"

interface SocialsProps {
  iconRefs: {
    icon: string;
    href: string;
  }[];
  directorydifference: number;
  page: string;
}

export const Socials = (props: SocialsProps) => {
    const [preText, setPreText] = useState("");
    const [style, setStyle] = useState("socials")
    useEffect(() => {
        if (props.page === PAGES.PROFILE){
            setStyle("socials-profile");
        }
        else if (props.page === PAGES.ARTWORK){
            setStyle("socials-artwork");
            setPreText( "../");
        }
    })
    let icons = props.iconRefs;

  return (
    <div className={style}>
        {icons.length > 0 &&
          [icons?.map((icon) => (
            <LinkIcon icon={icon.icon} href={icon.href} pre = {preText} />
          ))]}
    </div>
  );
};
