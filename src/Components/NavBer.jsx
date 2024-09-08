import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import Logo from '../assets/SwiggyLogo.png';

const NavBer = () => {
  // Access the cart slice correctly
  const numberOfItems = useSelector((state) => state.cart.totalQuantity || 0);

  return (
    <div className='flex justify-between items-center p-4 bg-orange-500 m-0 select-none'>
      <span className='opacity-100'>
        <img src={Logo} alt="logo" className='h-[50px] opacity-100' />
      </span>
      <div className='w-[30%] mx-auto flex justify-evenly text-white font-[500]'>
        <Link className='mr-4 relative inline-block text-white group' to="/Swiggy_clone/home">
          <span className='relative'>
            HOME
            <span className='absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
          </span>
        </Link>
        <Link className='mr-4 relative inline-block text-white group' to="/Swiggy_clone/menu">
          <span className='relative'>
            OUTLETS
            <span className='absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
          </span>
        </Link>
        <Link className='mr-4 relative inline-block text-white group' to="/Swiggy_clone/contact">
          <span className='relative'>
            CONTACT
            <span className='absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
          </span>
        </Link>
        <Link className='mr-4 relative inline-block text-white group' to="/Swiggy_clone/about">
          <span className='relative'>
            ABOUT
            <span className='absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
          </span>
        </Link>
        <Link className='mr-4 relative inline-block text-white group' to="/Swiggy_clone/socials">
          <span className='relative'>
            SOCIALS
            <span className='absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
          </span>
        </Link>
      </div>
      <Link to="/Swiggy_clone/cart">
        <i className="fa-solid fa-cart-shopping text-2xl text-white pe-4 relative">
          <div className="absolute inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-600 rounded-full -top-2">
            {numberOfItems}
          </div>
        </i>
      </Link>
    </div>
  );
};

export default NavBer;
