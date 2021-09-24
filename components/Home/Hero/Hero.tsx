import React from "react";
import Image from 'next/image'
import CreatorIconHandle from "../ListCreator/CreatorIconHandle";
import BidButton from "./BidButton";
import Countdown from "./Countdown";
import { ListArtworkProps } from "../ListArtwork/ListArtwork";

// TODO: REMOVE HARDCODED BACKGROUND IMAGE
const Hero = (props: ListArtworkProps) => {
    let artwork = props.artwork;
    let cover = artwork.image || "/";
    return (
        <div>
            <Image src= {'/images/backgroundHome.jpg'} width = {1176} height= {640}/>
            <div className= "song-border">
                <Image src= {cover} width = {424} height= {424}/>
                <div className= "song-info">
                    <section className= "song-header">
                        <div className= "title-handle">
                            <CreatorIconHandle image={artwork.creators[0].image} handle={artwork.creators[0].handle}/>
                            <h1>{artwork.name}</h1>
                        </div>
                        <div className= "play-button">
                            <div>
                                <Image src= "/images/ion_play-circle.png" width={58.5} height={58.5}/>
                            </div>
                        </div>
                    </section>
                    <section className= "auction-info">
                        <div>
                            <section>
                                <h3>Current bid</h3>
                                <h3>{artwork.currentBid}</h3>
                            </section>
                            <Countdown liveAt= {artwork.liveAt} /> 
                        </div>
                        <BidButton/>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Hero