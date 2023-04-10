const CryptoRating = require('../models/cryptoRating.model')
const CoinDirection = require('../models/coinDirection.model')
const cryptoRatingService = require('../services/cryptoRating.service')
const Coin = require('../models/coin.model')
const CoinLimit = require('../models/coinLimit.model')
const excelValue = require('../models/excelValue.model')

class calculatingService {

    async calculate(){
       try{
         console.log(('start calc'))
        let cryptoRating = await CryptoRating.find()
        for (let cryptoRatingKey in cryptoRating) {
            cryptoRating[cryptoRatingKey].rating = 0
            await cryptoRating[cryptoRatingKey].save()
        }


        const coins = await Coin.find({})
           const value3 = await excelValue.findOne({name: "row_3"})
           const value6 = await excelValue.findOne({name: "row_6"})

        for (let coinsKey in coins) {
            try{
                let value_AH3 = value3.x_on_token_sales,
                value_BM3 = value3.wallet1,
                value_BN3 = value3.wallet2,
                value_BO3 = value3.wallet3,
                value_BP3 = value3.wallet4,
                value_BQ3 = value3.wallet5

            if(1/Number(coins[coinsKey].x_on_token_sales)*value3.x_on_token_sales>value3.x_on_token_sales)value_AH3=1/Number(coins[coinsKey].x_on_token_sales)*value3.x_on_token_sales
            if(1/Number(coins[coinsKey].wallet1)*value3.wallet1>value3.wallet1)value_BM3=1/Number(coins[coinsKey].wallet1)*value3.wallet1
            if(1/Number(coins[coinsKey].wallet2)*value3.wallet2>value3.wallet2)value_BN3=1/Number(coins[coinsKey].wallet2)*value3.wallet2
            if(1/Number(coins[coinsKey].wallet3)*value3.wallet3>value3.wallet3)value_BO3=1/Number(coins[coinsKey].wallet3)*value3.wallet3
            if(1/Number(coins[coinsKey].wallet4)*value3.wallet4>value3.wallet4)value_BP3=1/Number(coins[coinsKey].wallet4)*value3.wallet4
            if(1/Number(coins[coinsKey].wallet5)*value3.wallet5>value3.wallet5)value_BQ3=1/Number(coins[coinsKey].wallet5)*value3.wallet5
            coins[coinsKey].rating = 0 
            
            if(!coins[coinsKey].ath_percent)coins[coinsKey].ath_percent = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].ath_percent)/value6.ath_percent*value3.ath_percent}catch(e){}

            
            if(!coins[coinsKey].max_cap)coins[coinsKey].max_cap = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].max_cap)/value6.max_cap*value3.max_cap}catch(e){}

            
            try{coins[coinsKey].rating += value_AH3}catch(e){}

            
            if(!coins[coinsKey].total_involved)coins[coinsKey].total_involved = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].total_involved)/value6.total_involved*value3.total_involved}catch(e){}

            
            if(!coins[coinsKey].percent_emission)coins[coinsKey].percent_emission = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].percent_emission)/value6.percent_emission*value3.percent_emission}catch(e){}

            
            if(!coins[coinsKey].emission)coins[coinsKey].emission = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].emission)/value6.emission*value3.emission}catch(e){}

            
            if(!coins[coinsKey].wallets)coins[coinsKey].wallets = 0
            try{coins[coinsKey].rating += 1/Number(coins[coinsKey].wallets)*value3.wallets}catch(e){}

            
            try{coins[coinsKey].rating += value_BM3}catch(e){}

            
            try{coins[coinsKey].rating += value_BN3}catch(e){}

            
            try{coins[coinsKey].rating += value_BO3}catch(e){}

            
            try{coins[coinsKey].rating += value_BP3}catch(e){}

            
            try{coins[coinsKey].rating += value_BQ3}catch(e){}

            
            if(!coins[coinsKey].holders)coins[coinsKey].holders = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].holders)/value6.holders*value3.holders}catch(e){}

            
            if(!coins[coinsKey].transfers)coins[coinsKey].transfers = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].transfers)/value6.transfers*value3.transfers}catch(e){}

            
            if(!coins[coinsKey].number_of_funds_invested)coins[coinsKey].number_of_funds_invested = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].number_of_funds_invested)/value6.number_of_funds_invested*value3.number_of_funds_invested}catch(e){}

            
            if(!coins[coinsKey].ratio_of_funds)coins[coinsKey].ratio_of_funds = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].ratio_of_funds)/value6.ratio_of_funds*value3.ratio_of_funds}catch(e){}

            
            if(!coins[coinsKey].number_of_exchangers)coins[coinsKey].number_of_exchangers = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].number_of_exchangers)/value6.number_of_exchangers*value3.number_of_exchangers}catch(e){}

            
            if(!coins[coinsKey].watchlist_on_coinmarketcap)coins[coinsKey].watchlist_on_coinmarketcap = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].watchlist_on_coinmarketcap)/value6.watchlist_on_coinmarketcap*value3.watchlist_on_coinmarketcap}catch(e){}

            
            if(!coins[coinsKey].reddit_members)coins[coinsKey].reddit_members = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].reddit_members)/value6.reddit_members*value3.reddit_members}catch(e){}

            
            if(!coins[coinsKey].twitter_followers)coins[coinsKey].twitter_followers = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].twitter_followers) /value6.twitter_followers*value3.twitter_followers}catch(e){}

            
            if(!coins[coinsKey].gitHub_commits)coins[coinsKey].gitHub_commits = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].gitHub_commits) /value6.gitHub_commits*value3.gitHub_commits}catch(e){}

            
            if(!coins[coinsKey].gitHub_stars)coins[coinsKey].gitHub_stars = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].gitHub_stars)/value6.gitHub_stars*value3.gitHub_stars}catch(e){}

            
            if(!coins[coinsKey].gitHub_followers)coins[coinsKey].gitHub_followers = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].gitHub_followers)/value6.gitHub_followers*value3.gitHub_followers}catch(e){}

            
            if(!coins[coinsKey].gitHub_contributors)coins[coinsKey].gitHub_contributors = 0
            try{ coins[coinsKey].rating += Number(coins[coinsKey].gitHub_contributors)/value6.gitHub_contributors*value3.gitHub_contributors}catch(e){}

            
            if(!coins[coinsKey].marketing_site)coins[coinsKey].marketing_site = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].marketing_site)/value6.marketing_site*value3.marketing_site}catch(e){}

            
            if(!coins[coinsKey].marketing_google)coins[coinsKey].marketing_google = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey].marketing_google)/value6.marketing_google*value3.marketing_google}catch(e){}

            
            if(!coins[coinsKey].marketing_youtube)coins[coinsKey].marketing_youtube = 0
            try{coins[coinsKey].rating += Number(coins[coinsKey]. marketing_youtube)/value6.marketing_youtube*value3.marketing_youtube}catch(e){}

            
            if(!coins[coinsKey].unnamed)coins[coinsKey].unnamed = 0
            try{coins[coinsKey].rating += Math.min(Number(coins[coinsKey].unnamed)/value6.unnamed*value3.unnamed,value3.unnamed)}catch(e){}

            
            await coins[coinsKey].save()
            }catch(e){
                return console.log(e)
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
            await cryptoRatingService.init()
            let top1=(await this.getCoinTop("ES", 0, 1)),
            top2=(await this.getCoinTop("ES", 1, 1)),
            top3=(await this.getCoinTop("ES", 2, 1)),
            top4=(await this.getCoinTop("ES", 3, 1)),
            top5=(await this.getCoinTop("ES", 4, 1))


            top1 = top1.concat(await this.getCoinTop(top1[0].name, 0, 6))
            top2 = top2.concat(await this.getCoinTop(top2[0].name, 0, 5))
            top3 = top3.concat(await this.getCoinTop(top3[0].name, 0, 2))
            top4 = top4.concat(await this.getCoinTop(top4[0].name, 0, 2))

            return [{coin: top1[0].name, percent: 21},
                {coin: top1[1].name, percent: 5},
                {coin: top1[2].name, percent: 4},
                {coin: top1[3].name, percent: 3},
                {coin: top1[4].name, percent: 2},
                {coin: top1[5].name, percent: 2},
                {coin: top1[6].name, percent: 1},
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
            const Coins = await CryptoRating.find({classification: classification}).sort({rating: -1})
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
