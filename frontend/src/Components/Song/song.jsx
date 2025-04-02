// Song.jsx
import React from "react";
import { FaPlay, FaDownload } from "react-icons/fa"; // Import icons

function Song({ song }) {
  // Handle missing data to prevent crashes
  if (!song || !song.snippet || !song.snippet.thumbnails) {
    return (
      <div className="error-container">
        <div className="error">Invalid song data</div>
      </div>
    );
  }

  // Get best available thumbnail
  const thumbnailUrl =
    song.snippet.thumbnails.maxres?.url ||
    song.snippet.thumbnails.high?.url ||
    song.snippet.thumbnails.medium?.url ||
    song.snippet.thumbnails.default?.url;

  // Generate video URL if available
  const videoUrl = song.id?.videoId
    ? `https://www.youtube.com/watch?v=${song.id.videoId}`
    : "#";

  return (
    <div className="search-result-item">
      <div className="thumbnail-container">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={thumbnailUrl}
            alt={song.snippet.title}
            className="thumbnail"
          />
        </a>
      </div>

      <div className="search-result-info">
        <h3 className="song-title">{song.snippet.title || "Unknown Title"}</h3>
        <p className="channel-name">
          {song.snippet.channelTitle || "Unknown Channel"}
        </p>
        <div className="action-buttons">
          <button className="play-button" aria-label="Play">
            <FaPlay />
          </button>
          <button className="download-button" aria-label="Download">
            <FaDownload />
          </button>
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

export default Song;