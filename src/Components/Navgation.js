import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

 const Navgation = () => {
    return (
        <nav className ="nav">
          <Link to = "/"><h1>Home</h1></Link>
          <Link to ="/view"><h1>view</h1></Link>
        </nav>
    )
}
export default Navgation