import React from "react";
import MusicListRow from "./MusicListRow";
import TitleViewAll from "./TitleViewAll";
import {Artwork} from "../ListArtwork/ListArtwork"


interface MusicListProps {
    title: string,
    viewAll: string, 
    artworks: Artwork[],
}

const MusicList = (props: MusicListProps) => {
    return (
        <div>
            <div>
                <TitleViewAll title={props.title} viewAll={props.viewAll}/>
                <div>
                    <MusicListRow startSlice={0} endSlice={4} artworks={props.artworks}/>
                    <MusicListRow startSlice={4} endSlice={8} artworks={props.artworks}/>
                </div>
            </div>
        </div>
    )
}
export default MusicList