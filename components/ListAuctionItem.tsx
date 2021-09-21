import Link from "next/link";
import React from "react";
import Image from "next/image"
import ListArtworkTop from "./ListArtworkTop";
import ListArtworkBottom from "./ListArtworkBottom";

interface ListArtworkProps {
  name: string,
  coversrc: string,
  artistHandle: string,
  genre: string,
  type: string

  purchasable?: boolean,
  auction?: boolean,
  price?: number,
  inStock?: number,
  currentBid?: number,
  endingIn?: string,
}


const ListArtwork = (props: ListArtworkProps) => {
    return (
        <div>
            <div>
                <ListArtworkTop name={props.name} coversrc={props.coversrc} artistHandle={props.artistHandle} genre={props.genre} type={props.type}/>
                <ListArtworkBottom auction= {props.auction} purchasable = {props.purchasable} inStock= {props.inStock} currentBid= {props.currentBid}endingIn={props.endingIn}/>
            </div>
        </div>
    )
}
export default ListArtwork