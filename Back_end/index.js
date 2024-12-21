const express = require('express');
const dbConnect = require('./config/db_connection');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRouter = require('./routes/authRoutes');
dbConnect();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const api = process.env.API_URL

app.use(`${api}/user`, authRouter);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

