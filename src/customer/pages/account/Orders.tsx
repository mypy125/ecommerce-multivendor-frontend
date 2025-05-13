import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/Store.ts";
import { fetchUserOrderHistory } from "../../../state/customer/orderSlice.ts";
import OrderItemCard from "./OrderItemCard.tsx";

const Orders = () => {
    const dispatch = useAppDispatch();
    const {order}=useAppSelector(store=>store);

    useEffect(()=>{
        dispatch(fetchUserOrderHistory(localStorage.getItem("jwt") || ""))
    },[])
    return(
        <div className="text-sm min-h-screen">
            <div className="pb-5">
                <h1 className="font-semibold">All Orders</h1>
                <p>form anythime</p>
            </div>
            <div className="space-y-2">
                {
                    order.orders.map((order)=> order.orderItem.map((item)=>
                    <OrderItemCard order={order} item={item}/>))
                }
            </div>

        </div>
    )
}

export default Orders;