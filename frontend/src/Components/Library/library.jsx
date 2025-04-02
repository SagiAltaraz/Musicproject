import React from 'react';
import './library.css';

function Library({ onToggleAddSongForm }) {
    const handleAddSongClick = (e) => {
        e.preventDefault();
        if (onToggleAddSongForm) {
            onToggleAddSongForm();
        }
    };
    
    const handleDeleteSongClick = (e) => {
        e.preventDefault();
        console.log("Delete song clicked");
        // Implement delete song functionality
    };

    return (
        <>
        <div className="sidebar">
            <div className="playlist-section">
                <ul className="playlist-actions">
                    <li>
                        <a href="#create-playlist">
                            <i className="icon plus-icon"></i>
                            <span>Create Playlist</span>
                        </a>
                    </li>
                    <li>
                        <a href="#liked-songs">
                            <i className="icon liked-songs-icon"></i>
                            <span>Liked Songs</span>
                        </a>
                    </li>
                </ul>
                <div className="user-playlists">
                    <ul>
                        <li onClick={handleAddSongClick}>Add Song</li>
                        <li onClick={handleDeleteSongClick}>Delete Song</li>
                        <li>Song Library</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Library;