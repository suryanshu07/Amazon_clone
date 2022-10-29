import React from 'react';
import "./Nav.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue} from "./StateProvider";

function Nav() {
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="Nav">
    
        <Link to="/">
        <img 
            className="logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
        />
        </Link>
        

    <div className="search">
        <input className="input" type="text"/>
        <SearchIcon className="searchIcon"/>
    </div>

    <div className="children">

        <div className="option">
            <span className="line1"
            >Hello Guest</span>
            <span className="line2">Sign In</span>
        </div>

        <div className="option">
            <span className="line1"
            >Returns</span>
            <span className="line2">& Orders</span>
        </div>

        <div className="option">
            <span className="line1"
            >Your</span>
            <span className="line2">Prime</span>
        </div>
        
        <Link to="/checkout">
            <div className="optionBasket">
                <ShoppingBasketIcon />
                <span className="line1 basketCount">
                {basket?.length}
                </span>
            </div>
        </Link>
        
    </div>
  
  </div>
  
  )
}

export default Nav;