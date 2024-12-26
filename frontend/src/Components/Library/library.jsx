import React from 'react';
import './library.css';
//import './addsong';

//const [library, AddSongForm] = useState(""); 

function Library() {
    const AddSongForm = async (e) => {
        console.log({ e })
        try {
            const response = await fetch('http://localhost:3035/');
            console.log(response);

        } catch (error) {
            console.error({ error })
        }
    };  
    const DeleteSongForm = async (e) => {
        console.log({ e })
        try {
            const response = await fetch('http://localhost:3035/');
            console.log(response);

        } catch (error) {
            console.error({ error })
        }
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
                        <li onClick={AddSongForm} >Add Song</li>
                        <li onClick={DeleteSongForm}>Delete Song</li>
                        <li>Song Library</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Library;