const levels = {
    error: { color: "\x1b[31m", name: "error" },
    warn: { color: "\x1b[33m", name: "warn" },
    info: { color: "\x1b[32m", name: "info" },
    debug: { color: "\x1b[34m", name: "debug" },
    default: { color: "\x1b[36m", name: "default" }
};

const sendLog = (message, level) => {
    const { color, name: levelName } = levels[level] || levels.default;
    console.log(`[\x1b[36m${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\x1b[0m] ${color}[${levelName}]\x1b[0m \x1b[35m>\x1b[0m ${message}`);
};

module.exports = sendLog;
