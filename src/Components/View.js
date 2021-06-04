import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { Table , Button} from 'reactstrap'
const View = ({Product}) => {
    // console.log(Product)
    const dispatch = useDispatch()
    return (
        <div>
            <Table>
                <thead>
                    <tr style={{paddingLeft:"50%"}}>
                        <th>SAVED DATA TABLE</th>
                    </tr>
                    <tr>
                        <th>COMPANY NAME</th>
                        <th>SYMBOL</th>
                        <th>MARKET CAP</th>
                        <th></th>
                        <th>CURRENT PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(Product.cryptoProduct)}
                    {Product && Product.cryptoProduct.map((item , index) =>{
                       return(
                           <>
                               <tr id={index}>
                                   <td>{item.name}</td>
                                   <td>{item.symbol}</td>
                                   <td>{item.market_cap}</td>
                                   <td><Button color="primary" onClick={() =>dispatch({type:"DELETE_PRODUCT" , id:item.id , product:Product.cryptoProduct})}>DELETE</Button></td>
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

const mapStateToProps =(state) =>{
    return{Product:state.HomeR}
}

export default connect(mapStateToProps)(View)