const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');

async function checkPassword(req,res) {
    try{
        const {password, userId} = req.body;
        // Check if email already exists
        const user  = await UserModel.findById(userId);

        const verifyPassword = await bcrypt.compare(password, user.password);

        // Create a token
        const tokenData = {
            id: user._id,
            email: user.email,

        }
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: '1h'});

        const cookieOption = {
            http: true,
            secure : true
        }

        return res.cookie('token',cookieOption).status(200).json({
            message: verifyPassword ? 'Password verified successfully' : 'Password does not match',
            success: verifyPassword,
        });
    }
    catch(error){
        console.error('Error in checkPassword:', error); // Log error for debugging
        return res.status(500).json({
            message: 'Server Error',
            error : true,
    });
    }
}
module.exports = checkPassword;