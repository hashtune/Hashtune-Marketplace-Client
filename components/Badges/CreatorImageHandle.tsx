import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../Hero/Hero.module.scss";

interface CreatorImageHandleProps {
  image: string;
  handle: string;
}

const CreatorImageHandle = (props: CreatorImageHandleProps) => {
  return (
    <Link href={`/${props.handle}`}>
      <div className={"hero__details--user-details"}>
        <div>
          <Image
            alt={"creator image"}
            src={props.image}
            width={30}
            height={30}
          />
        </div>
        <a>@{props.handle}</a>
      </div>
    </Link>
  );
};
export default CreatorImageHandle;
