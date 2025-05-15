import { createAsyncThunk } from "@reduxjs/toolkit";
import {WishlistState} from "../../types/wishlistTypes.ts";
import { api } from "../../config/Api.ts";

const initialState:WishlistState={
    wishlist:null,
    loading:false,
    error:null,
}

export const getWishlistByUserId=createAsyncThunk(
    "wishlist/getWishlistByUserId",
    async (_,{rejectWithValue})=>{
        try {
            const response = await api.get(`/api/wishlist`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
            });
            console.log("wishlist fetch ",response.data)
            return response.data;
        } catch (error:any) {
            return rejectWithValue(
                error.response?.data.message || "failed to fetch wishlist"
            )
        }
    }
)

export const addProductToWishlist=createAsyncThunk(
    "wishlist/addProductToWishlist",
    async({productId}:{productId:number}, {rejectWithValue})=>{
        try {
            const response = await api.post(`/api/wishlist/add-product/${productId}`,{},{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
            });
            console.log("add product ",response.data)
            return response.data;
        } catch (error:any) {
            return rejectWithValue(
                error.response?.data.message || "failed to add product to wishlist"
            )
        }
    }
)