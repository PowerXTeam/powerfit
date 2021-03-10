const express = require("express")
const controller = require('../controllers/food.controller')
const router = express.Router()

router.get('/list', controller.getData)
router.get('/:fcid', controller.getFoodById)

module.exports = router