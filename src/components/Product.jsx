import React from 'react'
import product from '../assets/product.png'

const Product = () => {
  return (
    <div className='flex flex-col items-center bg-[#F1F1FF] mx-auto md:px-20 lg:px-32 w-full overflow-hidden' id='product'>
      <h1 className='text-2xl font-bold text-[#0000BF] sm:text-4xl mb-2 mt-10'>Product</h1>
      <p className='max-w-90 text-center text-gray-500 font-light'>Unlock growth opportunities with NOVA X through innovative, non-collateral-based financing solutions that expand your capital and connect you with forward-thinking investors to turn your business vision into reality.</p>
      <div className='flex flex-col items-center md:flex-row md:items-center'>
        <img src={product} alt="image about product" />
      <div className='flex flex-col items-center md:items-center mt-10'>
      <div className='grid grid-cols-1 gap-6 2xl:pr-28'>
          <h1 className='text-xl font-medium text-gray-700'>Discover how we are going to change the business</h1>
          <p className='max-w-120 text-gray-600 font-light'>Unlock growth opportunities with NOVA X through innovative, non-collateral-based financing solutions that expand your capital and connect you with forward-thinking investors to turn your business vision into reality.</p>
         <div className='my-1 max-w-lg'>
         <button className='bg-[#0000BF] py-3 px-4 text-white rounded mt-6'>Read More</button>
         </div>
        </div>
      </div>
      </div> 
    </div>
  )
}

export default Product 