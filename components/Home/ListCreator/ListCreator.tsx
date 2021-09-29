import Link from "next/link";
import React from "react";
import Image from "next/image"
import CreatorImageHandle from "./CreatorIconHandle";
import {ListCreatorFields} from '../../../lib/interfaces/CreatorInterfaces'

const ListCreator = (props: ListCreatorFields) => {
    return (
        <div>
            <Image src={props.image} width= {346} height = {346}/>
            <h2>{props.fullName}</h2>
        </div>
    )
}
export default ListCreator