import { AudioPlayerContext } from "../../hooks/audioPlayer";
import Image from "next/image";
import React from "react";
import styles from "../Home/ListContainer/Artwork.module.scss";

export type PlayerContainerProps = {
  url: string;
  artist: string;
  title: string;
};

const PlayerContainer = (props: PlayerContainerProps) => {
  const { playOrPause } = React.useContext(AudioPlayerContext);
  function handleClick(url: string, artist: string, title: string) {
    playOrPause(url, artist, title);
  }
  let playButton = "/dist/play-button.svg";

  return (
    <Image
      className={styles["link"]}
      alt="cover image"
      src={playButton}
      width={80}
      height={80}
      onClick={() => handleClick(props.url, props.artist, props.title)}
    />
  );
};
export default PlayerContainer;
