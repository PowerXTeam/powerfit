const express = require("express")
const controller = require('../controllers/tx.controller')
const router = express.Router()

router.post('/send', controller.sendTx)
router.post('/sell', controller.sellCoins)
router.post('/delegate', controller.delegateCoin)
router.get('/balance', controller.getBalance)
router.get('/',controller.getAll)
router.get('/:address',controller.getTransactionsByAddress)

module.exports = router