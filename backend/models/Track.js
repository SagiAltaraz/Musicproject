const mongoose = require('mongoose')

const trackSchema = new mongoose.Schema({
    Title:{
        type: String,
        require: true,
    },
    Artist:{
        type: String,
        require: true,
    },
    Image:{
        type: String,
        require: [true, 'Image name is require']
    },
    Audio:{
        type: String,
        require: [true, 'Audio name is require']
    }
});
module.exports = mongoose.model('Track',trackSchema)
