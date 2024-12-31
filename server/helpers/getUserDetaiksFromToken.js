const jwt = require('jsonwebtoken');

const getUserDetailsFromToken = async (token) => {
    if (!token) {
        return {
            message : "session out",
            loggedOut : true
        }
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET);

    const user = await UserModel.findById(decode.id);

    return user;
}

module.exports = getUserDetailsFromToken;