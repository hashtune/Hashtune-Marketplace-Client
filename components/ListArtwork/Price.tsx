import React from "react";
import { Artwork } from "../../graphql/generated/apolloComponents";
import { ListArtworkProps } from "../../lib/interfaces/ArtworkInterfaces";
import Countdown from "../Hero/Countdown";

export function priceInformation(artwork: Artwork) {
  let price = "";
  let preText = "";
  if (artwork.saleType === "fixed") {
    preText = "Buy For ";
    price = artwork.price + " BNB";
  } else if (artwork.auctionWithNoReservePriceAndNoBids) {
    preText = "Make an Offer";
  } else if (
    artwork.latestAuction === null ||
    artwork.latestAuction === undefined ||
    artwork.latestAuction.bids === []
  ) {
    preText = "Bid ";
    price = artwork.reservePrice + " BNB";
  } else {
    preText = "Bid ";
    price = artwork.latestAuction.currentHigh + " BNB";
  }
  return [preText, price];
}

const Price = (props: ListArtworkProps) => {
  let priceText = priceInformation(props.artwork);
  console.log("priceTEXT: " + priceText[0] + priceText[1]);
  return (
    <div className="sales-type-badge">
      <h3>{priceText[0] + priceText[1]}</h3>
    </div>
  );
};
export default Price;
