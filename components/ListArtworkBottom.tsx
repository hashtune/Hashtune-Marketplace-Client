import Link from "next/link";
import React from "react";
import Image from "next/image"

interface ListArtworkBottomProps {
  purchasable?: boolean,
  auction?: boolean,
  price?: number,
  inStock?: number,
  currentBid?: number,
  endingIn?: string,
}


const ListArtworkBottom = (props: ListArtworkBottomProps) => {
    if (props.purchasable){
        return (
            <div>
                <div>
                    <h3>Buy for</h3>
                    <h3>{props.price}</h3>
                </div>
                <div>
                    <h3>In Stock</h3>
                    <h3>{props.inStock}</h3>
                </div>
            </div>
        )
    }
    else if (props.auction) {
        return (
        <div>
            <div>
                <h3>Current Bid</h3>
                <h3>{props.currentBid}</h3>
            </div>
            <div>
                <h3>Ending in</h3>
                <h3>{props.endingIn}</h3>
            </div>
        </div>
    )
    }
    return (
            <div>
                <div>
                    <h3>Reserve Price</h3>
                    <h3>{props.price}</h3>
                </div>
            </div>
    )
}
export default ListArtworkBottom