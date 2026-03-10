import React, { Component } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import MacBook from './Components/MacBook'

export default class App extends Component {
  render() {
    return (
      <div className='outer-wrapper'>
       <Header />
       <MacBook />
       <Footer />
      </div>
    )
  }
}
