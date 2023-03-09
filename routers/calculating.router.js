const Router = require('express')
const router = new Router()
const calculatingController = require('../controllers/calculating.controller')
const authMiddleware = require('../middlewares/authMidlleware');

router.get('/getTop', calculatingController.getTop)


module.exports = router