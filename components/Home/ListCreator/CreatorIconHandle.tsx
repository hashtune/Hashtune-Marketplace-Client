import Link from "next/link";
import React from "react";
import Image from "next/image";

interface CreatorImageHandleProps {
  image: string;
  handle: string;
}

const CreatorImageHandle = (props: CreatorImageHandleProps) => {
  return (
    <div>
      <Image src={props.image} width={28} height={28} />
      <Link href={`/${props.handle}`}>{props.handle}</Link>
    </div>
  );
};
export default CreatorImageHandle;
