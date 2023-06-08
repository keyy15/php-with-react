import React from 'react'
import Logo from '../assets/logo.png';
import { IoReorderThree } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} className='rounded'/>
            <div className='hiddenLinks'>
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <button onClick={() => alert(123)}>
                <IoReorderThree/>
            </button>
        </div>
    </div>
  )
}

export default Navbar