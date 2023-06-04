const errHandler = (error, req, res, next) => {
    const message = error.message;
    const status = error.statusCode || 500;
    res.status(status).json({
        message: message
    });
}

module.exports = errHandler;