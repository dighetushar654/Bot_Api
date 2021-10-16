const router = require('express').Router();
const covidController = require("../controllers/covidController");

router
    .post("/", covidController.create_covid)
    .get("/", covidController.get_all);
module.exports = router;