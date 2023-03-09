const CoinLimit = require('../models/coinLimit.model')

class coinLimitService {

    async findAll() {
        return await CoinLimit.find()
    }

}

module.exports = new coinLimitService()
