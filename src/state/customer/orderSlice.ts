import { createAsyncThunk } from "@reduxjs/toolkit";
import { Order, OrderState } from "../../types/orderTypes.ts";
import { api } from "../../config/Api.ts";
import { Address } from "../../types/userTypes.ts";

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

export const fetchOrderById=createAsyncThunk<Order,{orderId:number,jwt:string}>(
    "order/fetchOrderById",
    async ({orderId,jwt},{rejectWithValue})=>{
        try {
            const response = await api.get(`${API_URL}/${orderId}`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("order fetched ",response.data);
            return response.data;
        } catch (error:any) {
            console.log("error ",error.response)
            return rejectWithValue("failed to fetch order")
        }
    }
)

export const createOrder=createAsyncThunk<any,{address:Address,jwt:string,paymentGatway:string}>(
    "orders/createOrder",
    async ({address,jwt,paymentGatway},{rejectWithValue})=>{
        try {
            const response = await api.post(API_URL,address,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
                params:{
                    paymentMethod:paymentGatway
                }
            });
            console.log("order create ",response.data);
            if(response.data.payment_link_url){
                window.location.href=response.data.payment_link_url
            }
            return response.data;
        } catch (error:any) {
            console.log("error ",error.response)
            return rejectWithValue("failed to create order")
        }
    }
)