const { verify } = require("jsonwebtoken");
const UserModel = require('../models/UserModel');

async function checkEmail(req,res){
    try{
        const {email} = req.body;
        // Check if email already exists
        const checkEmail = await UserModel.findOne({email}).select('-password');
        
        if(!checkEmail){
            return res.status(400).json({
                message: 'Email does not exist',
                error: true
            });
        }
        return res.status(200).json({
            message: "Email verify successfully",
            sucess : true,
            data : checkEmail
        })
     }
     catch(error){
         console.error('Error in checkEmail:', error); // Log error for debugging
         return res.status(500).json({
             message: 'Server Error',
             error : true,
     });
     }

}
module.exports = checkEmail;