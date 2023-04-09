const Router = require('express')
const router = new Router()
const excelValueLimitController = require('../controllers/excelValue.controller')
const authMiddleware = require('../middlewares/authMidlleware');

router.post('/create',authMiddleware, excelValueLimitController.create)
router.put('/update',authMiddleware, excelValueLimitController.update)
router.get('/findAll', excelValueLimitController.findAll)

module.exports = router