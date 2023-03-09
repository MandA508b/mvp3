const Router = require('express')
const router = new Router()
const coinTooltipController = require('../controllers/coinTooltip.controller')
const authMiddleware = require('../middlewares/authMidlleware');

router.get('/create', authMiddleware, coinTooltipController.create)
router.get('/find', coinTooltipController.find)
router.put('/redact', authMiddleware, coinTooltipController.redact)

module.exports = router