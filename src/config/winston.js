const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint, colorize, simple } = format;
const logger = createLogger({});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: combine(
        colorize(),
        timestamp(),
        simple()
      ),
      level: 'debug'
    })
  );
} else {
  logger.add(
    new transports.File({
      filename: "../logs/error.log",
      format: combine(
        label({ label: process.env.SERVER_LABEL || 'app_server' }),
        timestamp(),
        prettyPrint()
      ),
      level: process.env.LOG_LEVEL || "warn",
      maxsize: 5242880, // 5MB
      maxFiles: 5
    }))
  logger.add(
    new transports.Console({
      format: combine(
        label({ label: process.env.SERVER_LABEL || 'app_server'}),
        timestamp(),
        prettyPrint()
      ),
      level: process.env.LOG_LEVEL || 'info'
    })
  );
}

logger.stream = {
  write: function (message) {
    logger.info(message);
  },
};

module.exports = logger;
