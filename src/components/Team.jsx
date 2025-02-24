import profile_1 from '../assets/profile_1.jpg'
import profile_2 from '../assets/profile_2.jpg'
import profile_3 from '../assets/profile_3.jpg'
import { Dribbble } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const Team = () => {
  return (
    <section className='w-full py-20 bg-white' id='team'>
      <div className='flex flex-col items-center'>
        {/* Text section */}
      <div className='mb-35'>
          <h1 className='text-2xl font-bold text-center text-[#0000BF] sm:text-3xl md:text-4xl mb-2'>
            Meet our team
          </h1>
          <p className='max-w-90 sm:max-w-90 text-center mx-auto text-gray-500 font-light'>
            Unlock growth opportunities with NOVA X through innovative, non-collateral-based financing solutions that expand your capital and connect you with forward-thinking investors to turn your business vision into reality.
          </p>
        </div>

        {/* Profile section */}
        <div className='flex flex-wrap justify-center gap-x-8 gap-y-14 px-4 sm:px-0'>
          {[
            { name: 'Sarah Parker', profile: profile_1 },
            { name: 'John Parker', profile: profile_2 },
            { name: 'Kirah Parker', profile: profile_3 },
          ].map((person, index) => (
            <div 
              key={index} 
              className="w-full sm:w-auto sm:max-w-[340px]  md:max-w-[380px] lg:max-w-[420px] border border-[#0000BF] shadow-lg rounded-2xl px-8 py-12 relative bg-[#F1F1FF] cursor-pointer hover:shadow-[#0000BF]/50 "
            >
              {/* Profile Image */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img 
                  src={person.profile} 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                />
              </div>

              {/* Card content */}
              <div className='flex flex-col items-center mt-8'>
                <h3 className='text-[#0000BF] font-medium text-xl'>{person.name}</h3>
                <p className='text-[#0000BF] font-light'>UI Designer</p>

                {/* Social icons */}
                <div className='flex gap-2 mt-4'>
                  <a href="https://www.dribbble.com"><Dribbble color='#0000BF' size={20}/></a>
                  <a href="https://www.x.com"><Twitter color='#0000BF' size={20}/></a>
                  <a href="https://www.linkedin.com"><Linkedin color='#0000BF' size={20}/></a>
                </div>
              </div>
            </div>
          ))}
      </div>


      </div>
    </section>
  )
}

export default Team