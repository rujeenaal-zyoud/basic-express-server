'use strict';
//here we export the all moudle under errorHandler in SERVER file     
module.exports = (err, req, res, next) => {
    // sometimes error come in as an object or string
    //the massage come from therw error object that we created in server.js
    const error = err.message ? err.message : err;

    res.status(500).json({
        error})
}