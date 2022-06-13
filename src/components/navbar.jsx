import React, {useState} from "react";
import logo from '../images/images.png';
//  import {link} from 'react-scroll';

function Navbar(){

   const [nav,setnav]= useState(false);

   const changeBackgorund = () => {
       if(window.scrollY>=50){
           setnav(true);
       }
       else{
           setnav(false);
       }
   } 
   window.addEventListener('scroll',changeBackgorund);
    return (
        <nav className={nav ? "nav active" : "nav"}>
                <a href="#" className="gym"><img src={logo} alt='' /></a>
                <input className='menu-btn' type='checkbox' id='menu-btn' />
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className="menu">
                    <a href="#"><li>Deals</li></a>
                    <a href="#" ><li>Offers</li></a>
                    <a href="#"><li>Features</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Contact</li></a>
                </ul>
        </nav>
    )
}

export default Navbar;