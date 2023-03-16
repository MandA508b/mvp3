import React, {useState} from 'react';
import {
    useDeleteUserMutation,
    useGetAllUsersQuery,
    useRegistrationMutation
} from "../redux/user/userApiSlice";
import {Card, Stack, Typography, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


const Users = () => {
    const {data, isSuccess} = useGetAllUsersQuery()
    const [deleteUser] = useDeleteUserMutation()
    const handleDeleteUser = async (login) => deleteUser(login)
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [registration] = useRegistrationMutation()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (login.length && pass.length) {
            try {

                await registration({login, password: pass})
                alert(`Добавленно нового адміна! Логін: ${login} Пароль: ${pass}`)


            } catch (e) {
                console.log(e)
                alert('Сталась помилка(')
            }
        }
    }
    if (!isSuccess) return <Typography>loading</Typography>
    return (
        <Stack display={'flex'} justifyContent={'center'} width={'100vw'} alignItems={'center'}>
            <form name={'tarifForm'} onSubmit={handleSubmit} className="login_form">
                <fieldset className="login_form_group_input">
                    <div className="login_input_email">
                        <input value={login} onChange={e => setLogin(e.target.value)} placeholder="Логін"/>
                    </div>
                    <div className="login_input_pass">
                        <input value={pass} onChange={e => setPass(e.target.value)} placeholder="Пароль"/>
                    </div>
                </fieldset>

                <button onClick={handleSubmit} type="submit" form="tarifForm"
                        className="table__button btn btn_table">Добавити
                </button>
            </form>
            <Typography variant="h4" color="#56585a" fontWeight={700}>Користувачі</Typography>
            <Stack display={'flex'} width={'80vw'} gap={1} flexDirection={'row'}>
                {
                    data.map((user, index) => (
                        <Tooltip key={user.login} title={user.time ? user?.time : ''}>
                            <Card
                                sx={{width: 'fit-content', display: 'flex', alignItems: 'center', padding: 1, gap: 1}}>
                                <Typography fontSize={22}>{`${index + 1}. ${user.login}`}</Typography>
                                <DeleteIcon sx={{cursor: 'pointer'}} onClick={() => handleDeleteUser(user.login)}
                                            color={'error'}/>
                            </Card>
                        </Tooltip>

                    ))
                }
            </Stack>
        </Stack>
    );
};

export default Users;