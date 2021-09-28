
import React from "react";
import Countdown from '../Hero/Countdown'
import {ArtworkProp} from "./ListArtwork"


const Price = (props: ArtworkProp) => {
    const artwork = props.artwork;
    if (!artwork.listed){
        return(<div></div>);
    } else if (artwork.saleType === "fixed"){
        return( <div>
                    <h3>Buy for {artwork.price} BNB</h3>
                </div>)
             
    } else if (artwork.auctionWithNoReservePriceAndNoBids){
        return ( <div>
                    <h3>Make an offer</h3>
                </div>)
    } else if (artwork.latestAuction.bids=== []){
        const lastIndex = artwork.auctions.length
        return (<div>
                    <h3>Bid {artwork.auctions[lastIndex].currentHigh} BNB</h3>
                </div>)
    } else {
        return (<div>
                    <h3>Bid {artwork.reservePrice} BNB</h3>
                </div>) 
    }
}
export default Price