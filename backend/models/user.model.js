const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type: String, 
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    name: {
        type:"String"
    },
    midname: {
        type: "String"
    },
    description:{
        type: "String"
    },
    phone:{
        type: "String"
    },
    username:{
        type: String, 
        required: true,
    },
    type:{
        type:Number,
        required:true
    },
    avatar:{
        type: String,
        require:false
    },
    address:{
        type: String,
        required:false
    },
    mnemonic:{
        type:String,
        required:true
    },
    created_at:{
        type:String,
        required:false
    },
    private_key:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('users',userSchema)