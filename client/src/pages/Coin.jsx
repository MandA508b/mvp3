import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import {useNavigate} from "react-router-dom";
import { Typography} from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

import {
    useCoinDirectionQuery,
    useCoinLimitQuery, useCoinTooltipQuery,
    useFetchAllCoinsQuery, useProjectBlureFilterQuery,
    useProjectVisibleFilterQuery
} from "../redux/table/tableApiSlice";
import CoinInfo from "../components/CoinInfo";
const types = [
    "(token) ES",
    "MktP",
    "DEXt",
    "orakul",
    "CEXt",
    "DeFi",
    "product",
    "NFT",
    "Protocol",
    "Platform",
    "MV",
    "Defi",
    "Binance Launchpad",
    "GameFi",
    "Store Of Value",
    "Marketplace",
    "Platform ",
    "Metaverse",
    "Bridge",
    "Substrate",
    "Oracle",
    "Payments",
    "DAO"
]
const order = [
    'name',
    'classification',
    'class',
    'type',
    'subtype',
    'proof_consensus',
    'expected_rise_to_decline',
    'expected_1_5_years',
    'possible_passage',
    'floor1',
    'near_good_price',
    'percent_of_good_price',
    'ceiling1',
    'ceiling2',
    'percent_90_ath',
    'percent_93_ath',
    'percent_95_ath',
    'price',
    'percentage_of_the_market',
    'ath_percent',
    'ath_price',
    'ath_time',
    'ath_time',
    'x_history',
    'atl_percent',
    'atl_price',
    'atl_time',
    'max_supply',
    'max_cap',
    'percent__out_of_supply',
    'total_supply',
    'market_cap',
    'x_on_token_sales',
    'price_pre_seed',
    'amount_pre_seed',
    'price_seed',
    'amount_seed',
    'price_private_round',
    'amount_private_round',
    'price_early_supporters',
    'amount_early_supporters',
    'price_ico_public',
    'amount_ico_public',
    'price_ieo',
    'amount_ieo',
    'price_ido',
    'amount_ido',
    'aver_price',
    'average_price',
    'total_involved',
    'percent_emission',
    'percent_emission_by_algorithm',
    'difference_between_emission',
    'emission_max_rate',
    'emission',
    'emission_price_after_with_inflation',
    'emission_inflation',
    'emission_inflation_token_day',
    'emission_inflation_token_week',
    'emission_inflation_token_month',
    'true',
    'wallets',
    'site_with_wallets',
    'wallet1',
    'wallet2',
    'wallet3',
    'wallet4',
    'wallet5',
    'holders',
    'transfers',
    'number_of_funds_invested',
    'have_own_fund',
    'ratio_of_funds',
    'number_of_exchangers',
    'is_on_coinbase_and_kraken',
    'watchlist_on_coinmarketcap',
    'largest_price_of_the_mining',
    'reddit_members',
    'twitter_followers',
    'unnamed',
    'gitHub_commits',
    'gitHub_stars',
    'gitHub_followers',
    'gitHub_contributors',
    'numberOfDevelopers',
    'marketing_site',
    'marketing_google',
    'marketing_youtube'


]
// const types = [
//     {
//         name:'Smart Contract Platform',
//         dbName:'SC'
//     },
//     {
//         name:'Defi',
//         dbName:'DeFi'
//     },
//     {
//         name:'Ecosystem',
//         dbName:'(token) ES'
//     },
//     {
//         name:'Metaverse',
//         dbName:'MV'
//     },
// ]
const notShow = ['id', 'img', 'full_name', 'name']
const Coin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const name = location.pathname.split('/').slice(-1)[0]
    const [coin, setCoin] = useState({})
    const [notFound, setNotFound] = useState(false)
    const {data, isLoading, isSuccess} = useFetchAllCoinsQuery()
    const {data: coinLimit, isLoading: cll, isSuccess: cls} = useCoinLimitQuery()
    const {data: coinDirection, isLoading: cdl, isSuccess: cds} = useCoinDirectionQuery()
    const {data: vis, isSuccess: vss, isLoading: vsl} = useProjectVisibleFilterQuery()
    const {data: blr, isSuccess: bls, isLoading: bll} = useProjectBlureFilterQuery()
    const {data: ctt, isSuccess: cts, isLoading: ctl} = useCoinTooltipQuery()

    const [sortedFields, setSortedFields] = useState([])

    useEffect(() => {
        if (bls) {

            const blured = []
            const unblured = []
            order.forEach(elem => {

                if (elem !== '_id' && elem !== '__v') {
                    if (!blr[elem]) unblured.push(elem)
                    else blured.push(elem)
                }
            })
            setSortedFields([...unblured, ...blured])
        }
    }, [blr])


    useEffect(() => {
        if (isSuccess) {
            let types= []
            setCoin(data.filter(coin => coin.name === name.toUpperCase())[0])
            data.forEach(coin=>{
                if(!types.includes(coin.type)) types.push(coin.type)
            })
            //setNotFound(!!data.filter(coin => coin.name === name.toUpperCase())[0])
            setNotFound(!data.filter(coin => coin.name === name.toUpperCase()).length)
        }
    }, [data])

    if (!isSuccess || isLoading || !cls || cll || !cds || cdl || !vss || vsl || !bls || bll || !cts || ctl || !sortedFields.length || !coin.name)
        return (
            <div style={{width:'80vw', margin:'0 auto'}}>
                <Typography textAlign={'center'} fontSize={36}
                            fontWeight={700} color={'#56585a'}>
                    Loading
                </Typography>
                <LinearProgress />
            </div>
            )

    if (notFound)
        return (
            <Typography textAlign={'center'} fontSize={36} fontWeight={700} color={'#56585a'}>
                Not Found :/
            </Typography>
        )

    return (
        <main className="page">

            <section className="page__project project container">
                <div className="project__main">
                    <h2 className="project__title">{coin.full_name}</h2>
                    <div className="project__rate rate">
                        <picture>
                            <source srcSet={require("../assets/img/star.webp")} type="image/webp"/>
                            <img src={require("../assets/img/star.png")} alt="star"
                                 className="rate__star"/>
                        </picture>
                        <div className="rate__text">Рейтинг проекту:</div>
                        <div className="rate__nums"><span>{coin.rating<=100 ? coin.rating?.toFixed() : 100}</span>/100</div>
                    </div>
                </div>
                <nav className="project__nav nav-project">
                    <ul className="nav-project__list" style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                        {/*{*/}
                        {/*    types.map(elem=>{*/}
                        {/*        const active = elem === coin.type*/}
                        {/*        return(*/}
                        {/*            <li key={elem} className={`nav-project__list-item ${active ? 'coin_type-active' : null}`}><a href="#">{elem}</a></li>*/}
                        {/*        )*/}
                        {/*    })*/}
                        {/*}*/}
                        <li className={'nav-project__list-item coin_type-active'}><a href="#">{coin.type}</a></li>
                    </ul>
                </nav>
            </section>

            <section className="page__table table container">
                <div className="table__wrapper">
                    <div className="table__grid grid no-payed">
                        {
                            sortedFields.map(field => {
                                if(notShow.includes(field)) return null
                                let fieldName = ''
                                if(field.split('_').length>2){
                                    field.split('_').forEach(elem=>fieldName+=elem[0]?.toUpperCase())
                                }else fieldName = field.toUpperCase().replaceAll('_',' ')
                                return (
                                    vis[field]
                                        ?
                                            <CoinInfo key={field} isBlured={blr[field]}
                                                      name={fieldName}
                                                      value={coin[field]}
                                                      limits={{
                                                          min: coinLimit[1][field],
                                                          max: coinLimit[0][field]
                                                      }}
                                                      reverse={coinDirection[field]}
                                                      desc={ctt[field]}
                                            />

                                        :
                                        null

                                )
                            })
                        }

                    </div>
                </div>
                <button onClick={() => navigate('/result/' + Date.now())} type="button" className="table__button btn btn_table">Сгенерувати портфель</button>
            </section>
        </main>

    );
};

export default Coin;
