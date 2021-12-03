import React from "react";
import { AudioPlayerContext } from "../../hooks/audioPlayer";
import styles from "./audioPlayer.module.scss";

export type AudioTimelineProps = {
  artist: string;
  title: string;
  length: string;
  currentTime: string;
};

export const AudioTimeline = ({
  artist,
  title,
  length,
  currentTime,
}: AudioTimelineProps) => {
  const { isPaused, currentSong, toggle } = React.useContext(
    AudioPlayerContext
  );
  return currentSong ? (
    <div id="audioTimeline" className={styles["audioTimeline"]}>
      <div className={styles["audioTimeline__menu"]}>
        <div
          className={styles["audioTimeline__menu-item"]}
          onClick={() => toggle()}
        >
          {isPaused ? "play" : "pause"}
          {/* TODO add previous and next */}
        </div>
        <div className={styles["audioTimeline__menu-item"]}>{artist}</div>
        <div className={styles["audioTimeline__menu-item"]}>{title}</div>
        <div className={styles["audioTimeline__menu-item"]}>
          {currentTime} / {length}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
