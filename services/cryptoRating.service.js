const CryptoRating = require('../models/cryptoRating.model')
const Coin = require('../models/coin.model')

class cryptoRatingService {

    async init() {
        console.log("start init cryptoRating")
        const coins = await Coin.find({})
        for (let coinsKey in coins) {
            try{
                if(coins[coinsKey].name && coins[coinsKey]._id && coins[coinsKey].classification){
                    const candidate = await CryptoRating.findOne({name: coins[coinsKey].name})
                    if(!candidate){
                        await CryptoRating.create({name: coins[coinsKey].name, coinId: coins[coinsKey]._id, classification: coins[coinsKey].classification})
                    }
                }
            }catch (e) {
                console.log("error init on", coins[coinsKey])
            }
        }
        console.log("cryptoRating inited")
    }

}

module.exports = new cryptoRatingService()
