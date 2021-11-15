import React, { useEffect, useState } from "react";
import { LinkIcon } from "./LinkIcon";
import {PAGES} from "../../../utils/constants/enum"

interface LinkIconsProps {
  iconRefs: {
    icon: string;
    href: string;
  }[];
  directorydifference: number;
  page: string;
  hover?: boolean; 
}

export const LinkIcons = (props: LinkIconsProps) => {
    const [preText, setPreText] = useState("");
    const [style, setStyle] = useState("socials");
    

    useEffect(() => {
        if (props.page === PAGES.PROFILE){
          setStyle("socials-profile");
        } else if (props.page === PAGES.ARTWORK){
            if (props.hover === true){
            setStyle("tooltips-artwork");
            console.log("getting here");
            } else {
            setStyle("socials-artwork");
            setPreText( "../");
          }
        }
      }
    );
    let icons = props.iconRefs;

  return (
    <div className={style}>
      {icons.length > 0 &&
        [icons?.map((icon) => (
          <LinkIcon hover= {props.hover} icon={icon.icon} href={icon.href} pre = {preText} />
        ))]}
    </div>
  );
};
