import {useState} from "react";
import {Button, Popover, Stack, TextField} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import {useChangeExcelValueMutation} from "../redux/table/tableApiSlice";


const ChangeExcelValue = ({name,data}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [min, setMin] = useState(data.min);
    const [max, setMax] = useState(data.max);
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
            const resMax = await changeExcelValue({name: 'lower limit', data:{[name]:Number(min)}})
            const resMin = await changeExcelValue({name:'upper limit',data:{[name]:Number(max)}})
            handleClose()
            alert(`Ви успішно змінили ExcelValue поля ${name} на min=${min} max=${max} =)`)
        } catch (e) {
            alert('Щось пішло не так :/')
            console.log(e)
        }
    }
    if(!Object.keys(data).length) return <div>-</div>

    return (
        <div>
            <Button aria-describedby={id} size={'small'} variant="contained" onClick={handleClick}>
                {typeof data.min ===  'number'  ? `${data.min} - ${data.max}` : 'change'}
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
                    <TextField InputProps={{border:'none'}} size={'small'} border={'none'} fullWidth value={min} onChange={e=>setMin(e.target.value)}/>
                    <TextField InputProps={{border:'none'}} size={'small'} border={'none'} fullWidth value={max} onChange={e=>setMax(e.target.value)}/>
                    <CheckIcon onClick={handleChangeExcelValue} fontSize={'small'} color={'primary'} sx={{margin:1, cursor:'pointer'}} />
                </Stack>

            </Popover>
        </div>
    )

};

export default ChangeExcelValue;


