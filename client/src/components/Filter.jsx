import React, {useEffect, useState} from 'react';
import {Button, Dialog, Popover, Stack, TextField, Typography} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {useDispatch, useSelector} from "react-redux";
import {
    changeCurrentCoins, selectCurrentCoins, setData
} from "../redux/table/tableSlice";
import {selectCurrentGroup, setGroup, selectGroups} from "../redux/groups/groupsSlice";
import {useCreateGroupMutation} from "../redux/groups/groupApiSlice";
import {FixedSizeList as List} from 'react-window';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useFetchAllCoinsQuery, useSearchCoinMutation} from "../redux/table/tableApiSlice";
import useDebounce from "../hooks/useDebounce";

const initialGroupData = {
    "search_group": '',
    "name": '',
    "classification": '',
    "class": '',

    "type": '',

    "subtype": '',

    "expected_1_5_years": '',

    "percent_of_good_price": '',

    "percent_90_ath": '',

    "percent_93_ath": '',

    "percent_95_ath": '',

    "price": '',

    "percentage_of_the_market": '',

    "ath_percent": '',

    "ath_price": '',

    "ath_time": '',

    "x_history": '',

    "atl_percent": '',

    "atl_price": '',

    "atl_time": '',

    "max_supply": '',

    "max_cap": '',

    "percent__out_of_supply": '',

    "total_supply": '',

    "x_on_token_sales": '',

    "price_private_round": '',

    "price_ieo": '',

    "amount_ieo": '',

    "average_price": '',

    "total_involved": '',

    "percent_emission": '',

    "percent_emission_by_algorithm": '',

    "difference_between_emission": '',
    "emission_max_rate": '',
    "emission": '',
    "emission_price_after_with_inflation": '',
    "wallets": '',
    "wallet1": '',
    "wallet2": '',
    "wallet3": '',
    "wallet4": '',
    "wallet5": '',
    "number_of_funds_invested": '',
    "ratio_of_funds": '',
    "full_name": '',
    "img": '',
    "market_cap": ''
}
//
// const initialGroupData = {
//     name: '',
//     img: '0',
//     price: '0',
//     ath_price: '0',
//     ath_time: '0',
//     atl_price: '0',
//     atl_time: '0',
//     market_cap: '0',
//     total_supply: '0',
//     full_name: '0',
//     c1: '0',
//     c2: '0',
//     c3: '0',
//     c4: '0',
//     c5: '0',
//     c6: '0',
//     c7: '0',
//     c8: '0',
//     c9: '0',
//     c10: '0'
// }


