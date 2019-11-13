const {Logger, FileLogger} = require('simple.logger');

const optionalOptions = {
    level: 'info',
    prefix: '',
    outStream: [process.stdout, process.stderr],
    showTime: true,
    shortTime: false,
    showChannel: true,
    colored: true
};
const LoggerCreator = process.env.NODE_ENV === "production" ? FileLogger : Logger;
module.exports = new LoggerCreator(optionalOptions);
