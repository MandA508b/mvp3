const Coin = require('../models/coin.model')
const ApiError = require(`../errors/api.error`)
const CryptoRating = require('../models/cryptoRating.model')
const calculationService = require('./calculating.service')

class coinService {
    async search(text){
        text = text.toUpperCase()

        const coinsByName = await Coin.find( {
            name: {
                $regex: text
            }
        })

        text = text.split(' ')
        let newText = ""
        for (let textKey in text) {
            text[textKey] = text[textKey][0] +  text[textKey].slice(1).toLowerCase()
            newText += text[textKey] + ' '
        }
        newText = newText.slice(0, newText.length-1)
        const coinsByFullName = await Coin.find( {
            full_name: {
                $regex: newText
            }
        })
        let arr = [...coinsByName,...coinsByFullName]
        if(arr.length){
            arr = await this.deleteSearchDuplicate(arr)
        }
        return arr

    }

    async deleteSearchDuplicate(arr){
        function Compare( a, b ) {
            if ( a._id < b._id ){
                return -1;
            }
            if ( a._id > b._id ){
                return 1;
            }
            return 0;
        }
        arr.sort( Compare );
        let newArr =[]
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i].name !== arr[i+1].name){
                newArr.push(arr[i])
            }
        }
        if(arr.length === 1 || arr[arr.length - 1].name !== arr[arr.length - 2].name){
            newArr.push(arr[arr.length - 1])
        }
        return newArr
    }
    async create(data) {
        const candidate = await Coin.findOne({name: data.name})
        if (candidate) {
            throw ApiError.preconditionFailed()
        }
        const coin = await Coin.create(data)
        const cryptoRating = await CryptoRating.create({name: data.name, coinId: coin._id, classification: coin.classification})

        calculationService.calculate()

        return coin
    }

    async findAll() {
        return await Coin.find().sort({search_group: 1})
    }

    async delete(name) {
        return await Coin.findOneAndDelete({name})
    }


    async redact(data) {
        const coin = await Coin.findOne({name: data.name})
        if (coin == undefined) {
            return await this.create(data)
        } else {
            // console.log(data)
            const coin = await Coin.updateOne({name: data.name}, data);
            calculationService.calculate()
            return  coin

        }
    }

}

module.exports = new coinService()
