import React, {useState} from 'react';
import {useLoginMutation, useRegistrationMutation} from "../redux/user/userApiSlice";
import {useDispatch} from "react-redux";
import {setCredentials} from "../redux/user/userSlice";
import {useNavigate} from "react-router-dom";

const Login = ({ type="login"}) => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [confirm, setConfirm] = useState(false)

    const [registration] = useRegistrationMutation()
    const [handleLogin] = useLoginMutation()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        console.log(login, pass)
        e.preventDefault()
        if(!confirm) alert('Підтвердіть, що вам виповнилося 18 років, і ви погоджуєтесь з Умовами використання та Політикою конфіденційності.')
        if(login.length && pass.length && confirm) {
            try {
                if (type === 'login') {
                    const data = await handleLogin({login, password: pass}).unwrap()
                    dispatch(setCredentials(data))
                } else if (type === 'registration') {
                    await registration({login,password:pass})
                    alert(`Добавленно нового адміна! Логін: ${login} Пароль: ${pass}`)
                }

                navigate('/')
            } catch (e) {
                console.log(e)
                alert('Сталась помилка(')
            }
        }
    }
    return (
        <main className="page page_login">
            <section className="login container">
                <h2 className="project__title  project__title_login">Вхід (Реєстрація)</h2>
                <form name={'tarifForm'} onSubmit={handleSubmit} className="login_form">
                    <fieldset className="login_form_group_input">
                        <div className="login_input_email">
                            <input value={login} onChange={e=>setLogin(e.target.value)} placeholder="Логін"/>
                        </div>
                        <div className="login_input_pass">
                            <input value={pass} onChange={e=>setPass(e.target.value)} placeholder="Пароль"/>
                        </div>
                    </fieldset>
                    <a href="/" className="login_forget_pass">Забули пароль?</a>
                    <div className="age_proof_group">
                        <input onChange={e=>{
                            setConfirm(e.target.checked)
                            console.log(confirm)
                            }} type="checkbox" id="age_proof" name="age_proof"/>
                            <label htmlFor="age_proof" className="age_proof">Я підтверджую, що мені виповнилося 18
                                років, і я погоджуюся з Умовами використання та Політикою конфіденційності.</label>
                    </div>
                    <button onClick={handleSubmit} type="submit" form="tarifForm" className="table__button btn btn_table">Увійти</button>
                </form>
                <h3>Вхід через акаунт соцмереж</h3>
                <div className="login_networks">
                    <a href="/"><img alt={''} src={require('../assets/img/fb-network.png')}/></a>
                    <a href="/"><img alt={''} src={require('./../assets/img/g-network.png')}/></a>
                </div>
            </section>

        </main>
    );
};

export default Login;
{/*
import {Button, Stack, TextField, Typography} from "@mui/material";

<Stack padding={2} gap={1} display="flex" width={'fit-content'} flexDirection='row' alignItems='center' bgcolor="#fff"
               borderRadius={2}>
            <Typography>{type==='login' ? 'Вхід' : "Добавлення адміна"}</Typography>
            <TextField size='small' value={login} label="Login" onChange={e => setLogin(e.target.value)}/>
            <TextField size='small' value={pass} label='Password' onChange={e => setPass(e.target.value)}/>
            <Button color='success' variant='contained' onClick={handleSubmit}>
                {type==='login' ? 'Вхід' : '+'}
            </Button>
        </Stack>

*/}