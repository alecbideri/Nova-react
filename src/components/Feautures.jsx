import { SquareCheck } from 'lucide-react';
import dashboard from '../assets/dashboard.png'
import market from '../assets/market.png'
import payment from '../assets/payment.png'

const Features = () => {
  return (
    <section className='w-full py-20 bg-white px-4 lg:px-32' id='features'>
      <div className='flex flex-col items-center mb-15'>
        <h1 className='text-2xl text-center font-bold text-[#0000BF] sm:text-4xl mb-6'>Features</h1>
        <p className='max-w-100 text-center mx-auto text-gray-500 font-light'>
          Unlock growth opportunities with NOVA X through innovative, non-collateral-based financing solutions that expand your capital and connect you with forward-thinking investors to turn your business vision into reality.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 max-w-5xl mx-auto mb-20'>

      {/* Text section */}

        <div className='flex flex-col items-start gap-4 sm:px-10 lg:px-0'>
          <h3 className='text-xl text-[#0000BF] font-medium'>Clean Dashboard</h3>
          <p className='max-w-100 text-gray-600 font-light'>
            Unlock growth opportunities with NOVA X through innovative, non-collateral-based financing solutions that expand your capital and connect you with forward-thinking investors to turn your business vision into reality.
          </p>
          <ul className='flex flex-col gap-2 font-light'>
            <li className='flex gap-2 items-center'> <SquareCheck color='#0000BF' /><span>Clean statistics</span></li>
            <li className='flex gap-2 items-center'> <SquareCheck color='#0000BF' /><span>Clean statistics</span></li>
            <li className='flex gap-2 items-center'> <SquareCheck color='#0000BF'/><span>Clean statistics</span></li>  
          </ul>
        </div>

      {/* Image section */}

        <div className='order-first md:order-last'>
          <img src={dashboard} className='max-w-md h-auto' alt="Dashboard Illustration" />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 max-w-5xl mx-auto mb-20'>

      
       {/* Image section */}

      <div>
          <img src={market} className='max-w-md h-auto px-4 sm:px-6' alt="Dashboard Illustration" />
      </div>

      {/* Text section */}

        <div className='flex flex-col items-start gap-4 sm:px-10 lg:px-0 order-last md:order-first'>
          <h3 className='text-xl text-[#0000BF] font-medium'>Huge Market</h3>
          <p className='max-w-100 text-gray-600 font-light'>
            Unlock growth opportunities with NOVA X through innovative, non-collateral-based financing solutions that expand your capital and connect you with forward-thinking investors to turn your business vision into reality.
          </p>
          <ul className='flex flex-col gap-2 font-light'>
            <li className='flex gap-2 items-center'> <SquareCheck color='#0000BF' /><span>Clean statistics</span></li>
            <li className='flex gap-2 items-center'> <SquareCheck color='#0000BF' /><span>Clean statistics</span></li>
            <li className='flex gap-2 items-center'> <SquareCheck color='#0000BF'/><span>Clean statistics</span></li>  
          </ul>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 max-w-5xl mx-auto'>

      {/* Text section */}

        <div className='flex flex-col items-start gap-4 sm:px-10 lg:px-0'>
          <h3 className='text-xl text-[#0000BF] font-medium'>Safe payment</h3>
          <p className='max-w-100 text-gray-600 font-light'>
            Unlock growth opportunities with NOVA X through innovative, non-collateral-based financing solutions that expand your capital and connect you with forward-thinking investors to turn your business vision into reality.
          </p>
          <ul className='flex flex-col gap-2 font-light'>
            <li className='flex gap-2 items-center'> <SquareCheck color='#0000BF' /><span>Clean statistics</span></li>
            <li className='flex gap-2 items-center'> <SquareCheck color='#0000BF' /><span>Clean statistics</span></li>
            <li className='flex gap-2 items-center'> <SquareCheck color='#0000BF'/><span>Clean statistics</span></li>  
          </ul>
        </div>

      {/* Image section */}

        <div className='order-first md:order-last'>
          <img src={payment} className='max-w-md h-auto ' alt="Dashboard Illustration" />
        </div>
      </div>
    </section>
  )
}

export default Features
