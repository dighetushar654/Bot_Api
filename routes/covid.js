const router = require('express').Router();
const covidController = require("../controllers/covidController");

router
    .post("/", covidController.create_covid)
    .get("/", auth, covidController.get_all);
module.exports = router;