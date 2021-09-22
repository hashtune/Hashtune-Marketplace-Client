import Link from "next/link";
import React from "react";
import Image from "next/image"
import CreatorImageHandle from "../ListCreator/CreatorIconHandle";

interface ListArtworkProps {
  name: string,
  image: string,
  genre: string[],
  artworkType: string,
  creatorImage: string,
  creatorHandle: string,
}




const ListArtworkTop = (props: ListArtworkProps) => {
    return (
        <div>
            <Image src= {props.image} width = {206} height= {206}/>
            <div className="artwork - info">
                <div>
                    <div className = "type-genre">
                        <div className="name">
                            <Link href= '/'>{props.name}</Link>
                        </div>
                        <CreatorImageHandle image={props.creatorImage} handle={props.creatorHandle} />
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