import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import Navbar from './Navbar';
import LeftNavbar from './LeftNav';
import Categories from './Categories';
import CategoryDis from './CategoryDis';
import Product from './Product';
import ProductDis from './ProductDis';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/category' element={<Categories/>}></Route>
      <Route path='/categoryDis' element={<CategoryDis/>}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/login' element={<Login/>}></Route> 
      <Route path='/productDis' element={<ProductDis/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
