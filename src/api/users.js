const express = require("express");
const router = express.Router();
// const debug = require("debug")("taxi:userRoute");
const userService = require('../services/user')
const logger = require('../config/winston')

router.get("/", async (req, res) => {
  try {
    let limit = req.query['limit'],
      offset = req.query['offset'],
      filters = req.query['filters'];
    let users = await userService.getUsers(limit, offset, filters);
    logger.debug('User listing :  successful');
    res.send({
      success: true,
      data: users
    })
  } catch(err) {
    logger.error(`${req.method} ${req.path} error.`);
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    await userService.createUser(req.body);
    logger.debug('User creation successful');
    res.send({
      success: true,
      message: 'User creation successful'
    });
  } catch (err) {
    logger.error(`${req.method} ${req.path} error.`);
    res.status(500).send(err.message);
  }
});

module.exports = router;
