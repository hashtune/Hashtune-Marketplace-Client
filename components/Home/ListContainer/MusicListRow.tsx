import { ArtworkType } from ".prisma/client";
import React from "react"
import ListCreator from "../ListCreator/ListCreator"
import ListArtwork from "../ListArtwork/ListArtwork";
import TitleViewAll from "./TitleViewAll"

interface MusicListRowProps {
    start: number,
    end: number,
    artworks: {
        id: string,
        name: string
        handle: string,
        image: string,
        artworkType: string,
        owner: {
           handle: string,
           image: string 
        }
    }[]
}
const MusicListRow = (props: MusicListRowProps) => {
  return (
    // TODO remove hardcoded genre
        <ul> 
            {props.artworks.slice(props.start,props.end).map(artwork => (
                <li key={artwork.id}>
                    <ListArtwork name={artwork.name} coverImage={artwork.image} creatorHandle={artwork.owner.handle} genre={["Jazz", "HipHop"]} artworkType={artwork.artworkType} creatorImage={artwork.owner.image}/>
                </li>
            ))}
        </ul>
    )
};

export default MusicListRow