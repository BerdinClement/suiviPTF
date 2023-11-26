const jwt = require('jsonwebtoken');
require('dotenv').config();
const Logger = require('../utils/Logger');
const logger = Logger.getInstance();

isTutor = (req, res, next) => {
    if (!req.headers.authorization) {
        logger.error(`User request to ${req.method} ${req.originalUrl} without token`);
        return res.status(403).json({message: 'You are not connected'})
    }
    try {
        const token = req.headers.authorization.split(' ')[1].replace(/"/g, '');
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken._id;
        if (decodedToken.type !== 'tutor') {
            logger.error(`User : ${decodedToken.email} request to ${req.method} ${req.originalUrl} without tutor token`);
            return res.status(401).json({ message: 'Invalid request!' })
        }
        req.auth = {
            userId: userId
        };
        next();
    } catch(error) {
        logger.error(`${req.method} ${req.originalUrl} ${error}`)
        res.status(401).json({ message: 'Invalid request!' });
    }
};

module.exports = isTutor;