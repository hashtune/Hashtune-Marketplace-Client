import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../../pages/[user]/[artwork]/SingleArtwork.module.scss";
import Price from "../Home/ListArtwork/Price";
import { Artwork } from "../../graphql/generated/apolloComponents";

interface HistoryItemProps {
  imgSrc: string;
  listed: boolean;
  date: string;
  actor: string;
  artwork: Artwork;
}

const ArtworkHistoryItem = (props: HistoryItemProps) => {
  return (
    <div className={styles["nft__history--item"]}>
      <div className={styles["nft__history--item-main"]}>
        <div>
          <Image
            alt="list cover image"
            src={props.imgSrc}
            width={50}
            height={50}
          />
        </div>
        <div className={styles["nft__history--info"]}>
          <div className={styles["nft__history--action"]}>
            {props.listed ? "Listed" : "Minted"} by @{props.actor}
          </div>
          <div className={styles["nft__history--date"]}>{props.date}</div>
        </div>
      </div>
      {props.listed ? (
        <div className={styles["nft__history--price"]}>
          <div className={styles["nft__history--price-bnb"]}>100 BNB</div>
          <div className={styles["nft__history--price-dollar"]}>$1220</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ArtworkHistoryItem;
