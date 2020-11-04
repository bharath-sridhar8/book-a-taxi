const logger = require('../config/winston');
const driverModel = require('../models/driver');

const create = async (input) => {
  input.id = driverModel.nextId;
  driverModel.nextId += 1;
  driverModel.data.push(input);
  return input.id;
}

const getDrivers = async (req) => {
  // return await db.driverModel.findAll({
  //   where: {

  //   },
  //   limit: 20,
  //   skip: 0,
  //   order: 'name'
  // })
  return driverModel.data;
}
exports.getDrivers = getDrivers;


const createDriver = async (input) => {
  let result = driverModel.validate(input)
  if (result.valid) {
    try {
      // await db.driverModel.create(driverInfo)
      let driverId = create(input)
      return driverId
    } catch (err) {
      logger.error(`driver create error : ${err}`);
      throw new Error(`driver create error : ${err.message}`);
    }
  } else {
    logger.warn(`driver create validation error : ${result.message}`);
    throw new Error(`driver create validation error : ${result.message}`);
  }
}

exports.createDriver = createDriver