import React, { useState } from 'react';
import Logo from '../assets/Logo.png'; 
import menu from '../assets/menu.svg';
import cross from '../assets/cross_icon.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-6 md:px-10 lg:px-16">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-7">
          <a href="#home" className="cursor-pointer hover:text-blue-800">Home</a>
          <a href="#services" className="cursor-pointer hover:text-blue-800">Services</a>
          <a href="#features" className="cursor-pointer hover:text-blue-800">Feature</a>
          <a href="#product" className="cursor-pointer hover:text-blue-800">Product</a>
          <a href="#team" className="cursor-pointer hover:text-blue-800">Team</a>
          <a href="#faq" className="cursor-pointer hover:text-blue-800">FAQ</a>
        </ul>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex gap-5">
          <button className="border border-[#0000BF] text-[#0000BF] rounded px-4 py-2 min-w-[120px] cursor-pointer hover:ring-2 ring-[#0000BF]/50">Login</button>
          <button className="bg-[#0000BF] text-white rounded px-6 py-2 min-w-[120px] cursor-pointer hover:shadow-md shadow-[#0000BF]/50">Sign Up</button>
        </div>

        {/* Mobile Menu Icon */}
        <img 
          className='md:hidden w-7 cursor-pointer' 
          src={menu} 
          alt="menu icon" 
          onClick={() => setMenuOpen(true)}
        />
      </div>

      {/* Full-Screen Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
      >
        {/* Close Button */}
        <div className='flex justify-end p-6'>
          <img className='w-6 cursor-pointer' src={cross} alt="Close menu" onClick={() => setMenuOpen(false)} />
        </div>

        {/* Mobile Navigation */}
        <ul className='flex flex-col items-center gap-5 text-lg font-medium'>
          <a className='px-4 py-2 hover:text-[#0000BF] cursor-pointer' href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a className='px-4 py-2 hover:text-[#0000BF] cursor-pointer' href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a className='px-4 py-2 hover:text-[#0000BF] cursor-pointer' href="#feature" onClick={() => setMenuOpen(false)}>Feature</a>
          <a className='px-4 py-2 hover:text-[#0000BF] cursor-pointer' href="#product" onClick={() => setMenuOpen(false)}>Product</a>
          <a className='px-4 py-2 hover:text-[#0000BF] cursor-pointer' href="#team" onClick={() => setMenuOpen(false)}>Team</a>
          <a className='px-4 py-2 hover:text-[#0000BF] cursor-pointer' href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
