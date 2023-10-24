const jwt = require('jsonwebtoken');
require('dotenv').config();
const Logger = require('../utils/Logger');
const logger = Logger.getInstance();

isConnected = (req, res, next) => {
    if (!req.headers.authorization) {
        logger.error(`User request to ${req.method} ${req.originalUrl} without token`);
        return res.status(403).json({message: 'You are not connected'})
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken._id;
        req.auth = {
            userId: userId
        };
        logger.info(`User : ${userId} request to ${req.method} ${req.originalUrl}`);
        next();
    } catch(error) {
        console.log(error)
        res.status(401).json({ message: 'Invalid request!' });
    }
};

module.exports = isConnected;