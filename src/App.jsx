import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Product from './components/Product'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar/>
      <Header/>
      <Product/>
    </div>
  )
}

export default App