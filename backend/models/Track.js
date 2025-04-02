const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  youtubeUrl: {
    type: String,
    required: true,
  },
  downloadedAt: {
    type: Date,
    default: Date.now,
  },
  downloadedBy: {
    type: String, // Could be a user ID or username if you have user authentication
  },
});


module.exports = mongoose.model("Track", trackSchema);