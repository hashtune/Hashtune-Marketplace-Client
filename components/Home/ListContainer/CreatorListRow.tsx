import React from "react"
import ListCreator from "../ListCreator/ListCreator"
import TitleViewAll from "./TitleViewAll"

interface CreatorListRowProps {
    start: number,
    end: number,
    creators: {
        id: string,
        name: string
        handle: string,
        image: string,
        bio:string
    }[]
}
const CreatorListRow = (props: CreatorListRowProps) => {
  return (
        <ul> 
            {props.creators.slice(props.start,props.end).map(creator => (
                <li key={creator.id}>
                    <ListCreator name={creator.name} handle={creator.handle} image={creator.image} bio={creator.bio}/>
                </li>
            ))}
        </ul>
    )
};

export default CreatorListRow