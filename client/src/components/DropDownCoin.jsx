import React from 'react';
import {Avatar, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const DropDownCoin = ({coin}) => {
    const navigate = useNavigate()
    return (
        <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2} bgcolor={'#fff'} padding={1} width={390}
            sx={{'&:hover':{background:'lightgrey'}, cursor:'pointer'}}
               onClick={()=>navigate('/project/'+coin.name)}
        >
            <Avatar src={coin.img}/>
            <Typography fontWeight={700} fontSize={18}>{coin.name}</Typography>
            <Typography color={'grey'} >{coin.full_name}</Typography>
        </Stack>
    );
};

export default DropDownCoin;