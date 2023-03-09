const Router = require('express')
const router = new Router()
const filterCalculatingController = require('../controllers/filterCalculating.controller')
const authMiddleware = require('../middlewares/authMidlleware');

router.get('/create',authMiddleware, filterCalculatingController.create)
router.get('/find', authMiddleware, filterCalculatingController.find)
router.put('/redact', filterCalculatingController.redact)

module.exports = router