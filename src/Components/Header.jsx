import React, { Component } from "react";
import logo from '../assets/images/icons/logo.png'
import searchLogo from '../assets/images/icons/search-icon.png'
import cart from '../assets/images/icons/cart.png'
class Header extends Component {
  render() {
    return (
      <>
        <header className="header-wrapper">
          <div className="internal-wrapper">
            <div className="header-links-wrapper">
              <ul>
                <li className="logo-link">
                  <a href="/">
                    <img src={logo} />
                  </a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="#">iphone</a>
                </li>
                <li>
                  <a href="#">ipad</a>
                </li>
                <li>
                  <a href="#">watch</a>
                </li>
                <li>
                  <a href="#">tv</a>
                </li>
                <li>
                  <a href="#">Music</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li className="search-link">
                  <a href="/search/">
                    <img src={searchLogo} />
                  </a>
                </li>
                <li className="cart-link">
                  <a href="/cart/">
                    <img src={cart} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default Header
