import {
    BrowserRouter as Router,
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

const App =()=>{
    return <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/ProductList' element={<ProductList/>}/>
      <Route path ='/Product' element ={<Product/>}/>
      <Route path ='/Register' element ={<Register/>}/>
      <Route path ='/Login' element ={<Login/>}/>
      <Route path ='/Cart' element={<Cart/>}/>
    </Routes>
};

export default App;