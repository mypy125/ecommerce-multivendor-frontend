import React from 'react';
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
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={customerTheme}>
      <div>
        <Navbar/>
        {/* <Home/> */}
        {/* <Product/> */}
        {/* <ProductDateils/> */}
        {/* <Review/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Account/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/:category" element={<Product/>}/>
          <Route path="/reviews/:productId" element={<Review/>}/>
          <Route path="/product-details/:categoryId/:name/:productId" element={<ProductDateils/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/account/*" element={<Account/>}/>

        </Routes>
      </div>
      
    </ThemeProvider>
     
  );
}

export default App;

