import React from "react";
import "./SongRow.css";

const SongRow = ({ song, onRemove }) => {
  return (
    <tr className="song-row">
      <td className="track-number">{song.trackNumber}</td>
      <td className="song-name">{song.songName}</td>
      <td className="artist-name">{song.artistName}</td>
      <td className="remove-button">
        <button onClick={onRemove}>Remove</button>
      </td>
    </tr>
  );
};

export default SongRow;
