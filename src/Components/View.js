import React from 'react'
import './Home.css'
import Google from '../Assests/GOOGL.png'
import Facebook from '../Assests/FB.png'
import Amazone from '../Assests/AMZN.svg'
import { connect, useDispatch } from 'react-redux'
import { Table , Button} from 'reactstrap'
const View = ({Product}) => {
    // console.log(Product)
    const dispatch = useDispatch()
    return (
        <div>
            <div className="main">
            <div className="img1Container">
                <div className="img1">
                    <span>GOOGL</span>
                    <img src={Google}/>
                </div>
                <h3>1515 USD</h3>
            </div>
            <div className="img1Container">
                <div className="img1">
                    <span>GOOGL</span>
                    <img src={Facebook}/>
                </div>
                <h3>1515 USD</h3>
            </div>
            <div className="img1Container">
                <div className="img1">
                    <span>GOOGL</span>
                    <img src={Amazone}/>
                </div>
                <h3>1515 USD</h3>
            </div>
            </div>
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
                    {/* {console.log(Product.cryptoProduct)} */}
                    {Product && Product.cryptoProduct.map((item , index) =>{
                        // console.log(item.name)
                       return(
                           <>
                               <tr>
                                   <td>{item.name}</td>
                                   <td>{item.symbol}</td>
                                   <td>{item.market_cap}</td>
                                   <td><Button color="primary" onClick={()=>dispatch({type :"DELETE_PRODUCT", id:item.id , Product})}>DELETE</Button></td>
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