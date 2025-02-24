import product from '../assets/product.png'

const Product = () => {
  return (
    <section className='w-full py-20 bg-[#F1F1FF] md:px-4 lg:px-10 px-4 sm:px-6' id='product'>
        <div className='flex flex-col items-center mx-auto w-full overflow-hidden'>
        <h1 className='text-2xl font-bold text-[#0000BF] sm:text-4xl mb-2'>Product</h1>
        <p className='max-w-90 text-center text-gray-500 font-light mb-10'>Unlock growth opportunities with NOVA X through innovative, non-collateral-based financing solutions that expand your capital and connect you with forward-thinking investors to turn your business vision into reality.</p>
        <div className='flex flex-col items-center md:flex-row md:items-center'>
          <img src={product} alt="image about product" />
        <div className='flex flex-col items-center md:items-center mt-10'>
        <div className='flex flex-col items-start gap-4 '>
            <h1 className='text-xl font-medium text-gray-700'>Discover how we are going to change the business</h1>
            <p className='max-w-100 text-gray-600 font-light'>Unlock growth opportunities with NOVA X through innovative, non-collateral-based financing solutions that expand your capital and connect you with forward-thinking investors to turn your business vision into reality.</p>
          <div className='my-1 max-w-lg'>
          <button className='bg-[#0000BF] py-3 px-4 text-white rounded mt-6 cursor-pointer hover:shadow-md shadow-[#0000BF]/50'>Read More</button>
          </div>
          </div>
        </div>
        </div> 
      </div>
    </section>
  )
}

export default Product 