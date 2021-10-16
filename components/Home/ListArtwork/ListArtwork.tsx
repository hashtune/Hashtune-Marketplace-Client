import Link from "next/link";
import React from "react";
import Image from "next/image";
import ArtworkTitleCreator from "./ArtworkTitleCreator";
import Price from "./Price";
import { ListArtworkFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";
import { randomMockMedia } from "../../../utils/index";
import styles from "../ListContainer/Artwork.module.scss";

const ListArtwork = (props: ListArtworkFieldsProp) => {
  const artwork = props.artwork;
  const coverImage = `/dist/images/mock/artworks/${randomMockMedia(16)}.png`;
  return (
    <div className="artworks__artwork_data">
      <div className={styles["artworks__artwork_data--image-container"]}>
        <Image
          alt="list cover image"
          src={coverImage}
          width={368}
          height={368}
          className={styles["artworks__artwork_data--image"]}
        />
      </div>
      <div className={styles["artworks__artwork_data--content"]}>
        <div className={styles["artwork__title-creator"]}>
          <h3>{artwork.title}</h3>
          <p>{artwork.creator.fullName}</p>
        </div>
        <Price artwork={artwork} />
      </div>
    </div>
  );
};
export default ListArtwork;
