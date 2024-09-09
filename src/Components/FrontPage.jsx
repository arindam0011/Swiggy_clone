import React from 'react'
import Cards from './Cards'
import HomeBG from '../assets/HomeBG.png'
import cardBg from '../assets/cardBg.jpeg'
import { Link } from 'react-router-dom'
import fst2 from '../assets/fst2.jpg'
const FrontPage = () => {
  return (
    <div className='relative h-[92vh] select-none overflow-hidden bg-orange-500 w-full'>
      <h1 className="relative text-center pt-10 mb-10 font-extrabold z-20 leading-tight">

        <span className="relative text-7xl  text-gray-200 drop-shadow-lg opacity-950"
        >
          Order food! Discover the best restaurants....
          <br />
          Swiggy it!
        </span>
        <span className="absolute inset-x-0 bottom-[-25px] flex justify-center ">
          <div className="w-full max-w-md h-2 bg-gray-800 rounded-full opacity-70"></div>
        </span>
      </h1>



      <div className='flex mt-6 justify-evenly z-20 relative'>
        <Link to="/Swiggy_clone/menu">
          <Cards
            heading={"FOOD DELIVERY"}
            subheading={"FROM RESTAURANTS"}
            discount={60}
            Img={cardBg}
            className="hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      <img
        src={HomeBG}
        alt="Background"
        className='absolute bottom-[-50%] left-[-20%] w-[50%] h-50%] object-cover opacity-100 z-10 transform rotate-[-125deg]'
      />
      <img
        src={fst2}
        alt="Background"
        className='absolute top-[35%] right-[-60%] w-[80%] h-60%] object-cover opacity-100 z-10 transform rotate-[45deg] scale-150'
      />
      {/* <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-orange-600 to-transparent z-15'></div> */}
    </div>
  );
};

export default FrontPage;