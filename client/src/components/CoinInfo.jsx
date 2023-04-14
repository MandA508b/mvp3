import React, {useEffect, useState} from 'react';
import {Tooltip} from "@mui/material";

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

        if(typeof value === 'number' || name === 'MARKET CAP' || name === 'TOTAL SUPPLY'){
            if(name === 'MARKET CAP' || name === 'TOTAL SUPPLY') {
                setModifiedValue(Number(value))
            }
            if(modifiedValue>=1000000000000){
                setModifiedValue(`${(modifiedValue/1000000000000).toFixed(2)} T`)
            }else if(modifiedValue>=1000000000){
                setModifiedValue(`${(modifiedValue/1000000000).toFixed(2)} B`)

            }else if(modifiedValue>=1000000){
                setModifiedValue(`${(modifiedValue/1000000).toFixed(2)} M`)

            }else{
                try{
                    setModifiedValue(value.toFixed(2))
                }catch (e) {
                    console.log(name)
                }
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
            <div className="grid__item-value" style={{color}}>{!!modifiedValue ? modifiedValue : '-'}</div>
        </div>
    );
};

export default CoinInfo;
