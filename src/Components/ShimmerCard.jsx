import React from 'react';
import '../App.css'; // Ensure you have this CSS file for the shimmer effect

const ShimmerCard = () => {
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
    {Array.from({ length: 8 }).map((_, index) => (
       <div key={index} className='w-full h-[325px] rounded-3xl bg-white shadow-md relative overflow-hidden'>
       <div className='w-full h-[70%] bg-gray-200 rounded-3xl overflow-hidden relative durection-1000 shimmer'></div>
       <div className='w-full h-[30%] p-4'>
         <div className='w-full h-4 bg-gray-200 rounded-md durection-1000 shimmer mb-4'></div>
         <div className='flex justify-start items-center gap-4'>
           <div className='w-5 h-3 bg-gray-200 rounded-full durection-1000 shimmer'></div>
           <div className='flex'>
             <div className='w-20 h-2 bg-gray-200 rounded-md durection-1000 shimmer mb-2'></div>
             <div className='w-32 h-2 bg-gray-200 rounded-md durection-1000 shimmer'></div>
           </div>
         </div>
         <div className='w-3/4 h-2 bg-gray-200 rounded-md durection-1000 shimmer mt-2'></div>
       </div>
     </div>
    ))}
  </div>
  );
};

export default ShimmerCard;
