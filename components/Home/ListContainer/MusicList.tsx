import React from "react";
import MusicListRow from "./MusicListRow";
import TitleViewAll from "./TitleViewAll";

interface MusicListProps {
    title: string,
    viewAll: string, 
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

const MusicList = (props: MusicListProps) => {
    return (
        <div>
            <div>
                <TitleViewAll title={props.title} viewAll={props.viewAll}/>
                <div>
                    <MusicListRow start={0} end={4} artworks={props.artworks}/>
                    <MusicListRow start={4} end={8} artworks={props.artworks}/>
                </div>
            </div>
        </div>
    )
}
export default MusicList