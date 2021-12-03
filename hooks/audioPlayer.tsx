import React from "react";
import { AudioTimeline } from "../components/Layout/AudioTimeline";

export type AudioPlayerContext = {
  playOrPause: (url: string,artist: string,title: string) => void;
  toggle: () => void;
  isPaused: boolean
  currentSong: string
};

export const AudioPlayerContext = React.createContext<AudioPlayerContext>({
  playOrPause: (url: string,artist: string,title: string) => {},
  toggle: () => {},
  isPaused: false,
  currentSong: ""
});

export const AudioPlayerContextProvider = ({ children }: any) => {
  const [artist, setArtist] = React.useState("") 
  const [title, setTile] = React.useState("") 
  const [length, setLength] = React.useState<string>("") 
  const [currentTime, setCurrentTime] = React.useState<string>("") 
  const [isPaused, setIsPaused] = React.useState<boolean>(false)
  const [currentSong, setCurrentSong] = React.useState<string>("")
  const [ended, setEnded] = React.useState(false)
  // TODO rename to NewSong
  function getDuration() {
    const elem = document.querySelector("audio");
    const minutes = Math.floor(elem?.duration! / 60)
    const seconds = Math.floor(elem?.duration! % 60);
    const formatted = minutes < 1 ? "0:" + seconds : minutes+":"+seconds
    setLength(formatted)
    setEnded(false)
  }

  function getCurrentTime() {
    const elem = document.querySelector("audio");
    const minutes = Math.floor(elem?.currentTime! / 60)
    const seconds = Math.floor(elem?.currentTime! % 60);
    const formatted = minutes < 1 ? "0:" + seconds : minutes+":"+seconds
    setCurrentTime(formatted)
  }
  setTimeout(() => {
    if (currentSong !== "" && !isPaused && !ended){
      getCurrentTime()
    }
  }, 1000);
    function playOrPause(url: string,artist: string,title: string) {
      const elem = document.querySelector("audio");
        const currentSrc = elem?.getAttribute("src")
        if (currentSrc !== url){
          // rotate this
          elem?.setAttribute("src", url)
          setCurrentSong(url)
          setArtist(artist)
          setTile(title)
        }
          if (!elem?.paused) {
            elem?.pause()
            setIsPaused(true)
          } else {
            elem?.play();
            setIsPaused(false)
            setEnded(false);
          }
      }

      function toggle() {
        const elem = document.querySelector("audio");
        if (!elem?.paused) {
          elem?.pause()
          setIsPaused(true)
        } else {
          elem?.play();
          setIsPaused(false)
          setEnded(false);
        }
        console.log(elem?.currentTime)
      }

  return (
    <AudioPlayerContext.Provider
      value={{
        playOrPause,
        toggle,
        isPaused,
        currentSong
      }}
    >
      {children}
      <audio controls autoPlay src="" onLoadedData={() => {getDuration(); setEnded(false);}} onEnded={() => {setEnded(true); setCurrentTime(""); setIsPaused(true)}} style={{display: 'none'}}></audio>
      <AudioTimeline artist={artist} title={title} length={length} currentTime={currentTime}></AudioTimeline>
    </AudioPlayerContext.Provider>
  );
};
