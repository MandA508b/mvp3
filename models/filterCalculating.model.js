const db= require('../db/db')

const schema = new db.Schema({
    name:{
        type: Boolean,
        default: false
    },
    img:{
        type: Boolean,
        default: false
    },
    price: {
        type: Boolean,
        default: false
    },
    ath_price: {
        type: Boolean,
        default: false
    },
    ath_time: {
        type: Boolean,
        default: false
    },
    atl_price: {
        type: Boolean,
        default: false
    },
    atl_time: {
        type: Boolean,
        default: false
    },
    full_name:{
        type: Boolean,
        default: false
    },
    market_cap: {
        type: Boolean,
        default: false
    },
    total_supply:{
        type: Boolean,
        default: false
    },
    search_group: {
        type: Boolean,
        default: false
    },
    id: {
        type: Boolean,
        default: false
    },
    classification: {
        type: Boolean,
        default: false
    },
    class: {
        type: Boolean,
        default: false
    },
    type: {
        type: Boolean,
        default: false
    },
    subtype: {
        type: Boolean,
        default: false
    },
    proof_consensus: {
        type: Boolean,
        default: false
    },
    expected_rise_to_decline: {
        type: Boolean,
        default: false
    },
    expected_1_5_years: {
        type: Boolean,
        default: false
    },
    possible_passage: {
        type: Boolean,
        default: false
    },
    floor1: {
        type: Boolean,
        default: false
    },
    near_good_price: {
        type: Boolean,
        default: false
    },
    percent_of_good_price: {
        type: Boolean,
        default: false
    },
    ceiling1: {
        type: Boolean,
        default: false
    },
    ceiling2: {
        type: Boolean,
        default: false
    },
    percent_90_ath: {
        type: Boolean,
        default: false
    },
    percent_93_ath: {
        type: Boolean,
        default: false
    },
    percent_95_ath: {
        type: Boolean,
        default: false
    },
    percentage_of_the_market: {
        type: Boolean,
        default: false
    },
    ath_percent: {
        type: Boolean,
        default: false
    },
    x_history: {
        type: Boolean,
        default: false
    },
    atl_percent: {
        type: Boolean,
        default: false
    },
    max_supply: {
        type: Boolean,
        default: false
    },
    max_cap: {
        type: Boolean,
        default: false
    },
    percent__out_of_supply: {
        type: Boolean,
        default: false
    },
    x_on_token_sales: {
        type: Boolean,
        default: false
    },
    price_pre_seed: {
        type: Boolean,
        default: false
    },
    amount_pre_seed: {
        type: Boolean,
        default: false
    },
    price_seed: {
        type: Boolean,
        default: false
    },
    amount_seed: {
        type: Boolean,
        default: false
    },
    price_private_round: {
        type: Boolean,
        default: false
    },
    amount_private_round: {
        type: Boolean,
        default: false
    },
    price_early_supporters: {
        type: Boolean,
        default: false
    },
    amount_early_supporters: {
        type: Boolean,
        default: false
    },
    price_ico_public: {
        type: Boolean,
        default: false
    },
    amount_ico_public: {
        type: Boolean,
        default: false
    },
    price_ieo: {
        type: Boolean,
        default: false
    },
    amount_ieo: {
        type: Boolean,
        default: false
    },
    price_ido: {
        type: Boolean,
        default: false
    },
    amount_ido: {
        type: Boolean,
        default: false
    },
    aver_price: {
        type: Boolean,
        default: false
    },
    average_price: {
        type: Boolean,
        default: false
    },
    total_involved: {
        type: Boolean,
        default: false
    },
    percent_emission: {
        type: Boolean,
        default: false
    },
    percent_emission_by_algorithm: {
        type: Boolean,
        default: false
    },
    difference_between_emission: {
        type: Boolean,
        default: false
    },
    emission_max_rate: {
        type: Boolean,
        default: false
    },
    emission: {
        type: Boolean,
        default: false
    },
    emission_price_after_with_inflation: {
        type: Boolean,
        default: false
    },
    emission_inflation: {
        type: Boolean,
        default: false
    },
    emission_inflation_token_day: {
        type: Boolean,
        default: false
    },
    emission_inflation_token_week: {
        type: Boolean,
        default: false
    },
    emission_inflation_token_month: {
        type: Boolean,
        default: false
    },
    true: {
        type: Boolean,
        default: false
    },
    wallets: {
        type: Boolean,
        default: false
    },
    site_with_wallets: {
        type: Boolean,
        default: false
    },
    wallet1: {
        type: Boolean,
        default: false
    },
    wallet2: {
        type: Boolean,
        default: false
    },
    wallet3: {
        type: Boolean,
        default: false
    },
    wallet4: {
        type: Boolean,
        default: false
    },
    wallet5: {
        type: Boolean,
        default: false
    },
    holders: {
        type: Boolean,
        default: false
    },
    transfers: {
        type: Boolean,
        default: false
    },
    number_of_funds_invested: {
        type: Boolean,
        default: false
    },
    have_own_fund: {
        type: Boolean,
        default: false
    },
    ratio_of_funds: {
        type: Boolean,
        default: false
    },
    number_of_exchangers: {
        type: Boolean,
        default: false
    },
    is_on_coinbase_and_kraken: {
        type: Boolean,
        default: false
    },
    watchlist_on_coinmarketcap: {
        type: Boolean,
        default: false
    },
    largest_price_of_the_mining: {
        type: Boolean,
        default: false
    },
    reddit_members: {
        type: Boolean,
        default: false
    },
    twitter_followers: {
        type: Boolean,
        default: false
    },
    gitHub_commits: {
        type: Boolean,
        default: false
    },
    gitHub_stars: {
        type: Boolean,
        default: false
    },
    gitHub_followers: {
        type: Boolean,
        default: false
    },
    gitHub_contributors: {
        type: Boolean,
        default: false
    },
    marketing_site: {
        type: Boolean,
        default: false
    },
    marketing_google: {
        type: Boolean,
        default: false
    },
    marketing_youtube: {
        type: Boolean,
        default: false
    },
    unnamed: {
        type: Boolean,
        default: false
    }

})

module.exports = db.model('filterCalculating', schema)
