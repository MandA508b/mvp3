const ProjectBlureFilter = require('../models/projectBlureFilter.model')
const ApiError = require(`../errors/api.error`)

class projectBlureFilterService {
    async create() {
        try{
            const candidate = await ProjectBlureFilter.findOne()
            if (candidate) {
                throw ApiError.preconditionFailed()
            }
            const projectBlureFilter = await ProjectBlureFilter.create({})

            return projectBlureFilter
        }catch (e) {
            console.log("err: ", e)
        }
    }

    async find() {
        return await ProjectBlureFilter.findOne()
    }


    async redact(projectBlureFilterData) {
        const projectBlureFilter = await ProjectBlureFilter.findOne()
        if (projectBlureFilter == undefined) {
            const newProjectBlureFilter = await this.create({})
        }
        const updatedProjectBlureFilter = await ProjectBlureFilter.findOneAndUpdate({}, {...projectBlureFilterData});

        return  updatedProjectBlureFilter


    }

}

module.exports = new projectBlureFilterService()
