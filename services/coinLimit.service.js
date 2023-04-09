const CoinLimit = require('../models/coinLimit.model')

class coinLimitService {

    async findAll() {
        return await CoinLimit.find()
    }

    async update(limitName, data) {
        if((limitName === 'upper limit' || limitName === 'lower limit') && data.name === undefined){
            console.log(data)
            const newDate = await CoinLimit.findOneAndUpdate({name: limitName}, data)
            console.log(newDate)
            return newDate
        }
        throw ApiError.badRequest()

    }

}

module.exports = new coinLimitService()
