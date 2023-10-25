const mongoose = require('mongoose');
require('dotenv').config();
const Logger = require('../utils/logger');
const logger = Logger.getInstance()

const connect = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        logger.info('Connected to database');
    }).catch((err) => {
        logger.error('Error connecting to database', err);
    });
}

module.exports = connect;