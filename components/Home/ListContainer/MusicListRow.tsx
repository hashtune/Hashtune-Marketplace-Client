import { ArtworkType } from ".prisma/client";
import React from "react"
import ListCreator from "../ListCreator/ListCreator"
import ListArtwork from "../ListArtwork/ListArtwork";
import TitleViewAll from "./TitleViewAll"
import {Artwork} from "../ListArtwork/ListArtwork"

interface MusicListRowProps {
    startSlice: number,
    endSlice: number,
    artworks: Artwork[],
}
const MusicListRow = (props: MusicListRowProps, ) => {
  return (
        <ul> 
            {props.artworks.slice(props.startSlice, props.endSlice).map(artwork => (
                <li key={artwork.id}>
                    <ListArtwork artwork={artwork} />
                </li>
            ))}
        </ul>
    )
};

export default MusicListRow