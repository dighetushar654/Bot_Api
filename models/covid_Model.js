const mongoose = require('mongoose');
const validator = require('validator');

const covidSchema = new mongoose.Schema({
    quetion: {
        type:String,
    },
    optionA: {
        type:String
    },
    optionB: {
        type:String
    },
    optionC: {
        type:String
    },
    optionD: {
        type:String
    },
},
{timestamps: true});

module.exports = mongoose.model('Covid', covidSchema);