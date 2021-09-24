import React from "react";
import Countdown from '../Hero/Countdown'
import {ArtworkProp} from "./ListArtwork"


const Price = (props: ArtworkProp) => {
    const artwork = props.artwork
    if (artwork.saleType=== "auction") {
        if (artwork.currentBid !== null){
            return (
                <div>
                    <h3>Bid {artwork.currentBid} BNB</h3>
                </div>
            )
        } 
        else {
            return (
            <div>  
                <h3>Make an offer</h3>
            </div>
            )
        }
    }
    else{
        return (
            <div>
                <h3>Buy for {artwork.fixedPrice} BNB</h3>
            </div>
    )
    }
}
export default Price