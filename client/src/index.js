import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {store} from './redux/store'
import {BrowserRouter} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import './assets/fonts/FuturaPT-Bold.woff2';
import './assets/fonts/FuturaPT-Demi.woff2';
import './assets/fonts/FuturaPT-Medium.woff2';
import './index.css';
import './App.css'

const theme = createTheme({
    palette: {
        primary: {
            main: '#7059e1',
        },
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
);
