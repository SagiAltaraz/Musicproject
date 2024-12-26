import Track from '../models/Track.js';
import mongoose from 'mongoose';


export const getAllTrack = async (req, res) => {
    try {
        const tracks = await Track.find({});
        res.json(tracks);
    } catch (error) {
        console.error("Error fetching tracks:", error);
        res.status(500).json({ message: "Tracks not found" });
    }
};

export const saveTrack = async (req, res) => {
    try {
        const { Title, Artist, Image, Audio } = req.body;
        console.log(req.body)
        console.log(Title,Artist,Image,Audio)
        if (!Title || !Artist || !Image || !Audio) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newTrack = new Track({ Title, Artist, Image, Audio });
        const savedTrack = await newTrack.save();
        res.status(201).json(savedTrack);
    } catch (error) {
        console.error("Error saving track:", error);
        res.status(500).json({ message: "Can't save the song" });
    }
};

export const deleteTrack = async (req, res) => {
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

export const playTrack =  async (req,res) => {
    try{
        const {id} = req.params;
        const track = await Track.findById(id)
        if(!track){
            res.status(404).json({message: "Track not found"})
        }
        res.status(200).json({message: "Track played successfully"})
    }catch(error){
        res.status(500).json({message: "Canot play the track"});
    }
};

export const playNext =  async (req, res) => {
    try{
        const {id} = req.params;
        const track = await Track.findById(id)
        if(!track){
            res.status(404).json({message: "Track not found"})
        }
        res.status(200).json({message: "Track played successfully"})
    }catch(error){
        res.status(500).json({message: "Canot play the track"});
    }
};
export const playPrev =  async (req, res) => {
    try{
        const {id} = req.params;
        const track = await Track.findById(id)
        if(!track){
            res.status(404).json({message: "Track not found"})
        }
        res.status(200).json({message: "Track played successfully"})
    }catch(error){
        res.status(500).json({message: "Canot play the track"});
    }
};
