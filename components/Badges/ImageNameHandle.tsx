import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../Hero/Hero.module.scss";
import { PAGES } from "../../utils/constants/enum";

interface CreatorImageHandleProps {
  profilePicture: string;
  handle: string;
  isApprovedCreator: boolean;
  fullName: string;
  page: string;
}

const ImageNameHandle = (props: CreatorImageHandleProps) => {
  const [style, setStyle] = useState("image-name-handle");
  const [preText, setPreText] = useState("");
  useEffect(() => {
    if (props.page === PAGES.ARTWORK) {
      setStyle("artwork-image-name-handle");
      setPreText("../");
    }
  });
  return (
    <div className={style}>
      <div className={style + "__picture"}>
        <Image src={props.profilePicture} width="180" height="180" alt="" />
      </div>
      <div className={style + "__content"}>
        <div className={style + "__content--name-status"}>
          <a>{props.fullName}</a>
          {props.isApprovedCreator ? (
            <div className={style + "__content-status"}>
              <svg>
                <use
                  xlinkHref={preText + "dist/icons/sprite.svg#hashtune-check"}
                />
              </svg>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={style + "__content--username"}>@{props.handle}</div>
      </div>
      {props.page === PAGES.PROFILE ? (
        <a
          href={`/${props.handle}/edit-profile`}
          className={style + "--edit-button" + " btn"}
        >
          Edit Profile
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ImageNameHandle;
