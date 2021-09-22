import Link from "next/link";
import React from "react";
import Image from "next/image"
import BottomInfo from "./BottomInfo";




interface ListArtworkBottomProps {
  purchasable?: boolean,
  auction?: boolean,
  price?: number,
  inStock?: number,
  currentBid?: number,
  endingIn?: string,
}


const ListArtworkBottom = (props: ListArtworkBottomProps) => {
    if (props.auction){
        return (
            <div>
                <BottomInfo label="Current Bid" price={props.currentBid}/>
                <BottomInfo label="Ending in" endingIn={props.endingIn}/>
            </div>
        )
    }
    else if (props.purchasable) {
        return (
            <div>
                <BottomInfo label="Buy for" price={props.price}/>
            </div>
    )
    }
    return (
            <div>  
                <BottomInfo label="Reserve Price" price={props.price}/>
            </div>
    )
}
export default ListArtworkBottom