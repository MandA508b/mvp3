import React from 'react';
import {Button, MenuItem, Select, Stack, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {Outlet} from "react-router";
import {logoutUser, selectCurrentToken} from "../redux/user/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {useLogoutMutation} from "../redux/user/userApiSlice";
import Header from "./Header";

function refreshPage() {
    window.location.reload(false);
}

const Layout = () => {

    return (
        <div className="App">
            <Header/>
            <Outlet/>
            <footer className="footer ">
                <div className="footer__body container">
                    <div className="footer__copy">Copyright (c) Crypto Analytics</div>
                    <div className="footer__info">
                        <a href="#" className="footer__contact">Контакти</a>
                        <a href="#" className="footer__privacy">Політика Конфіденційності</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;