import React from "react";
import Countdown from '../Hero/Countdown'
import {Artwork, ArtworkProp} from "./ListArtwork"


const ArtworkTitleCreator = (props: ArtworkProp) => {
    const artwork = props.artwork
    return (
        <div>
            <h3>{artwork.title}</h3>
            <h3>{artwork.creator.name}</h3>
        </div>
    )
}

export default ArtworkTitleCreator