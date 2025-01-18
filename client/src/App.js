import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermAndConditions from './pages/TermAndConditions';
import ShippingPolicy from './pages/ShippingPolicy';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import FAQ from './pages/FAQ';
import Addblog from './Admin/Addblog';
import Addcat from './Admin/Addcat';
import Addproduct from './Admin/Addproduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='store' element={<OurStore />} />
            <Route path='blogs' element={<Blog />} />
            <Route path='blog/id' element={<SingleBlog />} />
            <Route path='compare-product' element={<CompareProduct />} />
            <Route path='wishlist' element={<WishList />} />
            <Route path='login' element={<Login />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='signup' element={<Signup />} />
            <Route path='d' element={<ResetPassword />} />
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
            <Route path='refund-policy' element={<RefundPolicy />} />
            <Route path='term-and-conditions' element={<TermAndConditions />} />
            <Route path='shipping-policy' element={<ShippingPolicy />} />
            <Route path='product/id' element={<SingleProduct />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
	          <Route path='faq' element={<FAQ />} />
	          <Route path='addblog' element={<Addblog />} />
	          <Route path='addcat' element={<Addcat />} />
	          <Route path='addproduct' element={<Addproduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
