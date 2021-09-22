import React from "react";

interface BottomInfoProps {
  label: string,
  price?: number,
  endingIn?: string,
}


const BottomInfo = (props: BottomInfoProps) => {
    if (props.endingIn === null){
        return (
            <div>
                <h3>{props.label}</h3>
                <h3>{props.endingIn}</h3>
            </div>
        )
    }
    return (
        <div>
            <h3>{props.label}</h3>
            <h3>{props.price} ETH</h3>
        </div>
    )
}
export default BottomInfo