const mongoose = require('mongoose');

const covidSchema = new mongoose.Schema({
    quetion: {
        type:String,
    },
    userResponse: {
        type:String
    },
},
{timestamps: true});

module.exports = mongoose.model('Covid', covidSchema);