import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Product from './components/Product'
import Services from './components/Services'
import Feautures from './components/Feautures'

const App = () => {
  return (
    <div className='w-full overflow-hidden flex flex-col items-center'>
      <Navbar />
      <Header />
      <div className='my-16 w-full'> 
        <Services />
        <Feautures/>
      </div>
      <div className='my-16 w-full'>
        <Product />
      </div>
    </div>
  )
}


export default App