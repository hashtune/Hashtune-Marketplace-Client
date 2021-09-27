
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
        <div>
            <h2>Current Bid</h2>
            <h3>{props.currentHighInBnb} BNB</h3>
            <h2>|</h2>
            <h2>{priceInDollars} $</h2>
        </div>
    )
}
export default ConvertedPrice