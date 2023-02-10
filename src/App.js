import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nos from "./Components/Nosotros";
import MyNavbar from "./Components/NavBar.jsx";
import  ItemListContainer from "./Components/ItemListContainer.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import CartProvider from "./Components/CustomProvider";
// import Cart from "./Components/Cart/Cart";

const App = () => {
  return (
    
   <div>
    <CartProvider>
      <BrowserRouter>
        <MyNavbar />
        <Routes>

          <Route 
            path='/'
            element={
              <ItemListContainer saludo="Bienvenido a Gaia Games Store, la mejor LudoTeca"/>
            }
          />
        <Route 
            path='/nosotros'
            element={
              <Nos />
            }
          />
          <Route 
            path='/categoria/:categoryName'
            element={
              <ItemListContainer saludo="Bienvenido a Gaia Games Store, la mejor LudoTeca"/>
            }
          />
          <Route 
            path='/detail/:idNumb'
            element={<ItemDetailContainer />}
          />

          {/* <Route 
          path='/cart'
          element={<Cart />} 
          /> */}
          
        </Routes>
      
      </BrowserRouter>
    </CartProvider>
    </div>

  );
}

export default App;