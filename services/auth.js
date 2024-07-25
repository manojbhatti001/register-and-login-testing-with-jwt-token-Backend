const jwt = require('jsonwebtoken')
const secret = process.env.ACCESS_TOKEN_SECRET;
console.log('serect key in auth.js',secret)
const secretkey = 'manoj@bhatti';

function setUser(user) {
    const payload = {
        userID: user.id,
        username: user.username,
    
    };
    return jwt.sign(payload, secretkey);
}

function getUser(token) {
    if (!token) return null;
    return jwt.verify(token, secretkey);
}

module.exports = {
    setUser,
    getUser,
}