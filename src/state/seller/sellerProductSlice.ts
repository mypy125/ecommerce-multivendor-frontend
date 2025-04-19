import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api.ts";
import { Product } from "../../types/productTypes.ts";

export const fetchSellerProducts = createAsyncThunk<Product[],any>(
    "/sellerProduct/fetchSellerProducts",
    async (jwt, {rejectWithValue}) => {
      try {
        const response = await api.get(`/sellers/products`,{
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        console.log("product ",response.data);
        return response.data;
      } catch (error: any) {
        console.log("error -- -- --", error);
        // return rejectWithValue(error.response?.data);
      }
    }
);

export const createProduct= createAsyncThunk<Product,{request:any,jwt:string | null}>(
    "/sellerProduct/createProduct",
    async(args, {rejectWithValue}) => {
        const {request, jwt} = args;

        try {
            const response = await api.post(`/sellers/products`,request,{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            console.log("created product ",response.data);
            return response.data;
        } catch (error) {
            console.log("error -- -- --", error);
            // return rejectWithValue(error.response?.data);
        }
    }
);

interface SellerProductState{
  products:Product[];
  loading:boolean;
  error:string | undefined;
}

const initialState:SellerProductState = {
  products:[],
  loading:false,
  error:undefined,
}

const sellerProductSlice=createSlice({
  name:"sellerProduct",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchSellerProducts.pending,(state)=>{
      state.loading=true;
      state.error = undefined;
    })
    .addCase(fetchSellerProducts.fulfilled,(state,action)=>{
      state.loading=false;
      state.products=action.payload;
    })
    .addCase(fetchSellerProducts.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message;
    })
    .addCase(createProduct.pending,(state)=>{
      state.loading=true;
      state.error = undefined;
    })
    .addCase(createProduct.fulfilled,(state,action)=>{
      state.loading=false;
      state.products.push(action.payload);
    })
    .addCase(createProduct.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message;
    })
  },

});

export default sellerProductSlice.reducer;
