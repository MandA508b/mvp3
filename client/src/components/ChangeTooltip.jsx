import {useState} from "react";
import {Button, Popover, Stack, TextField} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import {useChangeBlureFilterMutation, useChangeCoinTooltipMutation} from "../redux/table/tableApiSlice";


const ChangeTooltip = ({name,tt}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [text, setText] = useState(tt);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [changeTooltip] = useChangeCoinTooltipMutation()
    const handleChangeTooltip = async () => {
        const res = {}
        res[name] = text
        try {
            await changeTooltip({coinTooltipData: res})
            handleClose()
            alert(`Ви успішно змінили опис(tooltip) поля ${name} на ${text} =)`)
        } catch (e) {
            alert('Щось пішло не так :/')
            console.log(e)
        }
    }

    return (
        <div>
            <Button aria-describedby={id} size={'small'} variant="contained" onClick={handleClick}>
                change
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
                    <TextField InputProps={{border:'none'}} size={'small'} border={'none'} fullWidth value={text} onChange={e=>setText(e.target.value)}/>
                    <CheckIcon onClick={handleChangeTooltip} fontSize={'small'} color={'primary'} sx={{margin:1, cursor:'pointer'}} />
                </Stack>

            </Popover>
        </div>
    )

};

export default ChangeTooltip;