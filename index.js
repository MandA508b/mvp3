require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./routers/index')
const errorMiddleware = require('./middlewares/errorHandlingMiddleware')
const ApiError = require('./errors/api.error')
const user = require('./services/user.service')
const cryptoRatingService = require('./services/cryptoRating.service')
const calculationService = require('./services/calculating.service')


const PORT = 5000 || process.env.PORT

const app = express()

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'https://cryptoon.online']
}))
app.use(cookieParser())
app.use('/', router)
app.use(errorMiddleware)

async function start(){
    const admin = await user.firstUser()
    await cryptoRatingService.init()
    try{
        app.listen(PORT, ()=>{

            console.log(`server started on PORT: ${PORT}`)
        })
    }catch (e){
         throw  ApiError.internal('Непередбачувана помилка!')
    }
    calculationService.calculate()

}

start()



