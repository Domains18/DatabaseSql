import React, { useState } from 'react'
import logo from '../images/logo.svg';
import { FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
const Navbar = () => {
    useState= {isOpen: false,}
   function  handleToggle(){
        this.setState({isOpen:! this.state.isOpen})
    }
  return (
    <nav className='navbar'>
        <div className="nav-center">
            <div className="nav-header">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <button type='button' className='nav-btn'
                onClick={handleToggle()}
                >
                    <FaAlignRight/>
                </button>
            </div>
            <ul className={this.state.isOpen ? "nav-links show-nav":"nav-links" }></ul>
        </div>
    </nav>
  )
}

export default Navbar