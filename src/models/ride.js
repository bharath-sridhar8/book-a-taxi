let data = [
  {
    id: 1,
    user_id: 1,
    driver_id: 1,
    distance: 10,
    cost: 100,
    started_at: "2020-11-01T10:00:00",
    ended_at: "2020-11-01T10:30:00",
  },
  {
    id: 2,
    user_id: 2,
    driver_id: 1,
    distance: 8,
    cost: 82,
    started_at: "2020-11-01T11:00:00",
    ended_at: "2020-11-01T11:30:00",
  },
];

const validate = () => { return true };
module.exports = {
  data: data,
  validate: validate,
  nextId: 3
};