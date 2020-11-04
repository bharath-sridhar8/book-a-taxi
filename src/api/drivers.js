const express = require("express");
const router = express.Router();
// const debug = require("debug")("taxi:rideRoute");
const driverService = require('../services/driver')
const logger = require('../config/winston')

router.get("/", async (req, res) => {
  try {
    let limit = req.query['limit'],
      offset = req.query['offset'],
      filters = req.query['filters'];
    let rides = await driverService.getDrivers(limit, offset, filters);
    logger.debug('Ride listing :  successful');
    res.send({
      success: true,
      data: rides
    })
  } catch (err) {
    logger.error(`${req.method} ${req.path} error.`);
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    await driverService.createDriver(req.body);
    logger.debug('Ride creation successful');
    res.send({
      success: true,
      message: 'Driver creation successful'
    });
  } catch (err) {
    logger.error(`${req.method} ${req.path} error.`);
    res.status(500).send(err.message);
  }
});

module.exports = router;
