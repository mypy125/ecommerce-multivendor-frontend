import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Wishlist, WishlistState} from "../../types/wishlistTypes.ts";
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

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState,
    reducers: {
        resetWishlistState: (state)=>{
            state.wishlist=null;
            state.loading=false;
            state.error=null;
        },
    },
    extraReducers: (build)=> {
        build.addCase(getWishlistByUserId.pending,(state)=>{
            state.loading= true;
            state.error=null;
        })
        .addCase(getWishlistByUserId.fulfilled,(state,action:PayloadAction<Wishlist>)=>{
            state.wishlist= action.payload;
            state.loading=false;
        })
        .addCase(getWishlistByUserId.rejected,(state,action:PayloadAction<any>)=>{
            state.loading=false;
            state.error=action.payload;
        })
        .addCase(addProductToWishlist.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(addProductToWishlist.fulfilled,(state,action:PayloadAction<Wishlist>)=>{
            state.wishlist=action.payload;
            state.loading=false;
        })
        .addCase(addProductToWishlist.rejected,(state,action:PayloadAction<any>)=>{
            state.loading=false;
            state.error=action.payload;
        })
    }
})

export const {resetWishlistState} = wishlistSlice.actions;

export default wishlistSlice.reducer;