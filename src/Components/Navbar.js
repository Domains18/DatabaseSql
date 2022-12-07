import React, { useState } from 'react'
import logo from '../images/logo.svg';
import { FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
const Navbar = () => {
    useState= {isOpen: false}
   function  handleToggle(){
        this.setState({isOpen:! this.state.isOpen})
    }
  return (
    <nav className='navbar'>
        <div className="nav-center">
            <div className="nav-header">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                    <button type="button" className='nav-btn'><FaAlignRight/>
                    </button>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar