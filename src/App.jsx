import React from 'react'
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
const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Swiggy_clone/" element={<FrontPage />} />
          <Route path="/Swiggy_clone/home" element={<FrontPage />} />
          <Route path="/Swiggy_clone/menu" element={<Outlets />} />
          <Route path="/Swiggy_clone/menu/:id" element={<Menu />} />
          <Route path="/Swiggy_clone/cart" element={<CartsItems />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
export default App