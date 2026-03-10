import React, { Component } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import MacBook from './Components/MacBook'
import Iphone11Pro from './Components/Iphone11Pro'

export default class App extends Component {
  render() {
    return (
      <div className='outer-wrapper'>
       <Header />
       <MacBook />
       <Iphone11Pro />
       <Footer />
      </div>
    )
  }
}
