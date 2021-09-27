
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
             
    } 
    //Should be auctionWithNoReservePriceAndNoBids   
    // const auctionLength: number = artwork.auctions.length;
    // Should use last added auction
    else if (artwork.saleType=== "auction" && artwork.reservePrice===null && artwork.auctions[0].bids === []){
        return ( <div>
                    <h3>Make an offer</h3>
                </div>)
    } else if (artwork.latestAuction.bids=== []){
        return (<div>
                    <h3>Bid {artwork.auctions[0].currentHigh} BNB</h3>
                </div>)
    } else {
        return (<div>
                    <h3>Bid {artwork.reservePrice} BNB</h3>
                </div>) 
    }
    // TODO remove reserve price for currentHIgh
}
export default Price