import React from 'react';
import {Stack, Typography} from "@mui/material";

const ResultSearchElement = ({text, fontSize=18, fontWeight=400, color='#000'}) => {
    return (
        <Stack width={280}>
            <Typography fontSize={fontSize} fontWeight={fontWeight} color={color} padding={2} borderBottom={'1px solid #888888'} textAlign={'center'}>
                {text}
            </Typography>
        </Stack>
    );
};

export default ResultSearchElement;