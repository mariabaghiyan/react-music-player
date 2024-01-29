import React, { useState, useEffect } from "react";

const PlayAllButton = ({ songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [audio, setAudio] = useState(new Audio());
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing && songs[currentSongIndex]) {
      const newAudio = new Audio();
      newAudio.src = URL.createObjectURL(songs[currentSongIndex].file);
      newAudio.onloadedmetadata = () => {
        newAudio.play();
      };
      setAudio(newAudio);
    }
  }, [currentSongIndex, playing, songs]);

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePlayPause = () => {
    setPlaying((prevPlaying) => {
      if (prevPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      return !prevPlaying;
    });
  };

  const handlePlayAll = () => {
    setPlaying(true);
    setCurrentSongIndex(0);
  };

  audio.addEventListener("ended", nextSong);

  return (
    <div className="play-all-button">
      <button onClick={handlePlayPause}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default PlayAllButton;
