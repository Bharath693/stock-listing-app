import React, { useEffect, useState } from 'react'
import axios from 'axios'

let initialState ={
    cryptoProduct:[],
    message:""
}
export const HomeReducer = (state = initialState , action) => {  
   const {cryptoProduct, message} = state
   let product
   switch(action.type){
       case "SAVE_DATA":
        let check = cryptoProduct.find((item) =>item.id === action .id)

        if(check){
            return{cryptoProduct :[...cryptoProduct] ,message:"This Company list is already in the  table"}
        }
        else{
            product = action.data.find((items)=>items.id === action.id)
            //    console.log(product)
                return {cryptoProduct :[product, ...cryptoProduct]}
        }

        case "DELETE_PRODUCT":
            const filtered = cryptoProduct.filter(item =>item.id !== action.id)
            return {cryptoProduct :[...filtered]}
           default:
           return state
   }
}
