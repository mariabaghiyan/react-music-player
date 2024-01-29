import React from "react";

const AddAllButton = ({ song, setSongs }) => {
  const handleAddAllClick = () => {
    setSongs((prevSongs) => [...prevSongs, song]);
  };

  return <button onClick={handleAddAllClick}>Add All</button>;
};

export default AddAllButton;
