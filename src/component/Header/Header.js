import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h1> shahadat</h1>
        <img src={logo}  alt=''/>
        
        <nav>
            <a href='/shop'>shop</a>
            <a href='/review'> order review</a>
            <a href='/manage'>manage inventory</a>
        </nav>
        


        </div>
    );
};

export default Header;