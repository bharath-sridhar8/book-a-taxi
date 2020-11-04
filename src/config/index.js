const path = require('path')
const dotenv = require('dotenv')
dotenv.config({ path: path.join(__dirname, '../../.env') })

module.exports = {
  port: process.env.PORT || 3000,
  mysql: {
    username: process.env.MYSQL_USERNAME || "",
    pwd: process.env.MYSQL_USERNAME || "",
    port: process.env.MYSQL_USERNAME || "",
    database: process.env.MYSQL_USERNAME || ""
  },
  mongo: {
    username: process.env.MONGO_USERNAME || "",
    pwd: process.env.MONGO_USERNAME || "",
    port: process.env.MONGO_USERNAME || "",
    database: process.env.MONGO_USERNAME || ""
  },
  smtp: {}
}