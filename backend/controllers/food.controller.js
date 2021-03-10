const errorHandler = require('../utils/errorHandler.util')
const config = require('../config/keys')
const axios = require('axios')


module.exports.getData = async(req,res) => {
    try{
        let options = {
            url:`${config.usdaUrl}/v1/foods/list?api_key=${config.usda}`,
            method: 'get'
        }

       const getList = await axios(options)
        res.status(200).send(getList.data)
        }
    catch(e){
        res.status(500).json(e)
        errorHandler(res, e)  
    }
}

module.exports.getFoodById = async(req,res) => {
    try{
        let options = {
            url:`${config.usdaUrl}/v1/food/${req.params.fcid}?api_key=${config.usda}`,
            method:'get'
        }

        const getProduct = await axios(options)
        res.status(200).send(getProduct.data)
    }
    catch(e){
        res.status(500).json(e)
        errorHandler(res, e)  
    }
}