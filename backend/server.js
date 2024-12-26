const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const trackRoutes = require('./routes/trackRoutes');

dotenv.config();

const app = express();
app.use( cors({origin: "http://localhost:5173"}));
app.use(express.json());

const PORT = process.env.PORT || 3000;
async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_connection)
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}
connectDB();

app.use(trackRoutes)

app.listen(PORT, () => {
    console.log(`Serveris running on http://localhost:${PORT}/`);
});