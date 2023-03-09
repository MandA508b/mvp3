const FilterCalculating = require('../models/filterCalculating.model')
const calculationService = require('./calculating.service')

class filterCalculatingService {

    async create() {
        return await FilterCalculating.create({})
    }

    async find() {
        return await FilterCalculating.findOne()
    }


    async redact(filterCalculatingData) {
        try{
            const filterCalculating = await FilterCalculating.findOne()
            console.log({filterCalculating})
            const newFilterCalculating = await FilterCalculating.findByIdAndUpdate(filterCalculating._id, {...filterCalculatingData})
            calculationService.calculate()
            return newFilterCalculating



        }catch (e) {
            console.log("error: ", e)
            return await FilterCalculating.findOne()
        }
    }

}

module.exports = new filterCalculatingService()
