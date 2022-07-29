import React from "react";
import styles from "./Hero.module.scss";

export interface Coin {
  symbol: string;
  currentPrice: number;
}
interface CoinProp {
  currentHighInBnb: number;
  coin: Coin;
  style: string;
}

const ConvertedPrice = (props: CoinProp) => {
  const priceInDollars = props.coin.currentPrice * props.currentHighInBnb;
  return (
    <div className={"price_card " + props.style}>
      <h3 className="hero_card_title">Current Bid</h3>
      <div className="price_card-data">
        <div className="price_card-data--crypto">
          {props.currentHighInBnb} BNB
        </div>
        <div className="price_card-data--divider" />
        <div className="price_card-data--fiat">
          {/* TODO fix this nan */}
          {isNaN(priceInDollars) ? "" : priceInDollars} $
        </div>
      </div>
    </div>
  );
};
export default ConvertedPrice;
