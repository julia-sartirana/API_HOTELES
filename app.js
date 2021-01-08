const express = require('express');
//const morgan = require('morgan');
const app = express();
const userRouter = require('./routes/userRoutes');
const hotelRouter = require('./routes/hotelRoutes');
const reviewRouter = require('./routes/reviewRoutes');

app.use(express.json());
//app.use(morgan('dev'));

app.use('/hotels', hotelRouter)
app.use('/users', userRouter);
app.use('/reviews', reviewRouter);

module.exports = app;