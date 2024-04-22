const levels = {
    error: { color: "\x1b[31m", name: "error" },
    warn: { color: "\x1b[33m", name: "warn" },
    info: { color: "\x1b[32m", name: "info" },
    debug: { color: "\x1b[34m", name: "debug" },
    default: { color: "\x1b[36m", name: "default" }
};

const sendLog = (message, level = "default") => {
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");
    const time = `${hours}:${minutes}:${seconds}`;

    const selectedLevel = levels[level] || levels.default;
    const { color, name: levelName } = selectedLevel;

    console.log(`[\x1b[36m${time}\x1b[0m] ${color}[${levelName}]\x1b[0m \x1b[35m>\x1b[0m ${message}`);
};
