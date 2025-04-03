const express = require('express');
const router = express.Router();
const searchsongControllers = require('../controllers/searchsong');
const trackController = require('../controllers/trackcontroller');
const downloadController = require('../controllers/download');
const searchSuggestionController = require('../controllers/searchsuggestion');



// router.get('/', trackController.getAllTrack);
// router.post('/save', trackController.saveTrack);
// router.get('/:id', trackController.playTrack);
// router.get('/:id/next', trackController.playNext);
// router.get('/:id/prev', trackController.playPrev);
// router.delete('/delete', trackController.deleteTrack);

router.get('/getListOfSongs',(req,res)=>{
    searchsongControllers.searchYouTube(req,res)
});
router.get('/downloadSong', (req, res) => {
    downloadController.downloadFromYoutube(req, res); 
});
router.get('/searchSuggestions', (req, res) => {
    searchSuggestionController.searchSuggestions(req, res);
});


module.exports = router;
