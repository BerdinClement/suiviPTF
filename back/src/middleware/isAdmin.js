const jwt = require('jsonwebtoken');
require('dotenv').config();
const Logger = require('../utils/Logger');
const logger = Logger.getInstance();

isAdmin = (req, res, next) => {
    if (!req.headers.authorization) res.status(403).json({message: 'You are not connected'})
    try {
        const token = req.headers.authorization.split(' ')[1].replace(/"/g, '');
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken._id;
        if(!decodedToken.admin) res.status(403).json({message: 'You are not an admin'})
        req.auth = {
            userId: userId
        };
        next();
    } catch(error) {
        logger.error(`${req.method} ${req.originalUrl} ${error}`)
        res.status(401).json({ message: 'Invalid request!' });
    }
};

module.exports = isAdmin;