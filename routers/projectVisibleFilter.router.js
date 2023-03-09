const Router = require('express')
const router = new Router()
const projectVisibleFilterController = require('../controllers/projectVisibleFilter.controller')
const authMiddleware = require('../middlewares/authMidlleware');

router.get('/create', authMiddleware, projectVisibleFilterController.create)
router.get('/find', projectVisibleFilterController.find)
router.put('/redact', authMiddleware, projectVisibleFilterController.redact)

module.exports = router