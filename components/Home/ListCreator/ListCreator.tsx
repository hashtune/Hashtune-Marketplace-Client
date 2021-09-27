import Link from "next/link";
import React from "react";
import Image from "next/image"
import FollowButton from "./FollowButton";
import CreatorImageHandle from "./CreatorIconHandle";

export interface Creator {
  name: string,
  id:string,
  handle: string
  image: string,
  bio: string,
}
export interface CreatorList {
    creators: Creator[],
}


const ListCreator = (props: Creator) => {
    return (
        <div>
            <div>
                <div>
                    <Image src={props.image}/>
                    <div>
                        <button>{props.name}</button>
                        <CreatorImageHandle handle={props.handle} image= {props.image}/>
                        <h3>{props.bio}</h3>
                    </div>
                </div>
                <FollowButton/>
            </div>
        </div>
    )
}
export default ListCreator