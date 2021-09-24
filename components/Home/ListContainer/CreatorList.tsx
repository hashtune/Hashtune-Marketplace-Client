import React from "react"
import ListCreator from "../ListCreator/ListCreator"
import CreatorListRow from "./CreatorListRow"
import TitleViewAll from "./TitleViewAll"

export interface Creator {
    id: string,
    name: string
    handle: string,
    image: string,
    bio:string
}

interface CreatorListProps {
    title: string,
    creators: Creator[],
}

const CreatorList = (props: CreatorListProps) => {
    return (
        <div>
            <div>
                <TitleViewAll title={props.title} viewAll={"Creators"}/>
                <div>
                    <CreatorListRow start={0} end={4} creators={props.creators}/>
                    <CreatorListRow start={4} end={8} creators={props.creators}/>
                    <CreatorListRow start={8} end={12} creators={props.creators}/>
                    <CreatorListRow start={12} end={16} creators={props.creators}/>
                </div>
            </div>
        </div>
    )
}
export default CreatorList