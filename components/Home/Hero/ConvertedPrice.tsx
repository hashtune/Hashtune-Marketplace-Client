
import React from "react";


export interface Coin {
    symbol : string,
    currentPrice: number,
}
interface CoinProp {
    currentHighInBnb : number,
    coin : Coin
}


const ConvertedPrice = (props: CoinProp) => {
    const priceInDollars = props.coin.currentPrice * props.currentHighInBnb;
    return (
        <div data-cy = "cont-hero-price">
            <h2 data-cy = "hero-price-header">Current Bid</h2>
            <h3 data-cy = "hero-price">{props.currentHighInBnb} BNB</h3>
            <h2 data-cy = "hero-price-separator">|</h2>
            <h2 data-cy = "hero-price-dollars">{priceInDollars} $</h2>
        </div>
    )
}
export default ConvertedPrice