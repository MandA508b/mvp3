import React, { useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
    Box,
    Button,
    CircularProgress,
    Stack,
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector} from "react-redux";
import {
    selectCurrentData,
    selectCurrentCoins,
    selectChangedCoinsNames
} from "../redux/table/tableSlice";
import Row from "./Row";
import {selectCurrentGroup} from "../redux/groups/groupsSlice";
import {useSaveCoinMutation} from "../redux/table/tableApiSlice";
import Settings from "./Settings";


const TableComponent = () => {
    const [settings, setSettings] = useState(false)
    const data = useSelector(selectCurrentData)
    const group = useSelector(selectCurrentGroup)
    const selectedCoins = useSelector(selectCurrentCoins)
    const changedCoinsNames = useSelector(selectChangedCoinsNames)
    const [saveCoin] = useSaveCoinMutation()
    const [isSaving, setIsSaving] =useState(false)
    const handleSave = async ()=>{
        setIsSaving(true)
        try{
            for(let coinName of changedCoinsNames){
                const coin = data.find(elem=>elem.name===coinName)
                const res = await saveCoin(coin).unwrap()
                console.log(res)
            }
            alert("Данні збережено успішно!")
        }catch (e) {
            alert('error, info in console')
            console.log(e)
        }finally {
            setIsSaving(false)
        }

    }
    if(isSaving) return (
        <Stack display={'flex'} width={'100vw'} height={'100vh'} alignItems={'center'} justifyContent={'center'}>
            <CircularProgress size={300}/>
        </Stack>

    )
    return (
        <Box sx={{padding:2, maxWidth:"90vw"}} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={1}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow  sx={{background:'#ecf0f4'}}>
                            <TableCell sx={{fontFamily: "FuturaPT-Demi", fontSize:16}}>Coin</TableCell>
                            <TableCell sx={{fontFamily: "FuturaPT-Demi", fontSize:16}}>Full Name</TableCell>
                            {
                                Object.keys(group).map(elem=>{
                                    if(group[elem] && elem!=="name" && elem!=='full_name'){
                                        return (
                                            <TableCell sx={{background:'#ecf0f4', fontFamily: "FuturaPT-Demi", fontSize:16}} key={elem} align="center">

                                                {elem.toUpperCase().replaceAll("_"," ")}
                                            </TableCell>
                                        )
                                    }else return null
                                })
                            }
                            <TableCell  onClick={()=>setSettings(prev=>!prev)} sx={{cursor:'pointer',background:'#ecf0f4'}}><SettingsIcon/></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <Settings show={settings} setShow={setSettings}/>
                        {data?.map((row) =>selectedCoins.includes(row.name) ? <Row row={row}  key={row.name}/> : null)}

                    </TableBody>
                </Table>
            </TableContainer>
            <Button sx={{padding:'12px 44px', borderRadius:20,   fontFamily: "FuturaPT-Medium"}}  onClick={handleSave} variant={'contained'} size={'large'}>Зберегти</Button>
        </Box>

    );
};

export default TableComponent;