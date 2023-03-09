const ApiError = require('../errors/api.error')
const projectVisibleFilterService = require('../services/projectVisibleFilter.service')

class projectVisibleFilterController {
    async create(req, res, next) {
        try {
            const projectVisibleFilter = await projectVisibleFilterService.create()
            return res.json(projectVisibleFilter)
        } catch (e) {
            next()//e
        }
    }

    async find(req, res, next) {
        try {
            const projectVisibleFilter = await projectVisibleFilterService.find()

            return res.json(projectVisibleFilter)
        } catch (e) {
            next()//e
        }
    }

    async redact(req, res, next) {
        try {
            const {projectVisibleFilterData} = req.body

            const projectVisibleFilter = await projectVisibleFilterService.redact(projectVisibleFilterData)

            return res.json(projectVisibleFilter)
        } catch (e) {
            next()//e
        }
    }

}

module.exports = new projectVisibleFilterController()