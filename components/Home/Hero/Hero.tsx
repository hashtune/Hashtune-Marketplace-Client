import React from "react";
import Image from "next/image";
import CreatorIconHandle from "../ListCreator/CreatorIconHandle";
import BidButton from "./BidButton";
import Countdown from "./Countdown";
import { GetServerSideProps } from "next";
import styles from "./Hero.module.scss";
import ConvertedPrice, { Coin } from "./ConvertedPrice";
import { ArtworkFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";
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

const Hero = (props: ArtworkFieldsProp, coin: Coin) => {
    let artwork = props.artwork;
    // let cover = artwork.image || "/";
    let coverImage = '/images/artwork.png' //Should be from database but that breaks it

    let datee = new Date("30 09 2021 13:00:00")
    let creatorImage = '/images/creator.png' 
    return (
        <div data-cy="cont-hero">
            <div className = {styles.hero} data-cy= "hero">
                <div data-cy= "play-button">
                    {/* STILL NEED TO IMPORT CORRECT PLAY BUTTON */}
                    {/* <Image src= "/images/ion_play-circle.png" width={58.5} height={58.5}/> ADD HASHTUNE PLAY BUTTON*/}
                </div>
                <Image className= {styles.image} alt = "cover image"src= {coverImage} width = {424} height= {424}/>
                <div className= {styles.songInfo} data-cy= "song-info">
                    <section data-cy= "song-header">
                        <div data-cy= "title-handle">
                            <CreatorIconHandle image={creatorImage} handle={artwork.creator.handle}/>
                            <h1>{artwork.title}</h1>
                        </div>
                        <div data-cy= "song-description">
                            <p>{artwork.description}</p>
                        </div>
                    </section>
                    <section data-cy= "auction-info">
                        <div data-cy= "hero-price-cd">
                            {/* Have to make sure this is flexible and can also take Buy For Make an offer etc. For now hardcoded since there */}
                            <ConvertedPrice currentHighInBnb={1} coin={coin}/>
                            {/* UNCOMMENT BELOW ONCE LIVEAT IS THERE */}
                            {/* {artwork.auctions[lastAuctionIndex].liveAt} */}
                            <Countdown liveAt={datee}  />
                        </div>
                    </section>
                    <BidButton/>
                </div>
            </div>
        </div>
  );
};
export default Hero;
