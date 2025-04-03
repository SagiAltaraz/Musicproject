import React from "react";
import { FaPlay, FaDownload } from "react-icons/fa";

function Song({ song }) {
  if (!song || !song.snippet || !song.snippet.thumbnails) {
    return (
      <div className="error-container">
        <div className="error">Invalid song data</div>
      </div>
    );
  }

  const thumbnailUrl =
    song.snippet.thumbnails.maxres?.url ||
    song.snippet.thumbnails.high?.url ||
    song.snippet.thumbnails.medium?.url ||
    song.snippet.thumbnails.default?.url;

  const videoUrl = song.id?.videoId
    ? `https://www.youtube.com/watch?v=${song.id.videoId}`
    : "#";

  const handleDownload = () => {
    const videoId = song.id.videoId;
    const title = song.snippet.title;
    if (!videoId) {
      console.error("No video ID available for download");
      return;
    }

    console.log("Starting download for:", videoId, "as", title);
    const url = `http://localhost:3000/downloadSong?videoId=${encodeURIComponent(videoId)}&title=${encodeURIComponent(title)}`;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", ""); // Let backend set filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="search-result-item">
      <div className="thumbnail-container">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <img src={thumbnailUrl} alt={song.snippet.title} className="thumbnail" />
        </a>
      </div>
      <div className="search-result-info">
        <h3 className="song-title">{song.snippet.title || "Unknown Title"}</h3>
        <p className="channel-name">{song.snippet.channelTitle || "Unknown Channel"}</p>
        <div className="action-buttons">
          <button className="play-button" aria-label="Play">
            <FaPlay />
          </button>
          <button className="download-button" aria-label="Download" onClick={handleDownload}>
            <FaDownload />
          </button>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="youtube-link">
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

export default Song;