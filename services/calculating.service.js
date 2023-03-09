const CryptoRating = require('../models/cryptoRating.model')
const FilterCalculating = require('../models/filterCalculating.model')
const CoinDirection = require('../models/coinDirection.model')
const Coin = require('../models/coin.model')
const CoinLimit = require('../models/coinLimit.model')

class calculatingService {

    async calculate(){
       try{
         console.log(('start calc'))
        let cryptoRating = await CryptoRating.find()
        for (let cryptoRatingKey in cryptoRating) {
            cryptoRating[cryptoRatingKey].rating = 0
            await cryptoRating[cryptoRatingKey].save()
        }
        const CoinLimitUpper = await CoinLimit.findOne({name: "upper limit"})
        const CoinLimitLower = await CoinLimit.findOne({name: "lower limit"})
        const coinDirection = await CoinDirection.findOne({})
        const arr = Object.keys(CoinDirection.schema.tree)

        const coins = await Coin.find({})

        for (let coinsKey in coins) {
            try{
                let value_AH3 = 5,
                value_BM3 = 1,
                value_BN3 = 1,
                value_BO3 = 1,
                value_BO4 = 1,
                value_BQ4 = 1

            if(1/Number(coins[coinsKey].wallet1)*1>1)value_BM3=1/Number(coins[coinsKey].wallet1)*1
            if(1/Number(coins[coinsKey].wallet2)*1>1)value_BN3=1/Number(coins[coinsKey].wallet2)*1
            if(1/Number(coins[coinsKey].wallet3)*1>1)value_BO3=1/Number(coins[coinsKey].wallet3)*1
            if(1/Number(coins[coinsKey].wallet4)*1>1)value_BO4=1/Number(coins[coinsKey].wallet4)*1
            if(1/Number(coins[coinsKey].wallet5)*1>1)value_BQ4=1/Number(coins[coinsKey].wallet5)*1
            coins[coinsKey].rating = 0 
            
            if(!coins[coinsKey].ath_percent)coins[coinsKey].ath_percent = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].ath_percent)/100*10}catch(e){}

            
            if(!coins[coinsKey].max_cap)coins[coinsKey].max_cap = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].max_cap)/100000000000*1}catch(e){}

            
            try{coins[coinsKey].rating += value_AH3}catch(e){}

            
            if(!coins[coinsKey].total_involved)coins[coinsKey].total_involved = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].total_involved)/100*3}catch(e){}

            
            if(!coins[coinsKey].percent_emission)coins[coinsKey].percent_emission = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].percent_emission)/100*1}catch(e){}

            
            if(!coins[coinsKey].emission)coins[coinsKey].emission = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].emission)/12*1}catch(e){}

            
            if(!coins[coinsKey].wallets)coins[coinsKey].wallets = 0
            try{coins[coinsKey].rating += 1/Number(coins[coinsKey].wallets)*1}catch(e){}

            
            try{coins[coinsKey].rating += value_BM3}catch(e){}

            
            try{coins[coinsKey].rating += value_BN3}catch(e){}

            
            try{coins[coinsKey].rating += value_BO3}catch(e){}

            
            try{coins[coinsKey].rating += value_BO4}catch(e){}

            
            try{coins[coinsKey].rating += value_BQ4}catch(e){}

            
            if(!coins[coinsKey].holders)coins[coinsKey].holders = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].holders)/1000000*2}catch(e){}

            
            if(!coins[coinsKey].transfers)coins[coinsKey].transfers = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].transfers)/10000000*1}catch(e){}

            
            if(!coins[coinsKey].number_of_funds_invested)coins[coinsKey].number_of_funds_invested = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].number_of_funds_invested)/10*3}catch(e){}

            
            if(!coins[coinsKey].ratio_of_funds)coins[coinsKey].ratio_of_funds = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].ratio_of_funds)/50*48}catch(e){}

            
            if(!coins[coinsKey].number_of_exchangers)coins[coinsKey].number_of_exchangers = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].number_of_exchangers)/100*2}catch(e){}

            
            if(!coins[coinsKey].watchlist_on_coinmarketcap)coins[coinsKey].watchlist_on_coinmarketcap = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].watchlist_on_coinmarketcap)/1000000*1}catch(e){}

            
            if(!coins[coinsKey].reddit_members)coins[coinsKey].reddit_members = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].reddit_members)/1000000*2}catch(e){}

            
            if(!coins[coinsKey].twitter_followers)coins[coinsKey].twitter_followers = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].twitter_followers) /1000000*2}catch(e){}

            
            if(!coins[coinsKey].gitHub_commits)coins[coinsKey].gitHub_commits = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].gitHub_commits) /10000*1}catch(e){}

            
            if(!coins[coinsKey].gitHub_stars)coins[coinsKey].gitHub_stars = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].gitHub_stars)/5000*4}catch(e){}

            
            if(!coins[coinsKey].gitHub_followers)coins[coinsKey].gitHub_followers = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].gitHub_followers)/700*1}catch(e){}

            
            if(!coins[coinsKey].gitHub_contributors)coins[coinsKey].gitHub_contributors = 0
            try{ coins[coinsKey].rating += Number(coins[coinsKey].gitHub_contributors)/500*2}catch(e){}

            
            if(!coins[coinsKey].marketing_site)coins[coinsKey].marketing_site = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].marketing_site)/10000*2}catch(e){}

            
            if(!coins[coinsKey].marketing_google)coins[coinsKey].marketing_google = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].marketing_google)/200000000*1}catch(e){}

            
            if(!coins[coinsKey].marketing_youtube)coins[coinsKey].marketing_youtube = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey]. marketing_youtube)/15000000*1}catch(e){}

            
            if(!coins[coinsKey].unnamed)coins[coinsKey].unnamed = 0
            try{coins[coinsKey].rating += Math.min(Number(coins[coinsKey].unnamed)/100*1,1)}catch(e){}

            
            await coins[coinsKey].save()
            }catch(e){
                console.log("bad calculatig at",   coins[coinsKey].name)
            }
        }

        console.log('end calc')
       }catch(e){
        console.log('error :', e)
       }

    }

    async getTop(){
        try {
            
            let top1=(await this.getCoinTop("ES", 0, 1)),
            top2=(await this.getCoinTop("ES", 1, 1)),
            top3=(await this.getCoinTop("ES", 2, 1)),
            top4=(await this.getCoinTop("ES", 3, 1)),
            top5=(await this.getCoinTop("ES", 4, 1))

            console.log(top1[0])
            console.log(top2[0])
            console.log(top3[0])
            console.log(top4[0])
            console.log(top5[0])

            top1 = top1.concat(await this.getCoinTop(top1[0].name, 0, 6))
            top2 = top2.concat(await this.getCoinTop(top2[0].name, 0, 5))
            top3 = top3.concat(await this.getCoinTop(top3[0].name, 0, 2))
            top4 = top4.concat(await this.getCoinTop(top4[0].name, 0, 2))

            console.log([{coin: top1[0], percent: 21},
                {coin: top1[0].name, percent: 5},
                {coin: top1[1].name, percent: 4},
                {coin: top1[2].name, percent: 3},
                {coin: top1[3].name, percent: 2},
                {coin: top1[4].name, percent: 2},
                {coin: top1[5].name, percent: 1},
                {coin: top2[0].name, percent: 13},
                {coin: top2[1].name, percent: 5},
                {coin: top2[2].name, percent: 5},
                {coin: top2[3].name, percent: 2},
                {coin: top2[4].name, percent: 2},
                {coin: top2[5].name, percent: 2},
                {coin: top3[0].name, percent: 11},
                {coin: top3[1].name, percent: 3},
                {coin: top3[2].name, percent: 2},
                {coin: top4[0].name, percent: 8},
                {coin: top4[1].name, percent: 2},
                {coin: top4[2].name, percent: 1},
                {coin: top5[0].name, percent: 6}
            ])

            return [{coin: top1[0], percent: 21},
                {coin: top1[0].name, percent: 5},
                {coin: top1[1].name, percent: 4},
                {coin: top1[2].name, percent: 3},
                {coin: top1[3].name, percent: 2},
                {coin: top1[4].name, percent: 2},
                {coin: top1[5].name, percent: 1},
                {coin: top2[0].name, percent: 13},
                {coin: top2[1].name, percent: 5},
                {coin: top2[2].name, percent: 5},
                {coin: top2[3].name, percent: 2},
                {coin: top2[4].name, percent: 2},
                {coin: top2[5].name, percent: 2},
                {coin: top3[0].name, percent: 11},
                {coin: top3[1].name, percent: 3},
                {coin: top3[2].name, percent: 2},
                {coin: top4[0].name, percent: 8},
                {coin: top4[1].name, percent: 2},
                {coin: top4[2].name, percent: 1},
                {coin: top5[0].name, percent: 6}
            ]
        }catch (e) {
            console.log('error')
        }
    }

    async getCoinTop(classification, number, len){
        try{
            const Coins = await CryptoRating.find({classification: classification}).sort({rating: 1})
            console.log(1, '\n',classification, number, len)
            /*for (let i = 0 ; i < 10 ; i++) {
               try{ console.log(Coins[i])}catch(e){}
            }
            console.log(2)*/

            let arr = []

            for(let i = number; i < number + len; i++){
                if(Coins.length >= number + len){
                    arr.push({name: Coins[i].name, classification: Coins[i].classification})
                }else{
                    arr.push ({name: "nothing",classification: "nothing"})
                }
            }

            return arr
        }catch (e) {
            console.log(e)
        }
    }

}

module.exports = new calculatingService()
