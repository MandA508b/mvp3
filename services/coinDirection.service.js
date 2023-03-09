const CoinDirection = require('../models/coinDirection.model')

class coinDirectionService {

    async create() {
        return await CoinDirection.create({})
    }

    async find() {
        return await CoinDirection.findOne()
    }


    async redact(coinDirectionData) {
        try{
            const coinDirection = await CoinDirection.findOne()
            const updated = await CoinDirection.findByIdAndUpdate(coinDirection._id, {...coinDirectionData})
            return updated
        }catch (e) {
            console.log("error: ", e)
            return await CoinDirection.findOne()
        }
    }

}

module.exports = new coinDirectionService()
