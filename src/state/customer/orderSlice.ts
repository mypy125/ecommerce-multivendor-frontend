import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order, OrderState } from "../../types/orderTypes.ts";
import { api } from "../../config/Api.ts";

const API_URL="/api/orders";

const initialState: OrderState={
    orders:[],
    orderItem:null,
    currentOrder:null,
    paymentOrder:null,
    loading:false,
    error:null,
    orderCanceled:false

}

export const fetchUserOrderHistory=createAsyncThunk<Order[],string>(
    "orders/fetchUserOrderHistory",
    async (jwt,{rejectWithValue})=>{
        try {
            const response = await api.get(`${API_URL}/user`,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("order history fetched ",response.data);
            return response.data;
        } catch (error:any) {
            console.log("error ",error.response)
            return rejectWithValue(
                error.response.data.error || "failed to fetch order history"
            )
        }
    }
) 
