import React from "react";
import OrderItem from "./OrderItem.tsx";

const Orders = () => {
    return(
        <div className="text-sm min-h-screen">
            <div className="pb-5">
                <h1 className="font-semibold">All Orders</h1>
                <p>form anythime</p>
            </div>
            <div className="space-y-2">
                {
                    [...Array(6)].map((item)=> <OrderItem/>)
                }
            </div>

        </div>
    )
}

export default Orders;