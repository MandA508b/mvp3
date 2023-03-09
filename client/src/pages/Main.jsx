import React, {useState} from 'react';
import {Stack, TextField, Typography, InputAdornment} from "@mui/material";
import useDebounce from "../hooks/useDebounce";
import {useSearchCoinMutation} from "../redux/table/tableApiSlice";
import DropDownCoin from "../components/DropDownCoin";
import {Link, useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const hashtags = ['BTC',
    'ETH', 'XRP', 'TRX', 'BNB', 'USDC', 'DAI', 'XEC', 'KLAY', 'CAKE', 'TWT', 'MKR', 'ZEC', 'FTM', 'USDP', 'TUSD', 'XTZ', 'WBTC']
const Main = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [resultSearch, setResultSearch] = useState([])
    const [searchCoin] = useSearchCoinMutation()
    const handleSearch = async (text) => {
        setSearch(text)

        if (text.length > 1) {
            const res = await searchCoin({text})
            setResultSearch(res.data.coins)
        } else {
            setResultSearch([])
        }

    }
    const debouncedSearch = useDebounce(handleSearch, 500)

    const onChange = async e => {
        setSearch(e.target.value)
        await debouncedSearch(e.target.value)
    }

    return (
        <main className="page">
            <section className="page__main-title main-title container">
                <div className="main-title__block">
                    <h1 className="main-title__title">Hamker</h1><span>i</span>
                </div>

                <div className={`main-title__search search ${search.length ? 'dropdown-open' : null}`}>
                    <input value={search} onChange={onChange} type="text" name="search" className="search__input"
                           placeholder={'Введіть свою улюблену криптовалюту'}/>
                    <div className="search__placeholder">
                        <picture>
                            <source srcSet={require("../assets/img/lupa.webp")} type="image/webp"/>
                            <img src={require("../assets/img/lupa.png")} alt="search"/>
                        </picture>
                    </div>
                    <div style={{display: search.length>1 ? 'block' : 'none'}} className="main-title_search-dropdown">

                        {
                            resultSearch.map(coin => (
                                <div onClick={()=>navigate(`/project/${coin.name}`)} className="main-title_search-dropdown_option" key={coin._id}>
                                        <img src={coin.img} alt="" className="main-title_search-dropdown_option_icon"/>
                                    <span
                                        className="main-title_search-dropdown_option_crypto-project-name">{coin.full_name}</span>
                                    <span
                                        className="main-title_search-dropdown_option_crypto-project-ticker">{coin.name}</span>
                                </div>
                            ))
                        }


                    </div>
                </div>

                <div className="page__hachtag hachtag">
                    <nav className="hachtag__nav nav-hachtag">
                        <ul className="nav-hachtag__list">
                            {
                                hashtags.map(ht => <li className="nav-hachtag__list-item" key={ht}><Link
                                    to={`/project/${ht}`}>#{ht}</Link></li>)
                            }


                        </ul>
                    </nav>
                </div>

            </section>


        </main>
    );
};

export default Main;

{/*        <Stack height={"100vh"} width={'100vw'} display={'flex'} alignItems={'center'} sx={{paddingTop: '10vw'}}>
    <Typography fontSize={36} fontWeight={700} color={'#56585a'}>
        Головна
    </Typography>

    <TextField variant={'standard'} placeholder={'Введіть свою улюблену криптовалюту'} value={search} onChange={onChange}
               InputProps={{disableUnderline: true,startAdornment: (
                       <InputAdornment position="start">
                           <SearchIcon />
                       </InputAdornment>
                   )}}
               sx={{background: '#fff', width: 400, margin: 2, borderRadius: 46, padding: '8px 16px', boxShadow:'0px 3px 5px 0px rgb(0 0 0 / 20%)'}}
    />


    {resultSearch.length ?
        <Stack borderRadius={2} bgcolor={'#fff'} maxHeight={300}
               sx={{
                   overflowY: 'scroll',
                   boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
               }}
        >
            {
                resultSearch?.map(coin => <DropDownCoin key={coin._id} coin={coin}/>)
            }

        </Stack> :
        <Stack marginTop={2} gap={1} display={'flex'} flexDirection={'row'} width={350} flexWrap={'wrap'}>
            {
                hashtags.map(ht => (
                    <Typography fontWeight={300} color={'#B6BBBE'} key={ht}
                                onClick={() => navigate(`/project/${ht}`)}
                                sx={{
                                    "&:hover": {background: '#F5F5F5'},
                                    padding: '2px 8px',
                                    cursor: 'pointer',
                                    borderRadius: 1
                                }}>
                        {`#${ht}`}
                    </Typography>
                ))
            }
        </Stack>


    }

</Stack>
*/
}