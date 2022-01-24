import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Login from './components/buttons/Login';
import Signup from './components/buttons/Signup';
import CartBtn from './components/buttons/CartBtn';
import ProductDetail from './components/ProductDetail';
import {Route , Routes} from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path ="/about" element ={<About/>} />
         <Route exact path ="/contact" element={<Contact/>} />
         <Route exact path ="/products" element={<Product/>}/>
         <Route exact path ="/login" element={<Login/>}/>
         <Route exact path ="/signup" element={<Signup/>}/>
         <Route exact path ="/products/:id" element={<ProductDetail/>}/>
         <Route exact path="/cart" element={<Cart/>}/>
         <Route path='/checkout' element={<Checkout/>}/>
       </Routes>
      <Footer/>
           
    </div>
  );
}

export default App;
