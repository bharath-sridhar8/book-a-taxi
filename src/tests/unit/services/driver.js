const driverService = require('../../../services/driver')
let should = require('chai').should()
describe('Test Driver Creation', function () {
  it('should return the new drivers id.', async function (){
    const id = await driverService.createDriver({
      name: 'xyz',
      email: 'xyz@abc.com',
      phone: '9187231237'
    })
    console.log(id)
    id.should.be.a("number")
  });
});