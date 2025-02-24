import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignupSection = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", '50135f3c-df4f-4bde-9816-6337b37f524a');

      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
      });

      const data = await response.json();

      if (data.success) {
          setResult("");
          toast.success('Form submitted successfully!');
          event.target.reset();
      } else {
          console.log("Error", data);
          toast.error(data.message);
          setResult('');
      }
  };

  return (
    <section className="w-full py-20 bg-white">
        <div className='mb-5'>
            <h1 className='text-2xl font-bold text-center text-[#0000BF] sm:text-3xl md:text-4xl mb-5'>
              Get in touch with us !
            </h1>
            <p className='max-w-90 sm:max-w-90 text-center mx-auto text-gray-500 font-light'>
              Unlock growth opportunities with NOVA X through innovative, non-collateral-based financing solutions that expand your capital and connect you with forward-thinking investors to turn your business vision into reality.
            </p>
        </div>
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-20 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-4xl text-[#0000BF]">
            You want to get in touch with us ?
          </h1>
          <p className="leading-relaxed mt-4 font-light">
          Unlock growth opportunities with NOVA X through innovative, non-collateral-based financing solutions that expand your capital and connect you with forward-thinking investors to turn your business vision into reality.
          </p>
        </div>
        <form onSubmit={onSubmit} className="lg:w-2/6 md:w-1/2 bg-white bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 border-2 border-[#0000BF]">
            <h2 className="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
              <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-[#0000BF]">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="w-full bg-white bg-opacity-20 focus:bg-transparent focus:ring-1 focus:ring-[#0000BF] rounded border border-gray-300 focus:border-[#0000BF]/50 text-base outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                  placeholder='Your Full Name'
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-[#0000BF]">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white bg-opacity-20 focus:bg-transparent focus:ring-1 focus:ring-[#0000BF] rounded border border-gray-300 focus:border-[#0000BF]/50 text-base outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                  placeholder='Your Email'
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="text" className="leading-7 text-sm text-[#0000BF]">Message</label>
                <textarea 
                  className="w-full rounded px-4 py-3 mt-2 h-25 resize-none focus:outline-none focus:ring-1 focus:ring-[#0000BF] focus:border-[#0000BF] border border-gray-300"
                  name="Message"
                  required
                  placeholder="Message"
                />
              </div>
              <button className="text-white bg-[#0000BF] border-0 py-2 px-8 focus:outline-none cursor-pointer hover:shadow-md shadow-[#0000BF]/50 rounded text-lg mb-2 mt-2">
              {result ? result : 'send message'}
              </button>
              <p className="text-gray-500 mt-3 font-light">Literally you probably havent heard of Nova X.</p>
        </form>
      </div>
    </section>
  );
};

export default SignupSection;
