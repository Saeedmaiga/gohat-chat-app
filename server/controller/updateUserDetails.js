const getUserDetailsFromToken = require('../helpers/getUserDetaiksFromToken');
const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');


async function updateUserDetails(req, res){
    try{
        const token = req.cookies.token || "";

        const user = await getUserDetailsFromToken(token);

        const {name, profil_pic} = req.body;
        const updateUser = await UserModel.updateOne({_id : user._id}, {
            name, 
            profil_pic,
           })

        const userInformation = await UserModel.findById(user._id)
        
        return res.json({
            message : "User Details Updated",
            data : userInformation,
            success : true
        })

    }
    catch(error){
        console.error('Error in updateUserDetails:', error);
        return res.status(500).json({
            message : "Server Error",
            error : true
        })
    }
}

module.exports = updateUserDetails;