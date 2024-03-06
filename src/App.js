
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop';
import ShopCategory from './pages/ShopCategory.jsx';
import LoginSignup from './pages/LoginSignup';

import { Product } from './pages/Product';

import { Cart } from './pages/Cart';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids" />} />
          <Route path='/product' element={<Product />} />
          {/* Define your ProductId route with its intended purpose */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
