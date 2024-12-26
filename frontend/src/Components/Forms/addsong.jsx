import React, { useState } from "react";
import './addsong.css';

function AddSongForm(){

    const [SongName, setSongname] = useState("");
    const [Artist, setArtist] = useState("");
    const [Image, setImage] = useState("");
    const [Audio, setAudio] = useState("");
    const [message, setMessage] = useState(""); 


  
      
    const handleSubmit = async (event) => {
        event.preventDefault();
        const songData = {
              Title: SongName,
              Artist: Artist,
              Image: Image,
              Audio: Audio,
            };

            try {
                const response = await fetch("http://localhost:3035/save", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(songData),
                });
          
                if (response.ok) {
                  setMessage("Song added successfully!");
                  setSongname("");
                  setArtist("");
                  setImage("");
                  setAudio("");
                } else {
                  setMessage("Failed to add the song.");
                }
              } catch (error) {
                console.error("Error:", error);
                setMessage("Error occurred while adding the song.");
              }
            };
    return( 

        <div className="add-song-form">
        <h2>Add Song</h2>
        <form onSubmit={handleSubmit}>
          <label>Song Name</label>
          <input
            type="text"
            value={SongName}
            onChange={(e) => setSongname(e.target.value)}
            required
          />
  
          <label>Artist</label>
          <input
            type="text"
            value={Artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
  
          <label>Image URL</label>
          <input
            type="text"
            value={Image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
  
          <label>Audio URL</label>
          <input
            type="text"
            value={Audio}
            onChange={(e) => setAudio(e.target.value)}
            required
          />
  
          <button type="submit">Add Song</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  }

export default AddSongForm;