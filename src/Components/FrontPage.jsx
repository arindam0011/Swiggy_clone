import React from 'react'
import Cards from './Cards'
import HomeBG from '../assets/HomeBG.png'
import cardBg from '../assets/cardBg.jpeg'
import { Link } from 'react-router-dom'
const FrontPage = () => {
  return (
    <div className='relative h-[92vh] select-none overflow-hidden'>
      <h1 className="relative text-center pt-10 mb-10 font-extrabold z-20 leading-tight">

        <span className="relative text-6xl md:text-8xl text-gray-700 drop-shadow-lg opacity-950"
          style={{ textShadow: '0 0 10px white' }}
        >
          Order food! Discover the best restaurants....
          <br />
          Swiggy it!
        </span>
        <span className="absolute inset-x-0 bottom-[-25px] flex justify-center ">
          <div className="w-full max-w-md h-2 bg-gray-800 rounded-full opacity-70"></div>
        </span>
      </h1>


      {/* Card Section with animations */}
      <div className='flex mt-6 justify-evenly z-20 relative'>
        <Link to="/menu">
          <Cards
            heading={"FOOD DELIVERY"}
            subheading={"FROM RESTAURANTS"}
            discount={60}
            Img={cardBg}
            className="hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Background Image */}
      <img
        src={HomeBG}
        alt="Background"
        className='absolute top-0 left-0 w-full h-full object-cover opacity-80 z-10'
      />

      {/* Overlay for gradient effect */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-orange-600 to-transparent z-15'></div>
    </div>
  );
};

export default FrontPage;