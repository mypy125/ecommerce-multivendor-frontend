import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../seller/pages/products/Products.tsx";
import Orders from "../seller/pages/orders/Orders.tsx";
import Profile from "../seller/pages/account/Profile.tsx";
import Payment from "../seller/pages/payment/Payment.tsx";
import Transaction from "../seller/pages/payment/Transaction.tsx";
import AddProducts from "../seller/pages/products/AddProducts.tsx";
import Dashboard from "../seller/pages/sellerDashboard/Dashboard.tsx";

const SellerRoutes = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/add-product" element={<AddProducts/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/account" element={<Profile/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/transaction" element={<Transaction/>}/>
            </Routes>
        </div>
    )
}

export default SellerRoutes;