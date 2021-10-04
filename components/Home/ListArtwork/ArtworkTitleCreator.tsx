import React from "react";
import { ListArtworkFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";
import Countdown from "../Hero/Countdown";
import styles from "../ListContainer/Artwork.module.scss";

const ArtworkTitleCreator = (props: ListArtworkFieldsProp) => {
  const artwork = props.artwork;
  return (
    <div data-cy="artwork-title-creator">
      <h3 data-cy="artwork-title">{artwork.title}</h3>
      <p data-cy="artwork-creator-fullName">{artwork.creator.fullName}</p>
    </div>
  );
};

export default ArtworkTitleCreator;
