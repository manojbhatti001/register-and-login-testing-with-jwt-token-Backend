const jwt = require('jsonwebtoken');
require('dotenv').config();
const secr = process.env.ACCESS_TOKEN_SECRET;
// console.log("secret key in validation", secr)

const validation = async(req , res, next) => {
    // console.log('received request to validate token');
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, secr)
        next();
        }catch(err){
            // console.log('error in validation', err)
        }
    };

    module.exports = validation;






    
