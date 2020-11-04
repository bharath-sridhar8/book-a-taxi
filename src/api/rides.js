const express = require("express");
const router = express.Router();
// const debug = require("debug")("taxi:rideRoute");
const rideService = require('../services/ride')
const logger = require('../config/winston')

router.get("/search", async (req, res) => {
  try {
    let rideInfo = await rideService.search(req.query);
    logger.debug('Ride search successful');
    res.send({
      success: true,
      data: rideInfo
    });
  } catch (err) {
    logger.error(`${req.method} ${req.path} error.`);
    res.status(500).send(err.message);
  }
});

module.exports = router;
