const Track = require('../models/Track');
const mongoose = require('mongoose');

const getAllTrack = async (req, res) => {
    try {
        const tracks = await Track.find({});
        res.json(tracks);
    } catch (error) {
        console.error("Error fetching tracks:", error);
        res.status(500).json({ message: "Tracks not found" });
    }
};

const saveTrack = async (req, res) => {
    try {
        const { Title, Artist, Image, Audio } = req.body;
        console.log(req.body)
        
        if (!Title || !Artist || !Image || !Audio) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newTrack = new Track({ Title, Artist, Image, Audio });
        const savedTrack = await newTrack.save();
        return res.status(201).json(savedTrack);
    } catch (error) {
        console.error("Error saving track:", error);
        res.status(500).json({ message: "Can't save the song" });
    }
};

const deleteTrack = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid track ID" });
        }

        const deletedTrack = await Track.findByIdAndDelete(id);
        if (!deletedTrack) {
            return res.status(404).json({ message: "Track not found" });
        }

        res.status(200).json({ message: `Track "${deletedTrack.Title}" deleted successfully` });
    } catch (error) {
        console.error("Error deleting track:", error);
        res.status(500).json({ message: "Track cannot be deleted" });
    }
};

const playTrack = async (req, res) => {
    try{
        const {id} = req.params;
        const track = await Track.findById(id)
        if(!track){
           return res.status(404).json({message: "Track not found"})
        }
        return res.status(200).json(track);
    }catch(error){
        res.status(500).json({message: "Cannot play the track"});
    }
};

const playNext = async (req, res) => {
    try{
        const {id} = req.params;
        const track = await Track.findById(id)
        if(!track){
            res.status(404).json({message: "Track not found"})
        }
        // Find next track in playlist
        const tracks = await Track.find({});
        const currentIndex = tracks.findIndex(t => t._id.toString() === id);
        const nextIndex = (currentIndex + 1) % tracks.length;
        const nextTrack = tracks[nextIndex];
        
        res.status(200).json(nextTrack);
    }catch(error){
        res.status(500).json({message: "Cannot play the track"});
    }
};

const playPrev = async (req, res) => {
    try{
        const {id} = req.params;
        const track = await Track.findById(id)
        if(!track){
            res.status(404).json({message: "Track not found"})
        }
        // Find previous track in playlist
        const tracks = await Track.find({});
        const currentIndex = tracks.findIndex(t => t._id.toString() === id);
        const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
        const prevTrack = tracks[prevIndex];
        
        res.status(200).json(prevTrack);
    }catch(error){
        res.status(500).json({message: "Cannot play the track"});
    }
};

module.exports = {
    getAllTrack,
    saveTrack,
    deleteTrack,
    playTrack,
    playNext,
    playPrev
};