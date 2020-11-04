const logger = require('../config/winston');
const userModel = require('../models/user');

const create = async (input) => {
  input.id = userModel.nextId;
  userModel.nextId += 1;
  userModel.data.push(input);
  return input.id;
}

const getUsers = async (req) => {
  // return await db.UserModel.findAll({
  //   where: {

  //   },
  //   limit: 20,
  //   skip: 0,
  //   order: 'name'
  // })
  return userModel.data;
}
exports.getUsers = getUsers;


const createUser = async (input) => {
  let result = userModel.validate(input)
  if (result.valid) {
    try {
      // await db.UserModel.create(userInfo)
      let userId = create(input)
      return userId
    } catch (err) {
      logger.error(`User create error : ${err}`);
      throw new Error(`User create error : ${err.message}`);
    }
  } else {
    logger.warn(`User create validation error : ${result.message}`);
    throw new Error(`User create validation error : ${result.message}`);
  }
}

exports.createUser = createUser