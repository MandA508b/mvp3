import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {logoutUser} from "./user/userSlice";

const baseQuery = fetchBaseQuery({
    baseUrl:"https://server.cryptoon.online",
    credentials: 'include',
    prepareHeaders: (headers) =>{
        const token = localStorage.getItem('token')
        if(token){
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api,extraOption)=>{
    let result = await baseQuery(args, api,extraOption)

    if(result?.error?.originalStatus === 401){

        api.dispatch(logoutUser())
    }
    return result
}
export const apiSlice = createApi({
    reducerPath:"appApi",
    baseQuery: baseQueryWithReauth,
    tagTypes:["User",'CoinDirection','filterCalculating','projectBlureFilter','projectVisibleFilter','excelValue'],
    endpoints:build=>({})
})
