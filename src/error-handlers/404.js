'use strict';
//here we export the all moudle under notFounderHandler in SERVER file     
module.exports = (req, res) => {
    res.status(404).json({
        error: 'Not Found'
    })
}