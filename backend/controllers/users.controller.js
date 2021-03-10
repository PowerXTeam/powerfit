const User = require('../models/user.model')
const errorHandler = require('../utils/errorHandler.util')

module.exports.getUsers = async (req,res) => {
    try {
       
        const user = await User.find({}).select('username name midname avatar email address type')

        res.status(200).json(
           user
        )
    }
    catch (e) {
        errorHandler(res, e)
    }
}

module.exports.exportSeedPhrase = async (req,res) =>{
    try{
        const user = await User.find({_id:req.params.id})
        res.status(200).json({seed: user[0].mnemonic})
    }
    catch(e){
        errorHandler(res, e)
    }
}

// User types 

module.exports.setType = async (req,res) => {
    try{
        const user = await User.findOneAndUpdate(
             {_id: req.params.id},
             {$set:{
                type: req.body.type
             }},
             {new:true}
            )

        res.status(200).json({
             id:user._id,
            email:user.email,
            username:user.username,
            name: user.name,
            midname: user.midname,
            description: user.description,
            avatar: user.avatar,
            type:user.type,
            address:user.address,
            created_at:user.created_at
        })
    }
    catch(e){
         errorHandler(res,e)
    }
}

module.exports.getUser = async (req,res) => {
    try{
        const user = await User.findById(
            {_id:req.params.id}
        )

        res.status(200).json({
            id:user._id,
            email:user.email,
            username:user.username,
            name: user.name,
            midname: user.midname,
            description: user.description,
            avatar: user.avatar,
            type:user.type,
            address:user.address,
            created_at:user.created_at
        })
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.updateUser = async (req,res) => {
    try{
        const user = await User.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new:true}
        )
        res.status(201).json({
            id:user._id,
            email:user.email,
            username:user.username,
            description: user.description,
            name: user.name,
            midname: user.midname,
            avatar: user.avatar,
            type:user.type,
            address:user.address,
            created_at:user.created_at
        })
    }
    catch(e){
        errorHandler(res, e)
    }
}


module.exports.deleteUser = (req,res) => {
    res.status(200).json({
        deleteUser: 'ok',
        id:req.params.id
    })
}
