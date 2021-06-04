import React, { useState } from 'react'
import {Input, Table} from 'reactstrap'
 const Search = ({sendData}) => {
   console.log(sendData)
    const [search , setSearch] = useState('')
    const [data , setData] =useState(false)

    function handleInput(e){
        setSearch(
            
            e.target.name = e.target.value)
    }
    
    
    return (
        <>
        <div>
            <Input placeholder="search by Company Name"
                   type="text"
                   value={search}
                   name="search"
                   onChange={handleInput}
                   error={data}/>     
        </div>
       {sendData && sendData.map((item , index) =>{
           console.log(item.name)
           return(
               <>
               {search === item.name ? 
            
               <Table>
                   <tbody>
                       <tr>
                           <td>{item.name}</td>
                           <td>{item.symbol}</td>
                           <td>${item.market_cap}</td>
                           <td>${item.price}
                           <td>USD</td>
                           </td>
                       </tr>
                   </tbody>
               </Table> 
               : ""}
               </>
           )
       })}
       </>
    )
}
export default Search
