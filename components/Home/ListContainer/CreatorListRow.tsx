import React from "react"
import ListCreator from "../ListCreator/ListCreator"
import TitleViewAll from "./TitleViewAll"
import {Creator} from "./CreatorList"

interface CreatorListRowProps {
    start: number,
    end: number,
    creators: Creator[]
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