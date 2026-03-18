import React, { Component } from 'react'
import './Rate.css'
export default class Rate extends Component {
  render() {
    return (
      <>
      <div className='container'>
        <h1>Rate this mac out of 10</h1>
        <div className='btn'>
            <button>Rate Up</button>
            <button>Rate Down</button>
        </div>
        <div id='textdisplay'>
            <h2>Average Rating: 5.0</h2>
        </div>
      </div>
      </>
    )
  }
}
