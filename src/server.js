const config = require("./config/index");
const port = config.port;
const logger = require("./config/winston");
const app = require("./app");

app.listen(port, () => {
  logger.info(`Example app listening at http://localhost:${port}`);
});