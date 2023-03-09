const db= require('../db/db')

const schema = new db.Schema({
    name:{
        type: String,
        default: "-"
    },
    img:{
        type: String,
        default: "-"
    },
    price: {
        type: String,
        default: "-"
    },
    ath_price: {
        type: String,
        default: "-"
    },
    ath_time: {
        type: String,
        default: "-"
    },
    atl_price: {
        type: String,
        default: "-"
    },
    atl_time: {
        type: String,
        default: "-"
    },
    full_name:{
        type: String,
        default: "-"
    },
    market_cap: {
        type: String,
        default: "-"
    },
    total_supply:{
        type: String,
        default: "-"
    },
    search_group: {
        type: String,
        default: "-"
    },
    id: {
        type: String,
        default: "-"
    },
    classification: {
        type: String,
        default: "-"
    },
    class: {
        type: String,
        default: "-"
    },
    type: {
        type: String,
        default: "-"
    },
    subtype: {
        type: String,
        default: "-"
    },
    proof_consensus: {
        type: String,
        default: "-"
    },
    expected_rise_to_decline: {
        type: String,
        default: "-"
    },
    expected_1_5_years: {
        type: String,
        default: "-"
    },
    possible_passage: {
        type: String,
        default: "-"
    },
    floor1: {
        type: String,
        default: "-"
    },
    near_good_price: {
        type: String,
        default: "-"
    },
    percent_of_good_price: {
        type: String,
        default: "-"
    },
    ceiling1: {
        type: String,
        default: "-"
    },
    ceiling2: {
        type: String,
        default: "-"
    },
    percent_90_ath: {
        type: String,
        default: "-"
    },
    percent_93_ath: {
        type: String,
        default: "-"
    },
    percent_95_ath: {
        type: String,
        default: "-"
    },
    percentage_of_the_market: {
        type: String,
        default: "-"
    },
    ath_percent: {
        type: String,
        default: "-"
    },
    x_history: {
        type: String,
        default: "-"
    },
    atl_percent: {
        type: String,
        default: "-"
    },
    max_supply: {
        type: String,
        default: "-"
    },
    max_cap: {
        type: String,
        default: "-"
    },
    percent__out_of_supply: {
        type: String,
        default: "-"
    },
    x_on_token_sales: {
        type: String,
        default: "-"
    },
    price_pre_seed: {
        type: String,
        default: "-"
    },
    amount_pre_seed: {
        type: String,
        default: "-"
    },
    price_seed: {
        type: String,
        default: "-"
    },
    amount_seed: {
        type: String,
        default: "-"
    },
    price_private_round: {
        type: String,
        default: "-"
    },
    amount_private_round: {
        type: String,
        default: "-"
    },
    price_early_supporters: {
        type: String,
        default: "-"
    },
    amount_early_supporters: {
        type: String,
        default: "-"
    },
    price_ico_public: {
        type: String,
        default: "-"
    },
    amount_ico_public: {
        type: String,
        default: "-"
    },
    price_ieo: {
        type: String,
        default: "-"
    },
    amount_ieo: {
        type: String,
        default: "-"
    },
    price_ido: {
        type: String,
        default: "-"
    },
    amount_ido: {
        type: String,
        default: "-"
    },
    aver_price: {
        type: String,
        default: "-"
    },
    average_price: {
        type: String,
        default: "-"
    },
    total_involved: {
        type: String,
        default: "-"
    },
    percent_emission: {
        type: String,
        default: "-"
    },
    percent_emission_by_algorithm: {
        type: String,
        default: "-"
    },
    difference_between_emission: {
        type: String,
        default: "-"
    },
    emission_max_rate: {
        type: String,
        default: "-"
    },
    emission: {
        type: String,
        default: "-"
    },
    emission_price_after_with_inflation: {
        type: String,
        default: "-"
    },
    emission_inflation: {
        type: String,
        default: "-"
    },
    emission_inflation_token_day: {
        type: String,
        default: "-"
    },
    emission_inflation_token_week: {
        type: String,
        default: "-"
    },
    emission_inflation_token_month: {
        type: String,
        default: "-"
    },
    true: {
        type: String,
        default: "-"
    },
    wallets: {
        type: String,
        default: "-"
    },
    site_with_wallets: {
        type: String,
        default: "-"
    },
    wallet1: {
        type: String,
        default: "-"
    },
    wallet2: {
        type: String,
        default: "-"
    },
    wallet3: {
        type: String,
        default: "-"
    },
    wallet4: {
        type: String,
        default: "-"
    },
    wallet5: {
        type: String,
        default: "-"
    },
    holders: {
        type: String,
        default: "-"
    },
    transfers: {
        type: String,
        default: "-"
    },
    number_of_funds_invested: {
        type: String,
        default: "-"
    },
    have_own_fund: {
        type: String,
        default: "-"
    },
    ratio_of_funds: {
        type: String,
        default: "-"
    },
    number_of_exchangers: {
        type: String,
        default: "-"
    },
    is_on_coinbase_and_kraken: {
        type: String,
        default: "-"
    },
    watchlist_on_coinmarketcap: {
        type: String,
        default: "-"
    },
    largest_price_of_the_mining: {
        type: String,
        default: "-"
    },
    reddit_members: {
        type: String,
        default: "-"
    },
    twitter_followers: {
        type: String,
        default: "-"
    },
    gitHub_commits: {
        type: String,
        default: "-"
    },
    gitHub_stars: {
        type: String,
        default: "-"
    },
    gitHub_followers: {
        type: String,
        default: "-"
    },
    gitHub_contributors: {
        type: String,
        default: "-"
    },
    marketing_site: {
        type: String,
        default: "-"
    },
    marketing_google: {
        type: String,
        default: "-"
    },
    marketing_youtube: {
        type: String,
        default: "-"
    },
    unnamed: {
        type: String,
        default: "-"
    }

})

module.exports = db.model('CoinTooltip', schema)
