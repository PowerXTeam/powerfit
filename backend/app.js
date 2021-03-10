const express = require("express");
const passport = require('passport')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

// Routes
const authRoutes = require('./routes/auth.routes')
const usersRoutes = require('./routes/users.routes')
const txRoutes = require('./routes/tx.routes')
const foodRoutes = require('./routes/food.routes')

const keys = require('./config/keys')
const app = express()

// Connect to DB
mongoose.connect(keys.mongoURI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log('Connected to DB'))
.catch(err=>console.err(err))

//App init
app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/food', foodRoutes)
// app.use('/api/categories', catsRoutes)
// app.use('/api/posts', postsRoutes)
app.use('/api/tx', txRoutes)
// app.use('/api/comments', commentsRoutes)


module.exports = app