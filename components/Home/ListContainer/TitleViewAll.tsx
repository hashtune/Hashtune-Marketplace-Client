import React from "react";

interface TitleViewAllProps {
    title: string,
    viewAll: string, 
}

const TitleViewAll = (props: TitleViewAllProps) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <h3>View all {props.viewAll}</h3>
        </div>
    )
}
export default TitleViewAll