import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import {useNavigate} from "react-router-dom";
import { Typography} from "@mui/material";
import {
    useCoinDirectionQuery,
    useCoinLimitQuery, useCoinTooltipQuery,
    useFetchAllCoinsQuery, useProjectBlureFilterQuery,
    useProjectVisibleFilterQuery
} from "../redux/table/tableApiSlice";
import CoinInfo from "../components/CoinInfo";


const types = [
    {
        name:'Smart Contract Platform',
        dbName:'SC'
    },
    {
        name:'Defi',
        dbName:'DeFi'
    },
    {
        name:'Ecosystem',
        dbName:'(token) ES'
    },
    {
        name:'Metaverse',
        dbName:'MV'
    },
]
const notShow = ['id', 'img', 'full_name', 'name']
const Coin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const name = location.pathname.split('/').slice(-1)[0]
    const [coin, setCoin] = useState({})
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
            Object.keys(blr).forEach(elem => {
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
            setCoin(data.filter(coin => coin.name === name.toUpperCase())[0])
        }
    }, [data])

    if (!isSuccess || isLoading || !cls || cll || !cds || cdl || !vss || vsl || !bls || bll || !cts || ctl || !sortedFields.length)
        return (
            <Typography textAlign={'center'} fontSize={36}
                        fontWeight={700} color={'#56585a'}>
                Loading
            </Typography>)

    if (!coin?.name)
        return (
            <Typography textAlign={'center'} fontSize={36} fontWeight={700} color={'#56585a'}>
                Not Found
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
                        <div className="rate__nums"><span>{coin.rating<=100 ? coin.rating.toFixed() : 100}</span>/100</div>
                    </div>
                </div>
                <nav className="project__nav nav-project">
                    <ul className="nav-project__list">
                        {
                            types.map(elem=>{
                                const active = elem.dbName === coin.type
                                return(
                                    <li key={elem.dbName} className={`nav-project__list-item ${active ? 'coin_type-active' : null}`}><a href="#">{elem.name}</a></li>
                                )
                            })
                        }
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
