const Router = require('express')
const router = new Router()
const projectBlureFilterController = require('../controllers/projectBlureFilter.controller')
const authMiddleware = require('../middlewares/authMidlleware');

router.get('/create', authMiddleware, projectBlureFilterController.create)
router.get('/find', projectBlureFilterController.find)
router.put('/redact', authMiddleware, projectBlureFilterController.redact)

module.exports = router