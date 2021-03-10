const mongoose = require('mongoose')

const txSchema = new mongoose.Schema({
    to:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:false
    },
    value:{
        type: Number,
        required:true
    },
    coin:{
        type: String,
        required: true
    },
    created_at:{
        type: String
    },
    hash:{
        type: String
    },
    comission:{
        type: Number
    },
    payload:{
        type: String
    },
    private_key:{
        type: String
    },
    public_key:{
        type:String
    }
})

module.exports = mongoose.model('txs', txSchema)