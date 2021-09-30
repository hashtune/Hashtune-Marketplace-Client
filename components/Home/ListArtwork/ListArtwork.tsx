import Link from "next/link";
import React from "react";
import Image from "next/image"
import ArtworkTitleCreator from "./ArtworkTitleCreator";
import Price from "./Price";
import { ListArtworkFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";

const ListArtwork = (props: ListArtworkFieldsProp) => {
    const artwork = props.artwork;
    const coverImage = '/images/artwork.png';
    return (
        <div>
            <div>
                <div>
                    <Image src= {coverImage} width={368.2} height = {368.2}/>
                </div>
                <div>
                    <ArtworkTitleCreator artwork = {artwork}/> 
                    <Price artwork= {artwork}/>
                </div>
            </div>
        </div>
    )
}
export default ListArtwork