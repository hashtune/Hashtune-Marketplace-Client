import Link from "next/link";
import React from "react";
import Image from "next/image"
import ArtworkTitleCreator from "./ArtworkTitleCreator";
import Price from "./Price";

export interface Artwork {
    id: string,
    title: string
    handle: string,
    image?: string,
    artworkType: string,
    saleType: string,
    currentBid?: number,
    fixedPrice: number,
    reservePrice: number,
    liveAt?: Date,
    creators: {
       handle: string,
       name: string,
       image: string 
    }[],
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
                
                {/* Listed == false Show artwokrk creator
                If auctionWithNoReservePriceAndNoBids -> Make an offer
                If saleType == fixed Buy {price}
                if latestAuction.bids == [] --> Bid {artwork.reservePrice}
                else {
                    Bid {currentHigh} BNB
                }
                
                */}
            </div>
        </div>
    )
}
export default ListArtwork