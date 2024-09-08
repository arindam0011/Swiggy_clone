import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, increaseQuantity, decreaseQuantity } from '../Utill/Cart';

const SubMenu = ({ menu }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart?.items);

    const handleAddToCart = (item) => {
        dispatch(addItemToCart(item));
    };

    const handleIncreaseQuantity = (itemId) => {
        dispatch(increaseQuantity(itemId));
    };

    const handleDecreaseQuantity = (itemId) => {
        dispatch(decreaseQuantity(itemId));
    };

    const imsges = [
        "https://mir-s3-cdn-cf.behance.net/projects/404/7439c7199941757.Y3JvcCwxMDQzLDgxNiw5NTMsNTI5.jpg",
        "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg",
        "https://st3.depositphotos.com/13349494/17505/i/450/depositphotos_175058098-stock-photo-pasta.jpg",
        "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg",
        "https://assets.cntraveller.in/photos/60f6d111a77bf98b83f5364c/16:9/w_1280,c_limit/Ahmedabad%20Food%20Guide.jpg",
        "https://images.unsplash.com/photo-1550547660-d9450f859349?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"
    ];

    return (
        <div className='my-10 w-full mx-auto h-auto'>
            {menu.map((item) => {
                const cartItem = cartItems.find((cartItem) => cartItem.id === item.card.info.id);

                const imageUrl = item.card.info.imageId
                    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`
                    : imsges[Math.floor(Math.random() * 6)];
                return (
                    <div key={item.card.info.id} className="flex justify-between w-full h-full my-10 mx-auto p-4 bg-white shadow-lg rounded-lg border border-gray-200">
                        <div className="w-[70%] h-full flex flex-col justify-between">
                            <h1 className="text-2xl font-semibold text-gray-800 mb-2">{item.card.info.name}</h1>
                            <p className="text-gray-600 text-xl mb-4">{item.card.info.description}</p>
                            <h1 className="text-lg font-bold text-gray-900">₹{(item.card.info.price / 100).toFixed(2)}</h1>
                        </div>
                        <div className="w-[20%] h-full relative flex flex-col items-center">
                            <img
                                className="w-[150px] h-[150px] rounded-xl object-cover mb-4"
                                src={imageUrl}
                                alt={item.card.info.name}
                            />
                            {item.card.info.price? (<div className="text-center w-[60%] py-1 px-2 font-bold text-white bg-green-500 rounded-xl cursor-pointer hover:bg-green-600 transition duration-300 absolute bottom-0">
                                {cartItem ? (
                                    <div className="flex items-center justify-between">
                                        <span
                                            className="mr-4 cursor-pointer text-xl"
                                            onClick={() => handleDecreaseQuantity(item.card.info.id)}
                                        >
                                            -
                                        </span>
                                        <span>{cartItem.quantity}</span>
                                        <span
                                            className="ml-4 cursor-pointer text-xl"
                                            onClick={() => handleIncreaseQuantity(item.card.info.id)}
                                        >
                                            +
                                        </span>
                                    </div>
                                ) : (
                                    <p
                                        onClick={() => handleAddToCart(item.card.info)}
                                        className="cursor-pointer"
                                    >
                                        Add
                                    </p>
                                )}
                            </div>): <div className="text-center w-[60%] py-1 px-2 font-bold text-white bg-green-500 text-yellow-300 hover:text-white 
                                rounded-xl cursor-pointer hover:bg-red-600 transition duration-300 absolute bottom-0">NOT Available!!!</div>
                            }
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SubMenu;
