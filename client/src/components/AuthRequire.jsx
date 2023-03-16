import React, {useEffect} from 'react';
import {useLocation, Navigate, Outlet} from "react-router";
import jwt_decode from "jwt-decode";
import {setCredentials} from "../redux/user/userSlice";
import {useDispatch} from "react-redux";

const AuthRequire = () => {
    const token = localStorage.getItem('token')
    const location = useLocation()
    const dispatch = useDispatch()
    useEffect(()=>{
        if (!!token) {
            const userData = jwt_decode(token)
            dispatch(setCredentials({user: userData.login, accessToken: token}))
        }
    },[])
    return (
        token ?
            <Outlet/>
            :
            <Navigate to="/login" state={{from: location}} replace/>
    );
};

export default AuthRequire;