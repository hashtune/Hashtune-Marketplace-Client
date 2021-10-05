import Link from "next/link";
import React from "react";
import Image from "next/image";

interface CreatorImageHandleProps {
  image: string;
  handle: string;
  containerStyle: string;
  // imageStyle: string;
}

const CreatorImageHandle = (props: CreatorImageHandleProps) => {
  return (
    <div className={props.containerStyle}>
      <Image
        alt={"creator image"}
        // className={props.imageStyle}
        src={props.image}
        width={30}
        height={30}
      />
      <Link href={`/${props.handle}`}>
        <a>@{props.handle}</a>
      </Link>
    </div>
  );
};
export default CreatorImageHandle;