const Filter = () => {
    const dispatch = useDispatch()
    const {data, isLoading, isSuccess} = useFetchAllCoinsQuery()
    const [allCoins, setAllCoins] = useState([])
    useEffect(() => {
        if (isSuccess) {
            dispatch(setData({data}))
            setResultSearch(data.map(elem => elem.name))
            setAllCoins(data.map(elem => elem.name))
        }
    }, [data])
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const [newGroup, setNewGroup] = useState(initialGroupData)
    const [createGroup] = useCreateGroupMutation()
    const handleChange = (key, value) => {
        setNewGroup(prev => {
            const group = {...prev}
            group[key] = value
            return group
        })
    }
    const [openDialog, setOpenDialog] = useState(false);


    const currentCoins = useSelector(selectCurrentCoins)
    const handleChangeCoins = (coin) => {
        dispatch(changeCurrentCoins(coin))
    }

    const CoinSelect = ({index, style}) => {

        const coin = resultSearch[index]

        return (
            <MenuItem sx={{...style, bgcolor: '#ecf0f4', '&:hover': {bgcolor: '#ecf0f4'}}} key={coin} value={coin}
                      onClick={() => handleChangeCoins(coin)}>
                <Checkbox checked={currentCoins.includes(coin)}/>
                <Typography color={'#000001'} primary={coin} sx={{fontFamily: "FuturaPT-Medium"}}>{coin}</Typography>
            </MenuItem>
        )
    }
    const groups = useSelector(selectGroups)
    const currentGroup = useSelector(selectCurrentGroup)
    const handleAdd = async () => {
        try {
            await createGroup(newGroup).unwrap()
            setOpenDialog(false)
            alert('Добавлено групу ' + newGroup.name + '. Оновіть сторінку')
            setNewGroup(initialGroupData)
        } catch (e) {
            console.log(e)
            alert('Виникла помилка при додаванні фільра( деталі в консолі')
        }

    }

    const handleChangeGroup = e => dispatch(setGroup({groupName: e.target.value}))


    const [search, setSearch] = useState('')
    const [resultSearch, setResultSearch] = useState(allCoins)
    const [searchCoin] = useSearchCoinMutation()
    const handleSearch = async (text) => {
        if (!text.length) {
            setResultSearch(allCoins)
        }
        if (text.length > 1) {
            const res = await searchCoin({text})
            setResultSearch(res.data.coins.map(elem => elem.name))
        }

    }
    const debouncedSearch = useDebounce(handleSearch, 500)

    const onChange = async e => {
        setSearch(e.target.value)
        await debouncedSearch(e.target.value)
    }

    if (!isSuccess || isLoading) return null
    return (
        <Stack width="100%"
               maxWidth="75vw"
               display="flex"
               flexDirection={{xs: "column", md: "row"}}
               alignItems="center"
               gap={1}
               bgcolor="#fff"
               borderRadius={'20px'}
               padding={'18px 24px 18px 36px'}
               justifyContent="space-evenly"
        >
            <Dialog maxWidth={false} open={openDialog} onClose={() => setOpenDialog(false)}>
                <Stack padding={2} bgcolor='#fff' borderRadius={2} alignItems={'center'}>
                    <Typography fontFamily={"FuturaPT-Medium"} fontSize={22}>Добавлення нової групи</Typography>
                    <Typography fontFamily={"FuturaPT-Medium"} fontSize={14} color={'grey'} marginBottom={1}>*поле name
                        обовязкове, значення 0 - не
                        показується. 1 - показується</Typography>
                    <Stack display='flex' flexDirection='row' gap={1} overflow={'scroll'} maxWidth={'85vw'}
                           height='100px'
                           alignItems={'center'}>
                        {
                            Object.keys(newGroup).map(key =>
                                <TextField sx={{minWidth: "100px"}} label={key} key={key} value={newGroup[key]}
                                           onChange={(e) => handleChange(key, e.target.value)}
                                />)
                        }
                    </Stack>
                    <Button sx={{width: '30%', marginTop: 1}} variant={'contained'} onClick={handleAdd}>Додати</Button>

                </Stack>
            </Dialog>
            <Typography fontFamily={"FuturaPT-Medium"} fontSize={18}>
                Сортування:
            </Typography>
            <FormControl sx={{m: 1, width: 260}} size="small">

                <Button onClick={handleClick} variant={'contained'}
                        sx={{
                            boxShadow: 'none',
                            width: 200,
                            bgcolor: '#ecf0f4',
                            color: '#000001',
                            '&:hover': {bgcolor: '#ecf0f4'}
                        }}>
                    <Typography fontFamily={"FuturaPT-Medium"} textOverflow={'ellipsis'}>Вибрати монети </Typography>

                    {
                        Boolean(anchorEl) ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>
                    }
                </Button>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom', horizontal: 'left',
                    }}
                >
                    <MenuItem key={'search'} sx={{
                        bgcolor: '#ecf0f4',
                        '&:hover': {bgcolor: '#ecf0f4'}
                    }}>
                        <TextField sx={{width: 160}} onChange={onChange} value={search} size={'small'}
                                   placeholder={'Пошук'}/>
                    </MenuItem>
                    <List
                        height={250}
                        itemCount={resultSearch?.length}
                        itemSize={35}
                        width={200}>


                        {CoinSelect}
                    </List>
                </Popover>

            </FormControl>

            <FormControl size='small' sx={{width: 200}}>
                <Select
                    value={`${currentGroup.name}`}
                    onChange={handleChangeGroup}
                    sx={{bgcolor: '#ecf0f4', color: '#000001', '&:hover': {bgcolor: '#ecf0f4'}, boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }}}
                >
                    <MenuItem sx={{bgcolor: '#ecf0f4', color: '#000001', '&:hover': {bgcolor: '#ecf0f4'}}}
                              onClick={() => setOpenDialog(true)}>
                        <Typography fontFamily={"FuturaPT-Medium"} fontSize={16}>Додати фільтр</Typography>

                    </MenuItem>

                    {groups?.map((group) => (
                        <MenuItem sx={{bgcolor: '#ecf0f4', color: '#000001', '&:hover': {bgcolor: '#ecf0f4'}}}
                                  key={group?.name} value={group?.name}>
                            <Typography fontFamily={"FuturaPT-Medium"} fontSize={16}>{group?.name}</Typography>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

        </Stack>
    );
};

export default Filter;
