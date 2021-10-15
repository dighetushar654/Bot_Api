const { schema } = require("../models/covid_Model");
const mongoose = require("mongoose");
const Covid = mongoose.model('Covid', schema);

//create covid
exports.create_covid = async (req, res) => {
    try {
    
    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
}

// get all  
exports.get_all = async (req, res) => {
    try {
        
    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
}
