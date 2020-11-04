let data = [
  {
    id: 1,
    name: "Driver 1",
    phone: "9876543210",
    email: "drv1@example.com",
    lat: 12,
    long: 18,
    car_no: "KA02-5055",
    type: "SEDAN",
  },
  {
    id: 2,
    name: "Driver 2",
    phone: "9988776655",
    email: "drv2@example.com",
    lat: 15,
    long: 25,
    car_no: "KA02-9999",
    type: "HATCH",
  },
]

const validate = () => { return {
  valid: true
} };
module.exports = {
  data: data,
  validate: validate,
  nextId: 3
};