import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResturentsCard = ({ item }) => {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    areaName,
    locality,
    costForTwo
  } = item.info;

  const { slaString } = item.info.sla;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/Swiggy_clone/menu/${item.info.id}`)}
      className='w-full h-[325px] rounded-3xl hover:scale-105 transition-all duration-200 overflow-hidden cursor-pointer bg-white select-none'
    >
      <div
        className='w-full h-[70%] rounded-3xl overflow-hidden bg-cover bg-center relative'
        style={{
          backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId})`,
          boxShadow: 'inset 0px -20px 30px rgba(0, 0, 0, 0.8)',
        }}
      >
        <h1 className='text-white absolute bottom-4 left-4 text-3xl font-bold'>
          {`${costForTwo} `}
        </h1>
      </div>
      <div className='w-full h-[30%] p-4'>
        <h2 className='text-l font-bold text-black'>{name}</h2>
        <div className='flex justify-start items-center gap-4'>
          <div style={{ marginTop: '-2px' }}>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              role='img'
              aria-hidden='true'
              stroke='rgba(2, 6, 12, 0.92)'
            >
              <circle
                cx='10'
                cy='10'
                r='9'
                fill='url(#StoreRating20_svg__paint0_linear_32982_71567)'
              ></circle>
              <path
                d='M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z'
                fill='white'
              ></path>
              <defs>
                <linearGradient
                  id='StoreRating20_svg__paint0_linear_32982_71567'
                  x1='10'
                  y1='1'
                  x2='10'
                  y2='19'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#21973B'></stop>
                  <stop offset='1' stopColor='#128540'></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='flex justify-start items-center'>
            <p className='text-black pb-1'>
              {avgRating}
              <span className='text-gray-500 text-l font-bold box-border px-1'>•</span>
              {slaString}
            </p>
          </div>
        </div>
        <p className='text-gray-500'>{`${areaName}, ${locality}`}</p>
      </div>
    </div>
  );
};

export default ResturentsCard;
