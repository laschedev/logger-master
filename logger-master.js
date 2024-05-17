/**
 * A logging module that supports different log levels and colors.
 * @module the-logger-master
 */

/**
 * Log levels and their corresponding colors.
 * @constant {Object} levels
 * @property {Object} error - Error log level.
 * @property {string} error.color - ANSI escape code for red color.
 * @property {string} error.name - Name of the log level.
 * @property {Object} warn - Warning log level.
 * @property {string} warn.color - ANSI escape code for yellow color.
 * @property {string} warn.name - Name of the log level.
 * @property {Object} info - Info log level.
 * @property {string} info.color - ANSI escape code for green color.
 * @property {string} info.name - Name of the log level.
 * @property {Object} debug - Debug log level.
 * @property {string} debug.color - ANSI escape code for blue color.
 * @property {string} debug.name - Name of the log level.
 * @property {Object} default - Default log level.
 * @property {string} default.color - ANSI escape code for cyan color.
 * @property {string} default.name - Name of the log level.
 */
const levels = {
    error: { color: "\x1b[31m", name: "error" },
    warn: { color: "\x1b[33m", name: "warn" },
    info: { color: "\x1b[32m", name: "info" },
    debug: { color: "\x1b[34m", name: "debug" },
    default: { color: "\x1b[36m", name: "default" }
};

/**
 * Logs a message with the specified log level.
 * @function sendLog
 * @param {string} message - The message to log.
 * @param {string} [level="default"] - The log level (error, warn, info, debug, default).
 * @returns {void}
 */
const sendLog = (message, level) => {
    const currentTime = new Date().toLocaleTimeString(); // get the current time
    const { color, name: levelName } = levels[level] || levels.default; // get the level
    console.log(`[\x1b[36m${currentTime}\x1b[0m] ${color}[${levelName}]\x1b[0m \x1b[35m>\x1b[0m ${message}`); // send the log message
};

module.exports = sendLog;
