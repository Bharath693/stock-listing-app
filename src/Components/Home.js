import React,{useEffect, useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Table, Input, Button } from 'reactstrap'
import {connect} from 'react-redux'
import {HomeReducer} from '../actions/actions'
import { useDispatch } from 'react-redux'

const Home = () => {
    
    const dispatch = useDispatch()
    const [data,setData] = useState([])
    // console.log(data)
    useEffect(() =>{
        fetch("https://api.nomics.com/v1/currencies/ticker?key=5c80af4aa2bfeb971fcd0b05102f127afae17de1&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1")
        .then(res =>res.json())
        .then(result =>setData(result))
        .catch(err=>err.message)
    },[])
    
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Stock details Table</th>
                        <th><Input placeholder="search by company name"/></th>
                    </tr>
                    <tr>
                        <th>COMPANY NAME</th>
                        <th>SYMBOL</th>
                        <th>MARKET CAP</th>
                        <th></th>
                        <th>CURRENT PRICE</th>
                    </tr>
                </thead>
                    <tbody >
                       {data && data.map((item , index) =>{
                        //    console.log(item)
                           return(
                               <>
                               <tr>
                                   <td>{item.name}</td>
                                   <td>{item.symbol}</td>
                                   <td>{item.market_cap}</td>
                                   <td><Button color="primary" onClick={()=>dispatch({type :"SAVE_DATA", id:item.id , data})}>Save Data</Button></td>
                                   <td>${item.price}
                                   <td>USD</td>
                                   </td>
                                </tr>
                               </>
                           )
                       })}
                    </tbody>
            </Table>
        </div>
    )
}

export default Home