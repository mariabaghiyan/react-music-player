import React from "react";
import SongRow from "./SongRow";

const SongList = ({ songs, onRemove }) => {
  return (
    <div className="song-list">
      {songs.map((song, index) => (
        <SongRow key={index} song={song} onRemove={() => onRemove(index)} />
      ))}
    </div>
  );
};

export default SongList;
