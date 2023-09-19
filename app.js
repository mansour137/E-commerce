const express = require('express');
const app =express();
const path = require("path");
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const AppError = require('./utilis/appError')
const userRoutes = require('./Routes/userRoutes');
const cartRoutes = require('./Routes/cartRoutes');
const productRoutes = require('./Routes/productRoutes');
const orderRoutes = require('./Routes/orderRoutes')
const categoryRoutes = require('./Routes/categoryRoutes')
const reviewRoutes = require('./Routes/reviewRoutes')
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname , 'public','img','users')));

app.use('/api/v1/users' , userRoutes);
app.use('/api/v1/products' , productRoutes);
app.use('/api/v1/cart' , cartRoutes);
app.use('/api/v1/orders' ,orderRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/reviews',reviewRoutes);


app.all('*', (req, res, next) => {
    const error = new AppError(`Can't find ${req.originalUrl} on this server!`, 404);
    next(error);
});


const handelJWTToken = ()=>{
    return new AppError('Please , login!' , 401);
}

app.use((err, req, res, next) => {
    if (err.name === 'JsonWebTokenError') {
        const jwtError = handelJWTToken();
        return res.status(jwtError.statusCode).json({
            message: jwtError.message,
        });
    }

    res.status(err.statusCode || 500).json({
        status: err.status || 'error',
        error: err,
        message: err.message,
        stack: err.stack,
    });
});

module.exports = app