
const request = require('supertest');
const app = require('../../app.js');

describe('POST /drivers', function () {
  it('create a new driver', function () {
    return request(app)
      .post('/drivers')
      .send({
        name: 'xyz',
        email: 'xyz@abc.com',
        phone: '9187231237'
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .expect('{"success":true,"message":"Driver creation successful"}')
  })
})