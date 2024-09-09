import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Cards from './Components//Cards'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavBer.jsx'
import Outlets from './Components/Outlets.jsx'
import FrontPage from './Components/FrontPage.jsx'
import Menu from './Components/Menu.jsx'
import store from './Utill/Store.jsx'
import { Provider } from 'react-redux'
import CartsItems from './Components/CartsItems.jsx'
export const locationContext = createContext()
const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              });
            },
            (error) => {
              reject(error);
            }
          );
        } else {
          reject(new Error("Geolocation is not supported by this browser."));
        }
      });
    };
    getLocation().then((location) => {
      setLatitude(location.latitude);
      setLongitude(location.longitude);
    })
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <locationContext.Provider value={{ latitude, longitude }}>
          <Navbar />
          <Routes>
            <Route path="/Swiggy_clone/" element={<FrontPage />} />
            <Route path="/Swiggy_clone/home" element={<FrontPage />} />
            <Route path="/Swiggy_clone/menu" element={latitude && longitude && <Outlets />} />
            <Route path="/Swiggy_clone/menu/:id" element={<Menu />} />
            <Route path="/Swiggy_clone/cart" element={<CartsItems />} />
          </Routes>
        </locationContext.Provider>
      </BrowserRouter>
    </Provider>
  )
}
export default App