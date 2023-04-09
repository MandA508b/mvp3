const Router = require('express')
const router = new Router()
const excelValueLimitController = require('../controllers/excelValue.conteoller')
const authMiddleware = require('../middlewares/authMidlleware');

router.post('/create',authMiddleware, excelValueLimitController.create)
router.put('/update',authMiddleware, excelValueLimitController.update)
router.get('/findAll', authMiddleware, excelValueLimitController.findAll)

module.exports = router