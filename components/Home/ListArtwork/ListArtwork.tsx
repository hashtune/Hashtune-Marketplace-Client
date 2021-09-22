import Link from "next/link";
import React from "react";
import Image from "next/image"
import ListArtworkTop from "./ListArtworkTop";
import ListArtworkBottom from "./ListArtworkBottom";

interface ListArtworkProps {
  name: string,
  coverImage: string,
  artistHandle: string,
  genre: string [],
  artworkType: string
  artistImage: string

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
                <ListArtworkTop name={props.name} image={props.coverImage} artistHandle={props.artistHandle} genre={props.genre} artworkType={props.artworkType} artistImage={props.artistImage}/>
                <ListArtworkBottom auction= {props.auction} purchasable = {props.purchasable} inStock= {props.inStock} currentBid= {props.currentBid}endingIn={props.endingIn}/>
            </div>
        </div>
    )
}
export default ListArtwork