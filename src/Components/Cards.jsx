import React from 'react'
const Cards = ({ heading, subheading, discount, Img }) => {
  return (
    <div
      className="relative opacity-90 bg-white h-[300px] w-[600px] p-4 rounded-xl hover:scale-105 cursor-pointer flex flex-col justify-end overflow-hidden select-none 
      transition duration-100"
      style={{ backgroundImage: `url(${Img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="relative z-10 flex flex-col opacity-100 items-end">
        <h2
          className="font-bold text-4xl bg-transparent text-shadow-l "
          style={{
            WebkitTextStroke: '2px crimson',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'rgb(37, 37, 37)',
          }}
        >
          {heading}
        </h2>
        <h3 className="text-gray-800 font-semibold text-xl bg-transparent text-shadow-l"
        style={{
          WebkitTextStroke: '1px rgb(243, 205, 191)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'black',
        }}
        >{subheading}</h3>
        <p className="text-orange-600 font-semibold text-2xl">Upto {discount}% off</p>
      </div>
    </div>

  )
}
export default Cards