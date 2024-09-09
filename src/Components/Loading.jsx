import React from 'react'

const Loading = () => {
  return (
    <div className='my-10 w-full mx-auto h-auto'>
      {/* Loop to create multiple shimmer placeholders */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex justify-between w-[50%] h-full my-10 mx-auto p-4 bg-white shadow-lg rounded-lg border border-gray-200 animate-pulse">
          {/* Shimmer effect for text and image */}
          <div className="w-[70%] h-full flex flex-col justify-between">
            <div className="w-full h-6 bg-gray-200 rounded mb-2"></div>
            <div className="w-full h-4 bg-gray-200 rounded mb-4"></div>
            <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
          </div>
          <div className="w-[20%] h-full relative flex flex-col items-center">
            <div className="w-[150px] h-[150px] bg-gray-200 rounded-xl mb-4"></div>
            <div className="text-center w-[60%] py-1 px-2 font-bold text-white bg-gray-300 rounded-xl cursor-pointer hover:bg-gray-400 transition duration-300 absolute bottom-0">
              <p className="text-transparent">Loading...</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Loading
