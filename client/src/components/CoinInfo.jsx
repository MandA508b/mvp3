import React, {useEffect, useState} from 'react';
import {Card, Tooltip, Typography} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

const CoinInfo = ({name, value, isBlured = false, limits, reverse, desc}) => {
    const [color, setColor] = useState('#000000')
    useEffect(() => {
        if (!!limits.min && !!limits.max && !!value) {
            if (value < limits.min)
                setColor('#FF0000')
            if (value > limits.max)
                setColor('#008000')
            if (reverse) {
                if (value < limits.min) setColor('#008000')
                if (value > limits.max) setColor('#FF0000')

            }
        }
    }, [])
    return (
        <div className="grid__item grid__result-search" style={{filter: isBlured ? 'blur(4px)' : 'blur(0)'}}>
            <div className="grid__item-text">
                {name?.slice(0, 12)}
                <Tooltip title={desc}>
                    <span className="grid__item-i">i</span>
                </Tooltip>
            </div>
            <div className="grid__item-value" style={{color}}>{!!value ? value : '-'}</div>
        </div>
    );
};

export default CoinInfo;

{/*

        <Card sx={{
            display: 'flex',
            width: 330,
            justifyContent: 'space-between',
            padding: 1,
            background: 'inherit',
            boxShadow: 'none',
            borderBottom: '1px solid #000',
            borderRadius: 0,
            filter: isBlured ? 'blur(4px)' : 'blur(0)',
            alignItems: 'center'
        }}>
            <Typography fontSize={'12px'}>
                <Tooltip title={desc}><InfoIcon color={'primary'} fontSize={'small'}/></Tooltip> {name?.slice(0, 12)}:
            </Typography>
            <Typography fontWeight={700} color={color}>
                {!!value ? value : '-'}
            </Typography>
        </Card>

*/}