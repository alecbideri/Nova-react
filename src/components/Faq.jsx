const Faq = () => {
  return (
    <section className='w-full py-20 bg-[#F1F1FF]'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <div className='mb-10'>
            <h1 className='text-2xl font-bold text-center text-[#0000BF] sm:text-3xl md:text-4xl mb-2' id='faq'>
              Frequently asked questions
            </h1>
            <p className='max-w-90 sm:max-w-90 text-center mx-auto text-gray-500 font-light'>
              These are the most commonly asked questions about Nova X, cant find what you are looking ? Chat to our friendly team!
            </p>
          </div>

          <div className='flex justify-center gap-4 mb-10'>
            <button className='bg-white px-4 py-2 rounded-2xl border border-[#0000BF] font-light cursor-pointer hover:bg-[#0000BF] hover:text-white'>General</button>
            <button className='bg-white px-4 py-2 rounded-2xl border border-[#0000BF] font-light cursor-pointer hover:bg-[#0000BF] hover:text-white'>Pricing</button>
            <button className='bg-white px-4 py-2 rounded-2xl border border-[#0000BF] font-light cursor-pointer hover:bg-[#0000BF] hover:text-white'>Dashboard</button>
            <button className='bg-white px-4 py-2 rounded-2xl border border-[#0000BF] font-light cursor-pointer hover:bg-[#0000BF] hover:text-white'>API</button>
          </div>

          {/* The accordion structure of the  */}

          <div className="w-full max-w-3xl">
            <div className="space-y-6"> 
              {[
                { title: "Accordion Item 01", content: "This is the first item's accordion body." },
                { title: "Accordion Item 02", content: "This is the second item's accordion body." },
                { title: "Accordion Item 03", content: "This is the third item's accordion body." },
                { title: "Accordion Item 04", content: "This is the fourth item's accordion body." }
              ].map((item, index) => (
                <details 
                  key={index} 
                  className="group bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-medium text-gray-900">
                    <span className="flex-1">{item.title}</span>
                    <div className="text-gray-500 border-l border-gray-300 pl-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 transition-transform duration-300 group-open:rotate-180"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">{item.content}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;