let data = [
  {
    id: 1,
    name: "User 1",
    phone: "9845098450",
    email: "abc@example.com",
    x: 10,
    y: 20,
  },
  {
    id: 2,
    name: "User 2",
    phone: "9121212121",
    email: "xyz@example.com",
    x: 20,
    y: 30,
  },
];
const validate = () => { return {
  valid: true
} };
module.exports = {
  data: data,
  validate: validate, 
  nextId: 3
};