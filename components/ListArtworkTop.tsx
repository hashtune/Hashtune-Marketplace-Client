import Link from "next/link";
import React from "react";
import Image from "next/image"

interface ListArtworkProps {
  name: string,
  coversrc: string,
  artistHandle: string,
  genre: string,
  type: string
}


const ListArtworkTop = (props: ListArtworkProps) => {
    return (
        <div>
            <Image src= {props.coversrc} width = {206} height= {206}/>
            <div className="artwork - info">
                <div>
                    <div className = "type-genre">
                        <div className="name">
                            <Link href= '/'>{props.name}</Link>
                        </div>
                        <div className ="genre">
                            <Link href= '/'>{props.genre}</Link>
                        </div>
                        <div className ="type">
                            <Link href= '/'>{props.type}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListArtworkTop