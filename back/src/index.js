const path = require('path');
const glob = require('glob');
const express = require('express');
require('dotenv').config();
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 9000;
const Logger = require('./utils/logger');
const logger = Logger.getInstance()

require('./db')();

app.use(express.json());
app.use(cookieParser())
app.use(cors())

const routes = glob.sync('./src/**/*.router.js');

routes.forEach((route) => {
    import(path.resolve(route)).then((router) => {
        const routeName = route.split('/').pop().replace('.router.js', '');
        app.use(`/api/${routeName}`,router.default);
    })
});

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});