import React from "react";
import "./homepage.css";
import SongList from "../SongList/songlist"; // Ensure this path is correct

function Homepage({ searchResults }) {
  return (
    <main className="main-content">
      <div className="content-area">
        <h1>Good afternoon</h1>

        {/* Display search results if available */}
        {searchResults.length > 0 ? (
          <SongList searchResults={searchResults} />
        ) : (
          <div className="recent-playlists">
            <div className="playlist-card">
              <button className="playlist-btn">
                <img
                  src="/public/img/37i9dQZF1DZ06evO00wLyc-default.jpg"
                  alt="Playlist 1"
                />
                <span>Playlist 1</span>
              </button>
            </div>
            <div className="playlist-card">
              <button className="playlist-btn">
                <img
                  src="/public/img/37i9dQZF1DZ06evO0JU6Vb-default.jpg"
                  alt="Playlist 2"
                />
                <span>Playlist 2</span>
              </button>
            </div>
            {/* Add more playlist cards as needed */}
            <div className="playlist-card">
              <button className="playlist-btn">
                <img
                  src="/public/img/37i9dQZF1DZ06evO0JU6Vb-default.jpg"
                  alt="Playlist 3"
                />
                <span>Playlist 3</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Homepage;