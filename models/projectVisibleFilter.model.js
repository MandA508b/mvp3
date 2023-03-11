const db= require('../db/db')

const schema = new db.Schema({
    name:{
        type: Boolean,
        default: true
    },
    img:{
        type: Boolean,
        default: true
    },
    price: {
        type: Boolean,
        default: true
    },
    ath_price: {
        type: Boolean,
        default: true
    },
    ath_time: {
        type: Boolean,
        default: true
    },
    atl_price: {
        type: Boolean,
        default: true
    },
    atl_time: {
        type: Boolean,
        default: true
    },
    full_name:{
        type: Boolean,
        default: true
    },
    market_cap: {
        type: Boolean,
        default: true
    },
    total_supply:{
        type: Boolean,
        default: true
    },
    search_group: {
        type: Boolean,
        default: true
    },
    id: {
        type: Boolean,
        default: true
    },
    classification: {
        type: Boolean,
        default: true
    },
    class: {
        type: Boolean,
        default: true
    },
    type: {
        type: Boolean,
        default: true
    },
    subtype: {
        type: Boolean,
        default: true
    },
    proof_consensus: {
        type: Boolean,
        default: true
    },
    expected_rise_to_decline: {
        type: Boolean,
        default: true
    },
    expected_1_5_years: {
        type: Boolean,
        default: true
    },
    possible_passage: {
        type: Boolean,
        default: true
    },
    floor1: {
        type: Boolean,
        default: true
    },
    near_good_price: {
        type: Boolean,
        default: true
    },
    percent_of_good_price: {
        type: Boolean,
        default: true
    },
    ceiling1: {
        type: Boolean,
        default: true
    },
    ceiling2: {
        type: Boolean,
        default: true
    },
    percent_90_ath: {
        type: Boolean,
        default: true
    },
    percent_93_ath: {
        type: Boolean,
        default: true
    },
    percent_95_ath: {
        type: Boolean,
        default: true
    },
    percentage_of_the_market: {
        type: Boolean,
        default: true
    },
    ath_percent: {
        type: Boolean,
        default: true
    },
    x_history: {
        type: Boolean,
        default: true
    },
    atl_percent: {
        type: Boolean,
        default: true
    },
    max_supply: {
        type: Boolean,
        default: true
    },
    max_cap: {
        type: Boolean,
        default: true
    },
    percent__out_of_supply: {
        type: Boolean,
        default: true
    },
    x_on_token_sales: {
        type: Boolean,
        default: true
    },
    price_pre_seed: {
        type: Boolean,
        default: true
    },
    amount_pre_seed: {
        type: Boolean,
        default: true
    },
    price_seed: {
        type: Boolean,
        default: true
    },
    amount_seed: {
        type: Boolean,
        default: true
    },
    price_private_round: {
        type: Boolean,
        default: true
    },
    amount_private_round: {
        type: Boolean,
        default: true
    },
    price_early_supporters: {
        type: Boolean,
        default: true
    },
    amount_early_supporters: {
        type: Boolean,
        default: true
    },
    price_ico_public: {
        type: Boolean,
        default: true
    },
    amount_ico_public: {
        type: Boolean,
        default: true
    },
    price_ieo: {
        type: Boolean,
        default: true
    },
    amount_ieo: {
        type: Boolean,
        default: true
    },
    price_ido: {
        type: Boolean,
        default: true
    },
    amount_ido: {
        type: Boolean,
        default: true
    },
    aver_price: {
        type: Boolean,
        default: true
    },
    average_price: {
        type: Boolean,
        default: true
    },
    total_involved: {
        type: Boolean,
        default: true
    },
    percent_emission: {
        type: Boolean,
        default: true
    },
    percent_emission_by_algorithm: {
        type: Boolean,
        default: true
    },
    difference_between_emission: {
        type: Boolean,
        default: true
    },
    emission_max_rate: {
        type: Boolean,
        default: true
    },
    emission: {
        type: Boolean,
        default: true
    },
    emission_price_after_with_inflation: {
        type: Boolean,
        default: true
    },
    emission_inflation: {
        type: Boolean,
        default: true
    },
    emission_inflation_token_day: {
        type: Boolean,
        default: true
    },
    emission_inflation_token_week: {
        type: Boolean,
        default: true
    },
    emission_inflation_token_month: {
        type: Boolean,
        default: true
    },
    true: {
        type: Boolean,
        default: true
    },
    wallets: {
        type: Boolean,
        default: true
    },
    site_with_wallets: {
        type: Boolean,
        default: true
    },
    wallet1: {
        type: Boolean,
        default: true
    },
    wallet2: {
        type: Boolean,
        default: true
    },
    wallet3: {
        type: Boolean,
        default: true
    },
    wallet4: {
        type: Boolean,
        default: true
    },
    wallet5: {
        type: Boolean,
        default: true
    },
    holders: {
        type: Boolean,
        default: true
    },
    transfers: {
        type: Boolean,
        default: true
    },
    number_of_funds_invested: {
        type: Boolean,
        default: true
    },
    have_own_fund: {
        type: Boolean,
        default: true
    },
    ratio_of_funds: {
        type: Boolean,
        default: true
    },
    number_of_exchangers: {
        type: Boolean,
        default: true
    },
    is_on_coinbase_and_kraken: {
        type: Boolean,
        default: true
    },
    watchlist_on_coinmarketcap: {
        type: Boolean,
        default: true
    },
    largest_price_of_the_mining: {
        type: Boolean,
        default: true
    },
    reddit_members: {
        type: Boolean,
        default: true,
    },
    twitter_followers: {
        type: Boolean,
        default: true,
    },
    gitHub_commits: {
        type: Boolean,
        default: true,
    },
    gitHub_stars: {
        type: Boolean,
        default: true,
    },
    gitHub_followers: {
        type: Boolean,
        default: true,
    },
    gitHub_contributors: {
        type: Boolean,
        default: true,
    },
    marketing_site: {
        type: Boolean,
        default: true,
    },
    marketing_google: {
        type: Boolean,
        default: true,
    },
    marketing_youtube: {
        type: Boolean,
        default: true,
    },
    unnamed: {
        type: Boolean,
        default: true,
    },
    rating:{
        type: Boolean,
        default: true,
    }

})

module.exports = db.model('projectVisibleFilter', schema)
