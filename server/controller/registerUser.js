const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');

async function registerUser(req,res){
    try{
        const {name, email, password, profile_pic} = req.body;
        
        const checkEmail = await User.findOne({email});
        if(checkEmail){
            return res.status(400).json({
                message: 'Email already exists',
                error: true
            });
        }
       
        //password into hashpassword
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const payload = {
            name,
            email,
            profile_pic,
            password: hashPassword
            
        }
        const user  = new UserModel(payload);
        const userSave = await user.save();
        
        return res.status(201).json({
            message: 'User created successfully',
            data : userSave,
            success : true
            
        });

    }catch(error){
        return res.status(500).json({
            message: 'Server Error' || error,
            error : true
    });
    }
}



module.exports = registerUser;