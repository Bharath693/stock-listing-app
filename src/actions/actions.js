import React, { useEffect, useState } from 'react'
import axios from "axios"


  export const HomeReducer=() =>{
    return(dispatch) =>{
        return axios.get("https://api.nomics.com/v1/currencies/ticker?key=5c80af4aa2bfeb971fcd0b05102f127afae17de1&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1")
        .then((res) =>{
            dispatch(cryptodata(res.data))
        })
    }
}

export const cryptodata =(data) =>{
     return{
         type:"Stock_Details_Table",
         data:data
     }
}