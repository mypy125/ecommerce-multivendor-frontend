import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderItem, OrderState } from "../../types/orderTypes.ts";
import { api } from "../../config/Api.ts";
import { Address } from "../../types/userTypes.ts";
import axios from "axios";

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

export const createOrder=createAsyncThunk<any,{address:Address,jwt:string, paymentGateway:string}>(
    "orders/createOrder",
    async ({address,jwt,paymentGateway},{rejectWithValue})=>{
        console.log("payment gateway", paymentGateway)
        try {
            const response = await api.post(API_URL,address,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
                params:{
                    paymentMethod:paymentGateway
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

export const fetchOrderItemById=createAsyncThunk<OrderItem,{orderItemId:number,jwt:string}>(
    "orders/fetchOrderItemById",
    async ({orderItemId,jwt},{rejectWithValue})=>{
        try {
            const response = await api.get(`${API_URL}/item/${orderItemId}`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log("order Item fetched ",response.data);
            return response.data;
        } catch (error:any) {
            console.log("error ",error.response)
            rejectWithValue(
                "failed to fetch order Item By Id"
            )
        }
    }
)

export const paymentSuccess=createAsyncThunk<any,
    {paymentId:string,jwt:string,paymentLinkId:string},{rejectValue:string}>(
    "orders/paymentSuccess",
    async ({paymentId,jwt,paymentLinkId},{rejectWithValue})=>{
        try {
            const response=await api.get(`api/payment/${paymentId}`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
                params:{
                    paymentLinkId
                }
            });
            console.log("apyment success ",response.data);
            return response.data;
        } catch (error:any) {
            console.log("error ",error.response)
            if(error.response){
                return rejectWithValue(
                    error.response.data.message
                )
            }
            return rejectWithValue(
               "failed to process payment"
            )
            
        }
    }
)

export const cancelOrder=createAsyncThunk<Order,any>(
    "orders/cancelOrder",
    async (orderId,{rejectWithValue})=>{
        try {
            const response=await api.put(`${API_URL}/${orderId}/cancel`,{},{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
            });
            console.log("cancel order ",response.data);
            return response.data;
        } catch (error:any) {
            console.log("error ",error.response);
            if(axios.isAxiosError(error)&&error.response){
                return rejectWithValue(
                    error.response.data
                )
            }
            return rejectWithValue("error occurred while canceling the order")
        }
    }
)

const OrderSlice = createSlice({
    name:"orders",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchUserOrderHistory.pending,(state)=>{
            state.loading=true;
            state.error=null;
            state.orderCanceled=false;
        })
        .addCase(fetchUserOrderHistory.fulfilled,(state,action:PayloadAction<Order[]>)=>{
            state.orders=action.payload;
            state.loading=false;
        })
        .addCase(fetchUserOrderHistory.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload as string;
        })
        .addCase(fetchOrderById.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchOrderById.fulfilled,(state,action:PayloadAction<Order>)=>{
            state.currentOrder=action.payload;
            state.loading=false;
        })
        .addCase(fetchOrderById.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload as string;
        })
        .addCase(createOrder.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(createOrder.fulfilled,(state,action:PayloadAction<any>)=>{
            state.paymentOrder=action.payload;
            state.loading=false;
        })
        .addCase(createOrder.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload as string;
        })
         .addCase(fetchOrderItemById.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchOrderItemById.fulfilled,(state,action)=>{
            state.loading=false;
            state.orderItem=action.payload;
        })
        .addCase(fetchOrderItemById.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload as string;
        })
        .addCase(paymentSuccess.pending,(state)=>{
            state.loading=false;
            state.error=null;
        })
        .addCase(paymentSuccess.fulfilled,(state,action)=>{
            state.loading=false;
            console.log("payment success ",action.payload)
        })
        .addCase(paymentSuccess.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload as string;
        })
        .addCase(cancelOrder.pending,(state)=>{
            state.loading=true;
            state.error=null;
            state.orderCanceled=false;
        })
        .addCase(cancelOrder.fulfilled,(state,action)=>{
            state.loading=false;
            state.orders=state.orders.map((order)=>
                order.id===action.payload.id ? action.payload : order
            );
            state.orderCanceled=true;
            state.currentOrder=action.payload;
        })
        .addCase(cancelOrder.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload as string;
        })
    
    }
})

export default OrderSlice.reducer;