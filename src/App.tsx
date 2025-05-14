import React, { useEffect } from 'react';
import './App.css';
import Navbar from './customer/components/navbar/Navbar.tsx';
import { ThemeProvider } from '@mui/material';
import customerTheme from './theme/customerTheme.ts';
import Home from './customer/pages/home/Home.tsx';
import Product from './customer/pages/product/Product.tsx';
import ProductDateils from './customer/pages/productDetails/ProductDetails.tsx';
import Review from './customer/pages/review/Review.tsx';
import Cart from './customer/pages/cart/Cart.tsx';
import Checkout from './customer/pages/checkout/Checkout.tsx';
import Account from './customer/pages/account/Account.tsx';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BecomeSeller from './customer/pages/becomeSeller/BecomeSeller.tsx';
import SellerDashboard from './seller/pages/sellerDashboard/SellerDashboard.tsx';
import AdminDashboard from './admin/pages/dashboard/Dashboard.tsx';
import store, { useAppDispatch, useAppSelector } from './state/Store.ts';
import { fetchSellerProfile } from './state/seller/sellerSlice.ts';
import Auth from './customer/pages/auth/Auth.tsx';
import { fetchUserProfile } from './state/AuthSlice.ts';
import PaymentSuccess from './customer/pages/PaymentSuccess.tsx';
import Wishlist from './customer/wishlist/Wishlist.tsx';

function App() {
  const dispatch = useAppDispatch();
  const navigate =useNavigate();
  const { seller, auth} = useAppSelector(store=>store);

  useEffect(()=>{
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""))
  },[])

  useEffect(()=>{
    if(seller.profile){
      navigate("/seller")
    }
  },[seller.profile])

  useEffect(()=>{
    dispatch(fetchUserProfile({jwt: auth.jwt || localStorage.getItem("jwt")}))
  },[auth.jwt])
  
  return (
    <ThemeProvider theme={customerTheme}>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Auth/>}/>
          <Route path="/products/:category" element={<Product/>}/>
          <Route path="/reviews/:productId" element={<Review/>}/>
          <Route path="/product-details/:categoryId/:name/:productId" element={<ProductDateils/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/payment-cuccess/:orderId" element={<PaymentSuccess/>}/>
          <Route path="/become-seller" element={<BecomeSeller/>}/>
          <Route path="/account/*" element={<Account/>}/>
          <Route path="/seller/*" element={<SellerDashboard/>}/>
          <Route path="/admin/*" element={<AdminDashboard/>}/>

        </Routes>
      </div>
      
    </ThemeProvider>
     
  );
}

export default App;

