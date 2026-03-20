import React, { Component } from 'react'
import './Rate.css'
export default class Rate extends Component {
  constructor(){
    super()
    this.state = {
      rating: 5.0,
    }
  }

  increment = ()=>{
    this.setState((state)=>{
      return{
        rating: state.rating + 1
      }
    })
  }


  decrement = ()=>{
    this.setState((state)=>{
      return{
        rating: state.rating - 1
      }
    })
  }

  render() {
    return (
      <>
      <div className='container'>
        <h1>Please rate this mac out of 10</h1>
        <div className='btn'>
            <button className='btn1' onClick={this.increment}>Rate Up</button>
            <button className='btn2' onClick={this.decrement}>Rate Down</button>
        </div>
        <div id='textdisplay'>
            <h2>Average Rating: {this.state.rating}</h2>
        </div>
      </div>
      </>
    )
  }
}
