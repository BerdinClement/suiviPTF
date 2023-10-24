class Logger {
    static instance;
    constructor() { }

    static getInstance () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    format (message, type) {
        return `[${new Date().toLocaleString()}] [${type}] ${message}`;
    }

    info (message) {
        console.log(this.format(message, 'INFO'));
    }

    error (message) {
        console.error(this.format(message, 'ERROR'));
    }

    warn (message) {
        console.warn(this.format(message, 'WARN'));
    }

}

module.exports = Logger;