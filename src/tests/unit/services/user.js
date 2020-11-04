const userService = require('../../../services/user')
let should = require('chai').should()
describe('Test Create User', function () {
  it('should return the new user id.', async function () {
    const userId = await userService.createUser({
      name: 'xyz',
      email: 'xyz@abc.com',
      phone: '9187231237'
    })
    console.log(userId)
    userId.should.be.a("number")
  });
});

describe('List users', function() {
  it('Should return a array of users', async function() {
    let users = await userService.getUsers()
    console.log(users)
    users.should.be.an('array')
  })
} )