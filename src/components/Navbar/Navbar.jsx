import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  useEffect(() => {
    // Perform any side effects here, if needed
    // For example, fetch data based on the selected menu item
  }, [menu]);
  

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>shopper</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}><Link to='/'>shop</Link>{menu === "shop" ? <hr/>:<></>}</li>
        <li onClick={() => setMenu("mens")}><Link to='/mens'>men</Link>{menu === "mens" ? <hr/>:<></>}</li>
        <li onClick={() => setMenu("womens")}><Link to='/womens'>women</Link>{menu === "womens" ? <hr/>:<></>}</li>
        <li onClick={() => setMenu("kids")}><Link to='/kids'>kids</Link>{menu === "kids" ? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        
        <div className="nav-cart-count">{0}</div>
      </div>
    </div>
  );
};

export default Navbar;