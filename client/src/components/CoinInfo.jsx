import React, {useEffect, useState} from 'react';
import {Card, Tooltip, Typography} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

const CoinInfo = ({name, value, isBlured = false, limits, reverse, desc}) => {
    const [color, setColor] = useState('#000000')
    const [modifiedValue, setModifiedValue] = useState(value)
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


        if(typeof value === 'number'){

            if(value<1000000)setModifiedValue(value.toFixed(2))
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
            <div className="grid__item-value" style={{color}}>{!!modifiedValue ? modifiedValue : '-'}</div>
        </div>
    );
};

export default CoinInfo;
