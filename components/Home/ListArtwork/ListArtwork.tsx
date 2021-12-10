import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Price from "./Price";
import { ListArtworkFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";
import { randomMockMedia } from "../../../utils/index";
import styles from "../ListContainer/Artwork.module.scss";
import Link from "next/link";
import PlayerContainer from "../../Audio/PlayerContainer";

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
      <div className={styles["overlayContainer"]}>
        <Image
          alt="list cover image"
          src={coverImage}
          width={props.imageSize}
          height={props.imageSize}
        /> 
        <div className={styles["overlay"]}>
        <PlayerContainer url="/dist/audio/4.mp3" artist={artwork.creator.handle} title={artwork.title}></PlayerContainer>

        </div>
         
      </div>
      <div ref={artworkContent} className={styles["artwork__content"]}>
        <div className={styles["artwork__content--title-name"]}>
          <Link href={`/${artwork.creator.handle}/${artwork.handle}`}>
            <h3 className={styles["link"]}>{artwork.title}</h3>
          </Link>
          <Link href={`/${artwork.creator.handle}`}>
            <p className={styles["link"]}>{artwork.creator.fullName}</p>
          </Link>
        </div>
        <Price artwork={artwork} />
      </div>
    </div>
  );
};
export default ListArtwork;
