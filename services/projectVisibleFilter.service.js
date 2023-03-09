const ProjectVisibleFilter = require('../models/projectVisibleFilter.model')
const ApiError = require(`../errors/api.error`)

class projectVisibleFilterService {
    async create() {
        try{
            const candidate = await ProjectVisibleFilter.findOne()
            if (candidate) {
                throw ApiError.preconditionFailed()
            }
            const projectVisibleFilter = await ProjectVisibleFilter.create({})

            return projectVisibleFilter
        }catch (e) {
            console.log("err: ", e)
        }
    }

    async find() {
        return await ProjectVisibleFilter.findOne()
    }


    async redact(projectVisibleFilterData) {
        const projectVisibleFilter = await ProjectVisibleFilter.findOne()
        if (projectVisibleFilter == undefined) {
            const newProjectVisibleFilter = await this.create({})
        }
        const updatedProjectVisibleFilter = await ProjectVisibleFilter.findOneAndUpdate({}, {...projectVisibleFilterData});

        return  updatedProjectVisibleFilter


    }

}

module.exports = new projectVisibleFilterService()
