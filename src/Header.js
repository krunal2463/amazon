import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';



function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  console.log(basket);

  return (
    <nav className="header">

      <Link to="/">
      <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" 
      alt="" className="header__logo" />
      </Link>

      <div className="header__search">
      <input type="text" className="header__searchInput" />
      <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'} className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello {!user ? "Guest" : user.email}</span>
            <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo"> & Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>

    </nav>
  )
}

export default Header

// logo on the left => img
// search box
// 3 Links
// Basket icon with number
