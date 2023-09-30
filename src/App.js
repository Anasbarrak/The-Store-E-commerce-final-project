import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import Register from './components/Register';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertError from './components/AlertError';
import Logout from './components/Logout';


function App() {
  
  return (
    <div className="App">
      <Header/>
      <AlertError />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/cart" element = {<Cart/>} />
        <Route path="/checkout" element= {<Checkout/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path='/register' element = {<Register/>} />
        <Route path='/login' element = {<Login/>}/>
        <Route path='/logout' element = {<Logout/>} />
        <Route path='/footer' element = {<Footer/>} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
