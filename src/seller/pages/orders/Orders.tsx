import React from "react";
import OrderTable from "./OrderTable.tsx";

const Orders = () => {
    return(
        <div>
            <h1 className="font-bold mb-5 text-xl">All Orders</h1>
            <OrderTable/>
        </div>
    )
}

export default Orders;