const {Logger: ConsoleLogger, FileLogger} = require('simple.logger');

const optionalOptions = {
    level: 'info',
    prefix: '',
    outStream: [process.stdout, process.stderr],
    showTime: true,
    shortTime: false,
    showChannel: true,
    colored: true
};
const Logger = process.env.NODE_ENV === "production" ? FileLogger : ConsoleLogger;
const logger = new Logger(optionalOptions);
module.exports = {logger};
