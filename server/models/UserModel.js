const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true  // removes whitespace from both ends of a string
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: [true, "Email already exists"],
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    profile_pic: {
        type : String,
        default : ""
    }},
    {
        timestamps: true
    });

    const UserModel = mongoose.model('User', UserSchema);

    module.exports = UserModel;