import React from "react";
import Image from 'next/image'
import CreatorIconHandle from "../ListCreator/CreatorIconHandle";
import BidButton from "./BidButton";

interface HeroProps {
    title: string,
    background: string,
    coverImage: string,
    price: number, 
    creatorImage: string,
    creatorHandle: string,
    hours: number,
    minutes: number,
    seconds: number,
}

const Hero = (props: HeroProps) => {
    return (
        <div>
            <Image src= {props.background} width = {1176} height= {640}/>
            <div className= "song-border">
                <Image src= {props.coverImage} width = {424} height= {424}/>
                <div className= "song-info">
                    <section className= "song-header">
                        <div className= "title-handle">
                            <CreatorIconHandle image={props.creatorImage} handle={props.creatorHandle}/>
                            <h1>{props.title}</h1>
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
                                <h3>{props.price}</h3>
                            </section>
                            <section>
                                <h3>Auction ending in</h3>
                                <h2 className= "hours">{props.hours}</h2>
                                <h2 className= "minutes">{props.minutes}</h2>
                                <h2 className= "seconds">{props.seconds}</h2>
                                <h3>hours</h3>
                                <h3>minutes</h3>
                                <h3>seconds</h3>
                            </section>  
                        </div>
                        <BidButton/>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Hero