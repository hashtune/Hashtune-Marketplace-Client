import Link from "next/link";
import React from "react";
import Image from "next/image"
import FollowButton from "./FollowButton";
import CreatorImageHandle from "./CreatorIconHandle";

interface ListCreatorProps {
  name: string,
  handle: string
  image: string,
  bio: string,
}


const ListCreator = (props: ListCreatorProps) => {
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