import React from "react";
import { ListArtworkFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";
import Countdown from "../Hero/Countdown";

const ArtworkTitleCreator = (props: ListArtworkFieldsProp) => {
  const artwork = props.artwork;
  return (
    <div>
      <h3>{artwork.title}</h3>
      <h3>{artwork.creator.fullName}</h3>
    </div>
  );
};

export default ArtworkTitleCreator;
