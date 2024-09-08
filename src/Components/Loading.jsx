import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
          <div className="absolute w-16 h-16 border-4 border-t-4 border-transparent border-solid rounded-full border-white opacity-30"></div>
        </div>
        <h1 className="text-white text-3xl font-bold">Loading...</h1>
        <p className="text-white text-lg">Please wait while we fetch your data.</p>
      </div>
    </div>
  )
}

export default Loading
