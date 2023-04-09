import { useState} from "react";
import {Button, Popover, Stack, TextField} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import {useChangeExcelValueMutation} from "../redux/table/tableApiSlice";


const ChangeExcelValue = ({name,data}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState(data.value);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [changeExcelValue] = useChangeExcelValueMutation()
    const handleChangeExcelValue= async () => {

        try {
            await changeExcelValue({name, data:{[data.name]:Number(value)}})
            handleClose()
            alert(`${name} Нове значення ${data.name} = ${data.value} =)`)
        } catch (e) {
            alert('Щось пішло не так :/')
            console.log(e)
        }
    }
    if(value===undefined) return <div>-</div>

    return (
        <div>
            <Button aria-describedby={id} size={'small'} variant="contained" onClick={handleClick}>
                {data.value}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Stack display={'flex'} flexDirection={'row'} alignItems={'center'}>
                    <TextField InputProps={{border:'none'}} size={'small'} border={'none'} fullWidth value={value} onChange={e=>setValue(e.target.value)}/>
                    <CheckIcon onClick={handleChangeExcelValue} fontSize={'small'} color={'primary'} sx={{margin:1, cursor:'pointer'}} />
                </Stack>

            </Popover>
        </div>
    )

};

export default ChangeExcelValue;


