
import React from "react";
import { ListArtworkFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";
import Countdown from '../Hero/Countdown'


const Price = (props: ListArtworkFieldsProp) => {
    const artwork = props.artwork;
    if (!artwork.listed){
        return(<div data-cy ="not-listed-price" ></div>);
    } else if (artwork.saleType === "fixed"){
        return( <div data-cy = "buy-for-price">
                    <h3>Buy for s{artwork.price} BNB</h3>
                </div>)
    } else if (artwork.auctionWithNoReservePriceAndNoBids){
        return (<div data-cy = "make-offer-price">
                    <h3>Make an offer</h3>
                </div>)
    } else if (artwork.latestAuction === null || artwork.latestAuction.bids=== []){
        return (<div data-cy = "reserve-price">
                    <h3>Bid {artwork.reservePrice} BNB</h3>
                </div>)
    } else {
        return (<div data-cy = "current-high-price">
                    <h3>Bid {artwork.latestAuction.currentHigh} BNB</h3>
                </div>) 
    }
}
export default Price