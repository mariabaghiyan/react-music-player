import React, { useState } from "react";

const MusicUploadForm = ({
  selectedFile,
  onFileChange,
  uploading,
  onUpload,
  uploadProgress,
  onPlayAll,
}) => {
  const [localUploadProgress, setLocalUploadProgress] = useState(0);

  const handleUpload = () => {
    setLocalUploadProgress(0);
    onUpload();
  };

  return (
    <div className="upload-form">
      <input
        type="file"
        accept=".mp3,.wav"
        onChange={onFileChange}
        disabled={uploading}
      />
      <div className="file-name">{selectedFile ? selectedFile.name : ""}</div>
      <button
        className="upload-button"
        onClick={handleUpload}
        disabled={!selectedFile || uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${localUploadProgress}%` }}
        />
      </div>
    </div>
  );
};

export default MusicUploadForm;
