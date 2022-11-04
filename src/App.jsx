import {
    // Redirect,
    Route,
    Routes,
  } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Seller from "./pages/Seller";
import Sell from "./pages/Sell";

const App =()=>{
    return <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/ProductList' element={<ProductList/>}/>
      <Route path ='/Product' element ={<Product/>}/>
      <Route path ='/Register' element ={<Register/>}/>
      <Route path ='/Login' element ={<Login/>}/>
      <Route path ='/Cart' element={<Cart/>}/>
      <Route path='/Seller'element={<Seller/>}/>
      <Route path='/Sell' element ={<Sell/>}/>
    </Routes>
};

export default App;