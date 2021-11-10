import React, { useEffect } from "react";
import Image from "next/image";
import CreatorIconHandle from "../ListCreator/CreatorIconHandle";
import BidButton from "./BidButton";
import Countdown from "./Countdown";
import { GetServerSideProps } from "next";
import styles from "./Hero.module.scss";
import ConvertedPrice, { Coin } from "./ConvertedPrice";
import { ListArtworkProps } from "../../../lib/interfaces/ArtworkInterfaces";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/binancecoin
    `);
  const data = await res.json();
  return {
    props: {
      coin: data,
    },
  };
};

const Hero = (props: ListArtworkProps, coin: Coin) => {
  let artwork = props.artwork;
  // let cover = artwork.image || "/";
  let coverImage = "/images/artwork.png"; //Should be from database but that breaks it

  let date = new Date("30 10 2021 13:00:00");
  let creatorImage = "/dist/images/mock/users/26.png";
  let playButton = "/dist/play-button.svg";

  return (
    <div className={styles["hero"]}>
      <div className={styles["hero__container"] + " container"}>
        <div className={styles["hero__hashtune-artwork"]}>
          <div className={styles["hero__hashtune-artwork--image"]}>
            <Image
              alt="cover image"
              src={coverImage}
              width={600}
              height={600}
            />
          </div>
          <div className={styles["hero__hashtune-artwork--play-button"]}>
            <Image alt="cover image" src={playButton} width={60} height={60} />
          </div>
        </div>
        <div className={styles["hero__hashtune-details"]}>
          <CreatorIconHandle
            image={creatorImage}
            handle={artwork.creator.handle}
          />
          <h1 className={styles["hero__hashtune-details--title"]}>
            {artwork.title}
          </h1>
          <div className={styles["hero__hashtune-details--description"]}>
            <p>{artwork.description}</p>
          </div>
          <div
            className={styles["hero__hashtune-auction-details"] + " mb-medium"}
          >
            {/* Have to make sure this is flexible and can also take Buy For Make an offer etc. For now hardcoded since there */}
            <ConvertedPrice
              currentHighInBnb={1}
              coin={coin}
              style={styles["price_card"]}
            />
            <div className={styles["vertical_divider"] + " vertical_divider"} />
            {/* UNCOMMENT BELOW ONCE LIVEAT IS THERE */}
            {/* {artwork.auctions[lastAuctionIndex].liveAt} */}
            <Countdown liveAt={date} />
          </div>
          <BidButton />
        </div>
      </div>
    </div>
  );
};
export default Hero;
