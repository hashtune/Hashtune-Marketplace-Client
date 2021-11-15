import React from "react";
import Image from "next/image";
import CreatorImageHandle from "../Badges/CreatorImageHandle";
import { ListCreatorFields } from "../../lib/interfaces/CreatorInterfaces";
import { randomMockMedia } from "../../utils/index";

const ListCreator = (props: ListCreatorFields) => {
  const userImage = `/dist/images/mock/artworks/${randomMockMedia(16)}.png`;
  return (
    <div>
      <Image src={userImage} width={346} height={346} />
      <h2>{props.user.fullName}</h2>
    </div>
  );
};
export default ListCreator;
