const express = require('express');
const router = express.Router();
const trackController = require('../controllers/trackcontroller');




router.get('/', trackController.getAllTrack);
router.post('/save', trackController.saveTrack);
router.get('/:id', trackController.playTrack);
router.get('/:id/next', trackController.playNext);
router.get('/:id/prev', trackController.playPrev);
router.delete('/delete', trackController.deleteTrack);




module.exports = router;
