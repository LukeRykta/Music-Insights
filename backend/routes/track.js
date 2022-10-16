const express = require('express');
const router = express.Router();
const Track = require('../models/Track');

// GET/allTracks
router.get('/', async(req, res) => {
    const tracks = await Track.find();
    try {
        return res.status(200).json(tracks)
    } catch (err) {
        return res.status(500).json({message: "Unable to get tracks"});
    }
})

module.exports = router;