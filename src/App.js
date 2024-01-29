import React, { useState } from "react";
import SongList from "./components/SongList";
import PlayAllButton from "./components/PlayAllButton";
import MusicUploadForm from "./components/MusicUploadForm";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    setUploading(true);
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(interval);
          setUploading(false);
          setUploadProgress(0);
          setSelectedFile(null);
          addSongToQueue();
        }
        return prevProgress + 10;
      });
    }, 500);
  };

  const addSongToQueue = () => {
    if (selectedFile) {
      setSongs((prevSongs) => [
        ...prevSongs,
        {
          songName: "New Song",
          artistName: "New Artist",
          trackNumber: prevSongs.length + 1,
          file: selectedFile,
        },
      ]);
      console.log("Song added to queue");
    }
  };

  const handleRemove = (index) => {
    const newSongs = [...songs];
    newSongs.splice(index, 1);
    setSongs(newSongs);
  };

  return (
    <div className="App">
      <h1>Music Player</h1>
      <SongList songs={songs} onRemove={handleRemove} />
      <MusicUploadForm
        selectedFile={selectedFile}
        onFileChange={handleFileChange}
        uploading={uploading}
        onUpload={handleUpload}
        uploadProgress={uploadProgress}
      />
      <PlayAllButton songs={songs} />
    </div>
  );
};

export default App;
