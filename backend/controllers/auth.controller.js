const bcrypt = require('bcryptjs')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler.util')
const minterWallet = require('minterjs-wallet')
const moment = require('moment')
const date = moment().format('DD.MM.YYYY-HH:mm:ss')

module.exports.login = async (req, res) => {
    const candidate = await User.findOne({ email: req.body.email })

    if (candidate) {
        // user_exists
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)

        if (passwordResult) {
            // generate token, passwords compared
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.jwt, { expiresIn: 60 * 60 })

            res.status(200).json({
                token: `Bearer ${token}`,
                user: {
                    id:candidate._id,
                    email:candidate.email,
                    username:candidate.username,
                    name: candidate.name,
                    midname: candidate.midname,
                    avatar: candidate.avatar,
                    address:candidate.address,
                    description:candidate.description,
                    type:candidate.type,
                    created_at:candidate.created_at,
                    private_key: candidate.private_key
                }
            })
        } else {
            // Error: password_incorrect
            res.status(401).json({ msg: 'password_incorrect' })
        }
    } else {
        //user_not_exists
        res.status(404).json({ msg: 'not_found' })
    }
}

module.exports.register = async (req, res) => {
    const candidate = await User.findOne({
        email: req.body.email
    })

    if (candidate) {
        // User exists, retrieve error
        res.status(409).json({
            msg: 'email_exist'
        })
    } else {
        //Create user
        const salt = bcrypt.genSaltSync(10)

        const password = req.body.password
        const wallet = minterWallet.generateWallet()

        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt),
            username: req.body.username,
            name: '',
            midname: '',
            description: '',
            type: req.body.type,
            address: wallet.getAddressString(),
            mnemonic: wallet._mnemonic,
            private_key: wallet.getPrivateKeyString(),
            created_at: moment().format('DD.MM.YYYY-HH:mm:ss'),
            avatar: 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'

        })

        try {
            await user.save()
            res.status(201).json({
                id: user._id,
                email: user.email,
                username: user.username,
                type: user.type,
                address: user.address,
                created_at: user.created_at,
                private_key: user.private_key
            })
        }
        catch (e) {      
            errorHandler(res, e)
        }

    }
}

module.exports.reset = (req, res) => {
    res.status(200).json({
        reset: true
    })
}