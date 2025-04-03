import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import axios from "axios";

function Header({ setSearchResults }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const suggestionsRef = useRef(null);

  // Handle click outside suggestions to close them
  useEffect(() => {
    function handleClickOutside(event) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Debounce function to prevent too many API calls
  const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Fetch suggestions when search query changes
  const fetchSuggestions = debounce(async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    
    setIsLoading(true);
    try {
      // You can create a new endpoint for this or use YouTube's suggestion API
      const response = await axios.get("http://localhost:3000/searchSuggestions", {
        params: { searchQuery: query }
      });
      
      setSuggestions(response.data.suggestions || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  }, 300);

  // Update search query and fetch suggestions
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length >= 2) {
      fetchSuggestions(query);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Execute search with the current query
  const handleSearch = async () => {
    setShowSuggestions(false);
    if (!searchQuery.trim()) return;

    try {
      const response = await axios.get("http://localhost:3000/getListOfSongs", {
        params: { searchQuery }
      });
      
      if (response.data.items) {
        setSearchResults(response.data.items);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    
    // Execute search with the selected suggestion
    handleSearchWithQuery(suggestion);
  };

  // Execute search with a specific query
  const handleSearchWithQuery = async (query) => {
    try {
      const response = await axios.get("http://localhost:3000/getListOfSongs", {
        params: { searchQuery: query }
      });
      
      if (response.data.items) {
        setSearchResults(response.data.items);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Handle key press events for keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="top-bar">
      <a href="/" className="logo">
        <svg role="img" viewBox="0 0 24 24" aria-label="Spotify" height="32">
          <path d="M13.427.01C6.805-.253 1.224 4.902.961 11.524.698 18.147 5.853 23.728 12.476 23.99c6.622.263 12.203-4.892 12.466-11.514S20.049.272 13.427.01m5.066 17.579a.717.717 0 0 1-.977.268..." />
        </svg>
      </a>
      <a href="/" className="homebutton">
        <svg viewBox="0 0 24 24" className="homebutton-icon">
          <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z" />
        </svg>
      </a>
      <div className="searcharea" ref={suggestionsRef}>
        <a href="#" className="search-icon" onClick={handleSearch}>
          <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
          </svg>
        </a>
        <input
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="searchbar"
          type="text"
          placeholder="What do you want to play?"
        />
        
        {showSuggestions && (
          <div className="search-suggestions">
            {isLoading ? (
              <div className="suggestion-item loading">Loading...</div>
            ) : suggestions.length > 0 ? (
              suggestions.map((suggestion, index) => (
                <div 
                  key={index} 
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <svg className="suggestion-icon" viewBox="0 0 24 24">
                    <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
                  </svg>
                  {suggestion}
                </div>
              ))
            ) : searchQuery.length >= 2 ? (
              <div className="suggestion-item no-results">No suggestions found</div>
            ) : null}
          </div>
        )}
      </div>
      <div className="user-profile">
        <span>Welcome Sagi Altaraz</span>
        <i className="icon dropdown"></i>
        <img src="/img/profilepic.png" alt="User Avatar" />
      </div>
    </header>
  );
}

export default Header;
