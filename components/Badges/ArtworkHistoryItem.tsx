import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ArtworkHistoryItem.module.scss";
import Price from "../ListArtwork/Price";
import { Artwork } from "../../graphql/generated/apolloComponents";

interface HistoryItemProps {
  imgSrc: string;
  listed: boolean;
  date: string;
  actor: string;
  price?: string;
  artwork: Artwork;
}

const ArtworkHistoryItem = (props: HistoryItemProps) => {
  let price = props.price !== undefined ? props.price : "";
  return (
    <div className={"nft__history--item"}>
      <div className={"nft__history--main"}>
        <div>
          <Image
            alt="list cover image"
            src={props.imgSrc}
            width={50}
            height={50}
          />
        </div>
        <div className={"nft__history--info"}>
          <div className={"nft__history--action"}>
            {props.listed ? "Listed" : "Minted"} by @{props.actor}
          </div>
          <div className={"nft__history--date"}>{props.date}</div>
        </div>
      </div>
      {props.listed ? (
        <div className={"nft__history--price"}>
          <div className={"nft__history--bnb"}>{props.price}</div>
          <div className={"nft__history--dollar"}>$1220</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ArtworkHistoryItem;
