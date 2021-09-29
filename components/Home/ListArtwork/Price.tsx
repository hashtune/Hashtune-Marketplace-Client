
import React from "react";
import { ListArtworkFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";
import Countdown from '../Hero/Countdown'


const Price = (props: ListArtworkFieldsProp) => {
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
    } else if (artwork.latestAuction === null || artwork.latestAuction.bids=== []){
        return (<div>
                    <h3>Bid {artwork.reservePrice} BNB</h3>
                </div>)
    } else {
        return (<div>
                    <h3>Bid {artwork.latestAuction.currentHigh} BNB</h3>
                </div>) 
    }
}
export default Price