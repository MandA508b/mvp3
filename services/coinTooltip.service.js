const CoinTooltip = require('../models/coinTooltip.model')
const ApiError = require(`../errors/api.error`)

class coinTooltipService {
    async create() {
        try{
            const candidate = await CoinTooltip.findOne()
            if (candidate) {
                throw ApiError.preconditionFailed()
            }
            const coinTooltip = await CoinTooltip.create({})

            return coinTooltip
        }catch (e) {
            console.log("err: ", e)
        }
    }

    async find() {
        return await CoinTooltip.findOne()
    }


    async redact(coinTooltipData) {
        const coinTooltip = await CoinTooltip.findOne()
        if (coinTooltip == undefined) {
            const newCoinTooltip = await this.create()
        }
            const updatedCoinTooltip = await CoinTooltip.findOneAndUpdate({}, {...coinTooltipData});

            return  updatedCoinTooltip


    }

}

module.exports = new coinTooltipService()
