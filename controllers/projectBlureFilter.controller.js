const ApiError = require('../errors/api.error')
const projectBlureFilterService = require('../services/projectBlureFilter.service')

class projectBlureFilterController {
    async create(req, res, next) {
        try {
            const projectBlureFilter = await projectBlureFilterService.create()
            return res.json(projectBlureFilter)
        } catch (e) {
            next()//e
        }
    }

    async find(req, res, next) {
        try {
            const projectBlureFilter = await projectBlureFilterService.find()

            return res.json(projectBlureFilter)
        } catch (e) {
            next()//e
        }
    }

    async redact(req, res, next) {
        try {
            const {projectBlureFilterData} = req.body

            const projectBlureFilter = await projectBlureFilterService.redact(projectBlureFilterData)

            return res.json(projectBlureFilter)
        } catch (e) {
            next()//e
        }
    }

}

module.exports = new projectBlureFilterController()