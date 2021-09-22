import Link from "next/link";
import React from "react";
import Image from "next/image"
import CreatorImageHandle from "../ListArtist/ArtistIconHandle";

interface ListArtworkProps {
  name: string,
  image: string,
  genre: string[],
  artworkType: string,
  artistImage: string,
  artistHandle: string,
}




const ListArtworkTop = (props: ListArtworkProps) => {
    const href: string ='../../../pages/api/artist/';
    return (
        <div>
            <Image src= {props.image} width = {206} height= {206}/>
            <div className="artwork - info">
                <div>
                    <div className = "type-genre">
                        <div className="name">
                            <Link href= '/'>{props.name}</Link>
                        </div>
                        <CreatorImageHandle image={props.artistImage} handle={props.artistHandle} />
                        <ul className ="genre">
                            {props.genre.map ( genre => (
                                <li>#{genre}</li>
                                )
                            )}
                        </ul>
                        <div className ="artworkType">
                            <Link href= '/'>{props.artworkType}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListArtworkTop