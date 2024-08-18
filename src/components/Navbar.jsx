import React from 'react';
import logo from '../assets/kevinRushLogo.png';
import { 
  FaLinkedin,
  FaGithub,
  FaInstagram
} from 'react-icons/fa'
import { 
  FaSquareXTwitter
} from 'react-icons/fa6'

export const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        {/* <img className='mx-2 w-10' src={logo} alt='Logo' /> */}
        <h1 className='mx-2 text-4xl text-neutral-300'>AB</h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};
