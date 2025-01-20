const express = require('express');
const dbConnect = require('./config/db_connection');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const cors = require('cors'); // Import cors middleware
const authRouter = require('./routes/authRoutes');
const productRouter = require('./routes/productRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const orderRouter = require('./routes/orderRoutes');
const checkoutRouter = require('./routes/checkoutRoutes');
const uploadRouter = require('./routes/uploadRoutes');
const cartRouter = require('./routes/cartRoutes');
const path = require('path');

const cookieParser = require('cookie-parser');
dbConnect();
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Enable CORS for all routes and origins
app.use(cors({
  origin: '*', // Replace '*' with specific origins (e.g., ['http://example.com']) in production
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true // Enable cookies and credentials (set to false if not needed)
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));

const api = process.env.API_URL;

app.use(`${api}/user`, authRouter);
app.use(`${api}/product`, productRouter);
app.use(`${api}/category`, categoryRouter);
app.use(`${api}/order`, orderRouter);
app.use(`${api}/checkout`, checkoutRouter);
app.use(`${api}/upload`, uploadRouter);
app.use(`${api}/cart`, cartRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
