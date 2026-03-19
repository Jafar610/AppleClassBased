import React, { Component } from 'react'
import './Rate.css'
export default class Rate extends Component {
  render() {
    return (
      <>
      <div className='container'>
        <h1>Please rate this mac out of 10</h1>
        <div className='btn'>
            <button className='btn1'>Rate Up</button>
            <button className='btn2'>Rate Down</button>
        </div>
        <div id='textdisplay'>
            <h2>Average Rating: 5.0</h2>
        </div>
      </div>
      </>
    )
  }
}
