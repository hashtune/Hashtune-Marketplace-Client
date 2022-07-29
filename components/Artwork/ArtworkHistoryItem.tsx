import React from "react";
import Image from "next/image";
import styles from "../../pages/[user]/[artwork]/SingleArtwork.module.scss";
interface HistoryItemProps {
  imgSrc: string;
  date: string;
  actor: string;
  txHash: string;
  eventType: string; // TODO get this enum
  price?: string;
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
            {props.eventType} by @{props.actor}
          </div>
          {/* TODO: Convert to time ago */}
          <div className={styles["nft__history--date"]}>{props.date}</div>
        </div>
      </div>
      <div className={styles["nft__history--price"]}>
        {/* TODO: prop price conversions */}
        <div className={styles["nft__history--price-bnb"]}>{props.price}</div>
        <div className={styles["nft__history--price-dollar"]}>
          {props.txHash}
        </div>
      </div>
    </div>
  );
};
export default ArtworkHistoryItem;
