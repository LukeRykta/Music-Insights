const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const TrackSchema = Schema (
    {
        title: {
            type: String,
            required: true
        },
        artist: {
            type: String,
            required: true
        }
    }
)

module.exports = model("Track", TrackSchema)