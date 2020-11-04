const logger = require('../config/winston');
const rideModel = require('../models/ride');
const driverModel = require('../models/driver');

const create = async (input) => {
  input.id = rideModel.nextId;
  rideModel.nextId += 1;
  rideModel.data.push(input);
  return input.id;
}
exports.create = create

const findMatchingDriver = async (input) => {
  let { userLat, userLong, carType } = input
  let min_dist = Infinity,
    matchingDriver;
  for (let driver of driverModel.data) {
    let distance = Math.pow((driver.lat - userLat), 2) + Math.pow((driver.long - userLong), 2)
    if (driver.type === carType && distance < min_dist) {
      min_dist = distance
      matchingDriver = driver
    }
  }

  return matchingDriver
}

const prepareRideObj = (input, driverInfo) => {
  const { userId, userLat, userLong, destLat, destLong, numSeats } = input
  const { id } = driverInfo
  const distance = Math.sqrt(Math.pow(destLat - userLat, 2) + Math.pow(userLong - destLong, 2))
  const ride = {
    user_id: userId,
    driver_id: id,
    created_at: new Date(),
    start_lat: userLat,
    start_long: userLong,
    end_lat: destLat,
    end_long: destLong,
    expected_distance: distance,
    seats: numSeats
  }
  return ride
}

const search = async (input) => {
  try {
    let driverInfo = await findMatchingDriver(input)
    let rideInfo = prepareRideObj(input, driverInfo)
    await create(rideInfo)
    return rideInfo
  } catch (err) {
    logger.error(`ride create error : ${err}`);
    throw new Error(`ride create error : ${err.message}`);
  }
}
exports.search = search

const list = async () => {
  return rideModel.data
}
exports.list = list
