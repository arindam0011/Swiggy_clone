import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, increaseQuantity, decreaseQuantity } from '../Utill/Cart';
import '../App.css';

const CartsItems = () => {
  const cartItems = useSelector((state) => state.cart?.items || []);
  console.dir(cartItems)
  const dispatch = useDispatch();
  const imsges = ["https://mir-s3-cdn-cf.behance.net/projects/404/7439c7199941757.Y3JvcCwxMDQzLDgxNiw5NTMsNTI5.jpg",
    "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg",
    "https://st3.depositphotos.com/13349494/17505/i/450/depositphotos_175058098-stock-photo-pasta.jpg",
    "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg",
    "https://assets.cntraveller.in/photos/60f6d111a77bf98b83f5364c/16:9/w_1280,c_limit/Ahmedabad%20Food%20Guide.jpg",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"
  ]
  const image = imsges[Math.floor(Math.random() * 6)]
  return (
    <div className="w-full h-full flex select-none">
      <div className="container mx-auto py-10 overflow-y-auto min-h-[80vh] max-h-[80vh] relative hide-scrollbar">
        {cartItems.length === 0 ? (
          <div className="w-full h-full flex flex-col items-center"
             style={{
              backgroundImage: `url(https://cdn-icons-png.flaticon.com/512/11329/11329060.png)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
             }}
          >
            <h2 className="text-center text-3xl font-semibold text-gray-700">😑Your cart is empty!❌</h2>
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center w-[50%] max-h-full mx-auto bg-white p-6 mb-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex items-center">
                <img
                  className="w-20 h-20 object-cover rounded-lg mr-6"
                  src={item.image ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.image}` : image}
                  alt={item.name}
                />
                <div>
                  <h1 className="text-xl font-bold w-[250px] text-gray-800">{item.name}</h1>
                  <p className="text-gray-600">₹{(item.price / 100).toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center">
                <button
                  className="text-xl font-bold px-4 py-2 bg-gray-300 rounded-l-lg hover:bg-gray-400"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  -
                </button>
                <span className="px-4 text-lg font-semibold">{item.quantity}</span>
                <button
                  className="text-xl font-bold px-4 py-2 bg-gray-300 rounded-r-lg hover:bg-gray-400"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
              </div>

              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">
                  ₹{(item.totalPrice / 100).toFixed(2)}
                </p>
                <button
                  className="mt-2 px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600"
                  onClick={() => dispatch(removeItemFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length >0 &&
        <div className="flex flex-col justify-between items-center w-[20%] mx-auto fixed right-10 top-36 
           bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-8 rounded-lg shadow-2xl text-white">
          <div className="w-full flex justify-between">
            <h1 className="text-2xl font-bold mb-4">Total</h1>
            <h1 className="text-2xl font-extrabold mb-6">₹{(cartItems.reduce((acc, item) => acc + item.totalPrice, 0) / 100).toFixed(2)}</h1>
          </div>
          <button className="py-3 px-6 bg-white text-green-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300">
            Checkout
          </button>
        </div>
      }
    </div>
  );
};

export default CartsItems;
