const Tx = require('../models/tx.model')
const errorHandler = require('../utils/errorHandler.util')
const config = require('../config/keys')
const moment = require('moment')
const {Minter, TX_TYPE} = require("minter-js-sdk");
const date = moment().format('DD.MM.YYYY-HH:mm:ss')

const minter = new Minter({
    apiType:'node',
    baseURL: config.nodeURL
})

module.exports.sellCoins = async (req,res) => {
    try{
        const pkey = req.body.private_key
        const tx = {
            type: TX_TYPE.SELL,
            data: {
                coinToSell: req.body.coin_sell,
                coinToBuy: req.body.coin_buy,
                valueToSell: req.body.value
            }
        }

        const letTx = await minter.replaceCoinSymbol(tx)
        .then((newTxParams)=>{
            return minter.postTx(tx, {privateKey: pkey})
        })
         res.status(201).json(letTx)
    }
    catch(e){
        res.status(500).json(e)
        errorHandler(res, e)    
    }
}


module.exports.getTransactionsByAddress = async (req,res) => {
    try {
        const txs = await Tx.find({
            from: req.params.address
        })
        console.log(req.params.address)
        res.status(200).json(txs)
    }
    catch(e){
        res.status(500).json(e)
        errorHandler(res, e)
    }
}

module.exports.getBalance = async (req,res) => {
    try {
        
        const balance = await minter.getBalance(req.body.from)

        res.status(201).json(balance)

    }
    catch(e){
        res.status(500).json(e)
        errorHandler(res, e)
    }
}

module.exports.sendTx = async (req,res) => {
    const txNonce = await minter.getNonce(req.body.from).then(nonce => {return nonce})

    try{
        const tx = {
            nonce: txNonce,
            chainId: 1,
            type: TX_TYPE.SEND,
            data:{
                to: req.body.to,
                value: Number(req.body.value),
                coin: req.body.coin
            },
            gasCoin: req.body.coin,
            gasPrice: 1,
            payload: req.body.payload      
        }
        
        const pkey = req.body.private_key
    
        const letTx = await minter.replaceCoinSymbol(tx)
        .then((newTxParams)=>{
            return minter.postTx(tx, {privateKey: pkey})
        })
        
        res.status(201).json({
            status:'success',
            hash: letTx.hash
        })

        if(res.status(201)){
            const newTxToDB = new Tx({
                to: req.body.to,
                from: req.body.from,
                payload: req.body.payload,
                value: req.body.value,
                coin: req.body.coin,
                hash: letTx.hash,
                type: 'send_coin'
            })

            newTxToDB.save()
        }
        else{
            res.status(500).json({
                status:'internal_error'
            })
        }
    }
    catch(e){
        res.status(500).json(e)
        errorHandler(res, e)
    }
}

module.exports.delegateCoin = async(req,res)=>{
    const tx = {
        type: TX_TYPE.DELEGATE,
        data: {
            publicKey: req.body.public_key,
            coin: req.body.coin, // BIP id
            stake: Number(req.body.value)
        },
    }
    const pkey = req.body.private_key


    const letTx = await minter.replaceCoinSymbol(tx)
        .then((newTxParams)=>{
            return minter.postTx(tx, {privateKey: pkey})
        })
    
        res.status(201).json({
            status:'success',
            hash: letTx.hash
        })

        if(res.status(201)){
            const newTxToDB = new Tx({
                public_key: req.body.public_key,
                coin: req.body.coin,
                value: req.body.value,
                hash: letTx.hash,
                type: 'delegate_coin'
            })

            newTxToDB.save()
        }
        else{
            res.send(500).json({
                status:'internal_error'
            })
        }


}

module.exports.unboundCoin = async(req,res)=>{}

module.exports.getAll = async(req,res) => {
    try{
        const filter = {}
        const txs = await Tx.find(filter)

        res.status(200).json(txs)
    }
    catch(e){
        errorHandler(res, e)
    }
}