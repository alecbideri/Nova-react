import React from 'react';
import { HandCoins } from 'lucide-react';

const Services = () => {
  return (
    <section className='w-full bg-[#F1F1FF] py-20' id='services'>
      <div className='flex flex-col items-center gap-8'>
        <div className='mb-10'>
          <h1 className='text-2xl font-bold text-center text-[#0000BF] sm:text-3xl md:text-4xl mb-2'>
            Services
          </h1>
          <p className='max-w-90 sm:max-w-90 text-center text-gray-500 font-light'>
            Unlock growth opportunities with NOVA X through innovative, non-collateral-based financing solutions that expand your capital and connect you with forward-thinking investors to turn your business vision into reality.
          </p>
        </div>
        {/* First section of the card */}
        <div className='flex flex-col md:flex-row justify-between gap-8 p-6 md:px-20 lg:px-32'>
          {Array(3).fill(null).map((_, idx) => (
            <div key={idx} className='max-w-[100%] sm:max-w-[45%] md:max-w-[30%] mx-auto flex flex-col items-center gap-5 border p-5 border-[#0000BF] bg-white'>
              <div>
                <HandCoins color='#0000BF' size={48} />
              </div>
              <div>
                <h3 className='text-lg sm:text-xl text-[#0000BF] underline underline-offset-15 decoration-1 decoration-[#0000BF] text-center duration-300'>
                  Providing Loans
                </h3>
                <p className='text-gray-500 mt-4 text-center text-[12px] sm:text-[14px] md:text-[16px] duration-300 mx-auto'>
                  Unlock growth opportunities with NOVA X through innovative, non-collateral-based financing solutions that expand your capital and connect you with forward-thinking investors to turn your business vision into reality.
                </p>
                <div className='flex justify-center mt-6'>
                  <button className='text-white bg-[#0000BF] px-4 py-3 rounded text-sm duration-300 cursor-pointer hover:shadow-md shadow-[#0000BF]/50'>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

          {/* Second section of the card */}

        <div className='flex flex-col md:flex-row justify-between gap-8 p-6 md:px-20 lg:px-32'>
          {Array(3).fill(null).map((_, idx) => (
            <div key={idx} className='max-w-[100%] sm:max-w-[45%] md:max-w-[30%] mx-auto flex flex-col items-center gap-5 border p-5 border-[#0000BF] bg-white'>
              <div>
                <HandCoins color='#0000BF' size={48} />
              </div>
              <div>
                <h3 className='text-lg sm:text-xl text-[#0000BF] underline underline-offset-15 decoration-1 decoration-[#0000BF] text-center duration-300'>
                  Providing Loans
                </h3>
                <p className='text-gray-500 mt-4 text-center text-[12px] sm:text-[14px] md:text-[16px] duration-300 mx-auto'>
                  Unlock growth opportunities with NOVA X through innovative, non-collateral-based financing solutions that expand your capital and connect you with forward-thinking investors to turn your business vision into reality.
                </p>
                <div className='flex justify-center mt-6'>
                  <button className='text-white bg-[#0000BF] px-4 py-3 rounded text-sm duration-300 cursor-pointer hover:shadow-md shadow-[#0000BF]/50'>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
