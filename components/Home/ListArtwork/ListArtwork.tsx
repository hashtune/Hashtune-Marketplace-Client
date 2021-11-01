import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Price from "./Price";
import { ListArtworkFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";
import { randomMockMedia } from "../../../utils/index";
import styles from "../ListContainer/Artwork.module.scss";

const ListArtwork = (props: ListArtworkFieldsProp) => {
  const artwork = props.artwork;
  const coverImage = `/dist/images/mock/artworks/${randomMockMedia(16)}.png`;
  const artworkContent: React.RefObject<HTMLDivElement> = useRef(null);
  useEffect(() => {
    if (props.userPage === true) {
      artworkContent.current?.classList.toggle(
        styles["artwork__content--user-page"]
      );
    }
  });

  return (
    <div className={styles["artwork"]}>
      <div>
        <Image
          alt="list cover image"
          src={coverImage}
          width={props.imageSize}
          height={props.imageSize}
        />
      </div>
      <div ref={artworkContent} className={styles["artwork__content"]}>
        <div className={styles["artwork__content--title-name"]}>
          <h3>{artwork.title}</h3>
          <p>{artwork.creator.fullName}</p>
        </div>
        <Price artwork={artwork} />
      </div>
    </div>
  );
};
export default ListArtwork;
