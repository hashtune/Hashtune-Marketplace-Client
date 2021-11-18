import React from "react";
import { ListArtworkFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";
import Countdown from "../Hero/Countdown";

const Price = (props: ListArtworkFieldsProp) => {
  const artwork = props.artwork;

  const text =
    artwork.saleType === "fixed" ? (
      <h3>Buy for {artwork.price} BNB</h3>
    ) : artwork.auctionWithNoReservePriceAndNoBids ? (
      <h3>Make an offer</h3>
    ) : artwork.latestAuction === null ||
      artwork.latestAuction === undefined ||
      artwork.latestAuction.bids === [] ? (
      <h3>Bid {artwork.reservePrice} BNB</h3>
    ) : (
      <h3>Bid {artwork.latestAuction.currentHigh} BNB</h3>
    );
  return <div className="sales-type-badge">{text}</div>;
};
export default Price;
