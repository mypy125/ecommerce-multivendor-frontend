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

function App() {
  return (
    <ThemeProvider theme={customerTheme}>
      <div>
        <Navbar/>
        {/* <Home/> */}
        {/* <Product/> */}
        {/* <ProductDateils/> */}
        {/* <Review/> */}
        <Cart/>
      </div>
      
    </ThemeProvider>
     
  );
}

export default App;

