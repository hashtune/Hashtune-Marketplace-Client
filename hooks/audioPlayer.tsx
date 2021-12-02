import React from "react";
import styles from "../components/Layout/audioPlayer.module.scss";

export type AudioPlayerContext = {
  playOrPause: (url: string) => void;
};

export const AudioPlayerContext = React.createContext<AudioPlayerContext>({
  playOrPause: (url: string) => {},
});

export const AudioPlayerContextProvider = ({ children }: any) => {
    
    function playOrPause(url: string) {
        var elem = document.querySelector("audio");
        const currentSrc = elem?.getAttribute("src")
        if (currentSrc !== url){
          // rotate this
          elem?.setAttribute("src", url)
        }
          if (!elem?.paused) {
            elem?.pause()
          } else {
            elem?.play();
    
          }
      }
  return (
    <AudioPlayerContext.Provider
      value={{
        playOrPause
      }}
    >
      {children}
      <audio controls autoPlay src="" style={{display: 'none'}}></audio>
    </AudioPlayerContext.Provider>
  );
};
