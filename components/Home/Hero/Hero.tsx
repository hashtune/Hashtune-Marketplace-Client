import React from "react";
import Image from 'next/image'
import CreatorIconHandle from "../ListCreator/CreatorIconHandle";
import BidButton from "./BidButton";
import Countdown from "./Countdown";
import {ArtworkProp } from "../ListArtwork/ListArtwork";
import { GetServerSideProps } from "next";
import ConvertedPrice, { Coin } from "./ConvertedPrice";


export const getServerSideProps: GetServerSideProps = async () =>{
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/binancecoin
    `);
    const data = await res.json();
    return {
        props: {
            coin: data
        }
    };
}

const Hero = (props: ArtworkProp, coin: Coin) => {
    let artwork = props.artwork;
    let cover = artwork.image || "/";
    return (
        <div>
            <div className= "song-border">
                <div className= "play-button">
                    {/* STILL NEED TO IMPORT CORRECT PLAY BUTTON */}
                    <Image src= "/images/ion_play-circle.png" width={58.5} height={58.5}/>
                </div>
                <Image src= {cover} width = {424} height= {424}/>
                <div className= "song-info">
                    <section className= "song-header">
                        <div className= "title-handle">
                            <CreatorIconHandle image={artwork.creator.image} handle={artwork.creator.handle}/>
                            <h1>{artwork.title}</h1>
                            <Image src= '/'/> {/* Add small dot in between- export from zeplin*/}
                            <h1>{artwork.artworkType}</h1>
                        </div>
                        <div>
                            <p>{artwork.description}</p>
                        </div>
                    </section>
                    <section className= "auction-info">
                        <div>
                            <ConvertedPrice currentHighInBnb={0} coin={coin}/>
                            <Countdown liveAt= {artwork.liveAt} /> 
                        </div>
                    </section>
                    <BidButton/>
                </div>
            </div>
        </div>
    )
}
export default Hero