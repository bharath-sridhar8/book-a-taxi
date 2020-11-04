const rideService = require('../../../services/ride')
const should = require('chai').should()
describe('Get a Ride', function() {
  it('Find the closest driver and create a ride', async function(){
    let rideInfo = await rideService.search({
      userId: 1, 
      userLat: 10, 
      userLong: 20, 
      destLat: 15, 
      destLong: 20, 
      numSeats: 2, 
      carType: 'HATCH'
    })
    console.log(rideInfo)
    rideInfo.should.be.an('object')
    rideInfo.should.have.ownProperty('id')
    rideInfo.id.should.be.a('number')
  })
})