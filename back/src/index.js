const express = require('express');
require('dotenv').config();
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 9000;

require('./db')();

app.use(express.json());
app.use(cookieParser())
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});