const mongoose = require('mongoose');

var ZoneSchema = new mongoose.Schema({
    zoneTitle: {
        type: String
    },
    zoneCharge: {
        type: String
    },
    zoneColor: {
        type: String
    },
    parkingSpots: {
        type: Number
    }
});


const Zone = mongoose.model('Zone', ZoneSchema)
module.exports = { Zone }