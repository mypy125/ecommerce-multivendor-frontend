import React from "react";
import { Route, Routes } from "react-router-dom";
import SellersTable from "../admin/pages/seller/SellersTable.tsx";
import Coupon from "../admin/pages/coupon/Coupon.tsx";
import AddNewCouponForm from "../admin/pages/coupon/AddNewCouponForm.tsx";
import GridTable from "../admin/pages/homepage/GridTable.tsx";
import ElectronicTable from "../admin/pages/homepage/ElectronicTable.tsx";
import ShopByCategory from "../admin/pages/homepage/ShopByCategory.tsx";
import Deal from "../admin/pages/homepage/Deal.tsx";

const AdminRoutes = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<SellersTable/>}/>
                <Route path="/coupon" element={<Coupon/>}/>
                <Route path="/add-coupon" element={<AddNewCouponForm/>}/>
                <Route path="/home-grid" element={<GridTable/>}/>
                <Route path="/electronics-category" element={<ElectronicTable/>}/>
                <Route path="/shop-by-category" element={<ShopByCategory/>}/>
                <Route path="/deals" element={<Deal/>}/>
                
            </Routes>
        </div>
    )
}

export default AdminRoutes;