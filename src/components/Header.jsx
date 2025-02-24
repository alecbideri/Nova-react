import header from '../assets/Header.png';


const Header = () => {
  return (
      
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center min-h-[50vh] px-6 md:px-10 lg:px-16 py-32" id='home'>
      {/* Left Section */}
      <div className="max-w-xl order-last sm:order-first">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Empower Your Business, <br />
          <span className="text-[#0000BF]">Elevating Your Potential.</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Unlock growth opportunities with NOVA X through innovative, non-collateral-based financing 
          solutions that expand your capital and connect you with forward-thinking investors 
          to turn your business vision into reality.
        </p>
        <button className="bg-[#0000BF] text-white px-6 py-4 rounded mt-6 cursor-pointer hover:shadow-md shadow-[#0000BF]/50">
          Get started
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-shrink-0 mt-8 md:mt-0">
        <img
          src={header} 
          alt="Header"
          className="max-w-[400px] md:max-w-[500px] lg:max-w-[550px] w-full"
        />
      </div>
    </div>
  );
};

export default Header;
