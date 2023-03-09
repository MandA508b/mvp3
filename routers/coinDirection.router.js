const Router = require('express')
const router = new Router()
const coinDirectionController = require('../controllers/coinDirection.controller')
const authMiddleware = require('../middlewares/authMidlleware');

router.get('/create', authMiddleware, coinDirectionController.create)
router.get('/find', coinDirectionController.find)
router.put('/redact', authMiddleware, coinDirectionController.redact)

module.exports = router