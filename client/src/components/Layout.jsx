import React from 'react';
import {Outlet} from "react-router";
import Header from "./Header";



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