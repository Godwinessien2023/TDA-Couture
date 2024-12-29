const jwt = require('./jwToken');

const refreshToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: '3d' });
};

module.exports = {refreshToken};