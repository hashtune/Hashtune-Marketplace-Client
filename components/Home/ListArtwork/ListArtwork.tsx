import Link from "next/link";
import React from "react";
import Image from "next/image"
import ArtworkTitleCreator from "./ArtworkTitleCreator";
import Price from "./Price";

export interface Artwork {
    id: string,
    title: string,
    saleType: string,
    image?: string,
    description: string,
    listed: boolean,
    reservePrice: number,
    price: number,
    auctions:  {
        bids : {
            id : string,
        }[],
        currentHigh: number,
    }[],
    // artworkType: string,
    // auctionWithNoReservePriceAndNoBids: boolean,
    // liveAt?: Date,
    latestAuction: {
        bids: {
            id: string;
        }[]
    },
    creator: {
       handle: string,
       name: string,
       image: string 
    },
}
export interface ArtworkProp {
    artwork: Artwork
}

const ListArtwork = (props: ArtworkProp) => {
    const artwork = props.artwork;
    const coverImage = artwork.image || "/";
    return (
        <div>
            <div>
                <div>
                    <Image src= {coverImage}/>
                </div>
                <div>
                    <ArtworkTitleCreator artwork = {artwork}/> 
                    <Price artwork= {artwork}/>
                </div>
            </div>
        </div>
    )
}
export default ListArtwork