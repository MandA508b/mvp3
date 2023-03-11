import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router";
import {useGetResultCoinQuery} from "../redux/table/tableApiSlice";
import Chart from "../components/Chart";


const adjustPercent = list => {
    let sum = 0
    list.forEach(elem=>{
        sum  += elem.percent
    })
    const rest = 100-sum
    const add = Number((rest / list.length).toFixed(2))
    console.log(sum, rest, add)
    return list.map(elem=>{
        return {...elem, percent:elem.percent+add}
    })
}

const ResultSearch = () => {
    const location = useLocation()
    const {data, isLoading, isSuccess} = useGetResultCoinQuery()
    const [sortedData, setSortedData] = useState([])
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        if(isSuccess ){
            const list = []
            data.forEach(elem=>{
                if(elem.coin !== 'nothing' && typeof elem.coin === 'string')
                    list.push(elem)
                    
           })
           let sorted = list.sort((a,b)=>(a.percent<b.percent)?1:-1)
           const biggest = sorted[0].percent
           sorted = adjustPercent(sorted)
           setSortedData(sorted)

           setChartData(sorted.map(elem=>{
                if(elem.coin !== 'nothing' && typeof elem.coin === 'string') 
                return {
                    name:elem.coin,
                    value:elem.percent,
                    fill:`rgba(112, 89, 225, ${(elem.percent/biggest).toFixed(1)})`
                }
            }))
        }
        
    }, [isSuccess])
    const generateNumber = location.pathname.split('/').slice(-1)[0].slice(7, 12)
    if (!isSuccess || isLoading ) return null
    return (


        <main className="page">

            <section className="page__result result container">
                <div className="project__main">
                    <h2 className="project__title">Заявка №{generateNumber}</h2>
                </div>

                <section className="page__table table">
                    <div className="table__wrapper">
                        <div className="table__grid-result table__grid-row_title">
                            <div className="grid__item">Назва</div>
                            <div className="grid__item">Рейтинг</div>
                        </div>

                        {
                            sortedData?.map(elem => (
                                <div key={elem.coin.name} className="table__grid-result">
                                    <div className="grid__item">{elem.coin}</div>
                                    <div className="grid__item">{elem.percent}%</div>
                                </div>
                            ))
                        }

                    </div>
                </section>
                <div style={{height:'400px'}}>
                    <Chart data={chartData}/>

                </div>

                <section className="diagramma-generate">
                    <div className="diagramma-wrapper">
                        {/*<img src={require("./../assets/img/diagramma_crypto_generate.png")}/>*/}
                    </div>
                </section>
            </section>
        </main>


    )
        ;
};

export default ResultSearch;

{/*

    <Stack width={'100vw'} height={'100vh'} alignItems={'center'} padding={10}>
            <Typography variant="h4" color="#56585a" fontWeight={700} textAlign="center">
                ЗАЯВКА № {generateNumber} (РЕЗУЛЬТАТ ГЕНЕРАЦІЇ ПОРТФЕЛЯ)
            </Typography>
            <Stack gap={0.5}  flexDirection={'row'}>
                <Stack>
                    <ResultSearchElement fontWeight={700} text={'Назва'}/>

                    {
                        data?.map(elem=> {
                            return <ResultSearchElement text={elem.coin.name} key={elem.coin.name}/>
                        })
                    }


                </Stack>
                <Divider orientation={'vertical'} color={'#D3D3D3'}/>
                <Stack>
                    <ResultSearchElement fontWeight={700} text={'Рекомендований %'}/>
                    <ResultSearchElement color={'green'} fontWeight={700} text={'15,1'}/>
                    <ResultSearchElement color={'green'} fontWeight={700} text={'5,3'}/>
                    <ResultSearchElement color={'green'} fontWeight={700} text={'2,3'}/>

                </Stack>
                <Divider orientation={'vertical'} color={'#D3D3D3'}/>

                    <Stack>
                        <ResultSearchElement fontWeight={700} text={'Вартість у $\n'}/>
                        <ResultSearchElement text={'151'}/>
                        <ResultSearchElement text={'523'}/>
                        <ResultSearchElement text={'123'}/>

                    </Stack>
                <Divider orientation={'vertical'} color={'#D3D3D3'}/>
                <Stack>
                    <ResultSearchElement fontWeight={700} text={'Вартість у крипті'}/>

                    <ResultSearchElement text={'23'}/>
                    <ResultSearchElement text={'93'}/>
                    <ResultSearchElement text={'54'}/>

                </Stack>

            </Stack>


        </Stack>
    
*/
}