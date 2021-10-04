import Link from "next/link";
import React from "react";
import Image from "next/image"
import ArtworkTitleCreator from "./ArtworkTitleCreator";
import Price from "./Price";
import { ListArtworkFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";
import {randomMockMedia} from '../../../utils/index'

const ListArtwork = (props: ListArtworkFieldsProp) => {
    const artwork = props.artwork;
    const coverImage = `/dist/images/mock/artworks/${randomMockMedia(16)}.png`;
    return (
        <div data-cy= "cont-list-artwork">
            <div data-cy= "list-artwork">
                <div>
                    <Image alt="list cover image" src={coverImage} width={368} height = {368}/>
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
