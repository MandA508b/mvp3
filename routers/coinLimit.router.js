const Router = require('express')
const router = new Router()
const coinLimitController = require('../controllers/coinLimit.controller')
const authMiddleware = require('../middlewares/authMidlleware');

router.get('/findAll', coinLimitController.findAll)

module.exports = router