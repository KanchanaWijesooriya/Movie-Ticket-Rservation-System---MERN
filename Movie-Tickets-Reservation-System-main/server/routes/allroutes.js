const express = require("express");
const router = express.Router();

const {addcustData} = require('../controller/custCon')
const {getmoviedata} = require('../controller/movieCon')
const {updateseats} = require('../controller/seatCon')

router.route("/input").post(addcustData)
router.route("/recieve").get(getmoviedata)
router.route("/array").post(updateseats)

module.exports = router;