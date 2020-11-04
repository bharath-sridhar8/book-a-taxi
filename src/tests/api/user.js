
const request = require('supertest');
const app = require('../../app.js');

describe('POST /users', function () {
  it('create a new user users', function () {
    return request(app)
      .post('/users')
      .send({
        name: 'xyz',
        email: 'xyz@abc.com',
        phone: '9187231237'
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .expect('{"success":true,"message":"User creation successful"}')
  })
})

describe('GET /users', function () {
  it('list users', function () {
    return request(app)
      .get('/users')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect('{"success":true,"data":[{"id":1,"name":"User 1","phone":"9845098450","email":"abc@example.com","x":10,"y":20},{"id":2,"name":"User 2","phone":"9121212121","email":"xyz@example.com","x":20,"y":30},{"name":"xyz","email":"xyz@abc.com","phone":"9187231237","id":3}]}')
  })
})