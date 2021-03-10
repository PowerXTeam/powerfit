const express = require("express")
const controller = require('../controllers/users.controller')
const router = express.Router()
const passport = require('passport')

router.get('/',controller.getUsers)
router.get('/:id', controller.getUser)
router.patch('/:id/type', controller.setType)
router.get('/:id/seed',passport.authenticate('jwt',{session:false}), controller.exportSeedPhrase)
router.patch('/:id', passport.authenticate('jwt',{session:false}), controller.updateUser)
router.delete('/:id',passport.authenticate('jwt',{session:false}),  controller.deleteUser)

module.exports = router