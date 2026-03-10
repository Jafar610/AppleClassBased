import React, { Component } from 'react'
import macBook from '../assets/images/home/mac-laptop.jpg'
export default class MacBook extends Component {
  render() {
    return (
      <section className="main-highlight-wrapper">
        <div className="internal-wrapper">
          <div className="model">16-inch model</div>

          <div className="product-title">MacBook Pro</div>

          <div className="brief-description">The best for the brightest.</div>

          <div className="links-wrapper">
            <ul>
              <li><a href="">Learn more</a></li>
              <li><a href="">Buy</a></li>
            </ul>
          </div>

          <div className="main-image-wrapper">
            <img src={macBook} />
          </div>
        </div>
      </section>
    )
  }
}
