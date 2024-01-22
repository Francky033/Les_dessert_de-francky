const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3003

const { sequelize } = require('./db/sequelizeSetup')
app.use(express.json())
app.use(morgan('dev'))
app.get('/', (req, res) => {
    res.json('Hello World !')
})
const dessertRouter = require('./routes/dessertRoutes')
const userRouter = require('./routes/userRoutes')
const reviewRouter = require('./routes/reviewRoutes')
app.use('/api/dessert', dessertRouter)
app.use('/api/users', userRouter)
app.use('/api/reviews', reviewRouter)
app.use('/uploadedFiles', express.static(__dirname + '/uploadedFiles'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

