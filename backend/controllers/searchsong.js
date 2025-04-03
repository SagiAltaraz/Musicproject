const axios = require('axios');

const searchYouTube = async function(req, res) {
    const { searchQuery } = req.query;    
    if (!searchQuery) {
        return res.status(400).json({ error: "Query parameter is required" });
    }
    
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&maxResults=30&key=${process.env.YoutubeAPI}`;
    
    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching YouTube data:", error);
        res.status(500).json({ error: "Failed to fetch data from YouTube API" });
    }
};



module.exports = { searchYouTube };