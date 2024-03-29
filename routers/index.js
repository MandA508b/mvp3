const Router = require('express')
const router = new Router()
const userRouter = require('./user.router')
const coinRouter = require('./coin.router')
const filterRouter = require('./filter.router')
const coinDirectionRouter = require('./coinDirection.router')
const filterCalculatingRouter = require('./filterCalculating.router')
const calculatingRouter = require('./calculating.router')
const coinLimitRouter = require('./coinLimit.router')
const coinTooltipRouter = require('./coinTooltip.router')
const projectBlureFilterRouter = require('./projectBlureFilter.router')
const projectVisibleFilterRouter = require('./projectVisibleFilter.router')
const excelValueRouter = require('./excelValue.router')

router.use('/user', userRouter)
router.use('/coin', coinRouter)
router.use('/filter', filterRouter)
router.use('/coinDirection', coinDirectionRouter)
router.use('/filterCalculating', filterCalculatingRouter)
router.use('/calculating', calculatingRouter)
router.use('/coinLimit', coinLimitRouter)
router.use('/coinTooltip', coinTooltipRouter)
router.use('/projectBlureFilter', projectBlureFilterRouter)
router.use('/projectVisibleFilter', projectVisibleFilterRouter)
router.use('/excelValueRouter', excelValueRouter)

module.exports = router