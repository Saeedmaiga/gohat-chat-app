const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    text: {
        type: String,
        default: ''
    
    },
    ImageUrl : {
        type : String,
        default : ''
    },
    videoUrl : {
        type : String,
        default : ''
    },
    seen :{
        type : Boolean,
        default : false
    }
}, {
    timestamps : true
});


const ConversationSchema = new mongoose.Schema({
    sender :{
        type : mongoose.Schema.ObjectId,
        required : true,
        ref : 'User'
    },
    receiver : {
        type : mongoose.Schema.ObjectId,
        required : true,
        ref : 'User'
    },
    message :[ {
        type : mongoose.Schema.ObjectId,
        required : true,
        ref : 'Message'
    }],
}, {
    timestamps : true
});

const ConversationModel = mongoose.model('Conversation', ConversationSchema);
const MessageModel = mongoose.model('Message', MessageSchema);

module.export = {
    ConversationModel, 
    MessageModel};