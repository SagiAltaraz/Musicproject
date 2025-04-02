import React from "react";
import Song from "../Song/song";

function SongList({ searchResults }) {
  console.log("Received searchResults:", searchResults); // Debugging line

  if (!Array.isArray(searchResults) || searchResults.length === 0) {
    return <div className="no-results">No search results found</div>;
  }

  return (
    <div className="search-results">
      {searchResults.map((song, index) => (
        <Song key={index} song={song} />
      ))}
    </div>
  );
}

export default SongList;
