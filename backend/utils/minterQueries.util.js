const axios = require('axios')
module.exports = (params, req, res) => {

    const url = `http://api.minter.one/v2/${params.endpoint}/${params.address}`

    let options = {
        url: url,
        method: params.method
    }

    axios(options)
    .then(res => {
       return res.status(200).json(res)
    })
}