import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api.ts";
import { Product } from "../../types/productTypes.ts";

export const fetchSellerProducts = createAsyncThunk<Product[],any>(
    "/sellers/fetchSellerProducts",
    async (jwt, {rejectWithValue}) => {
      try {
        const response = await api.get(`/sellers/product`,{
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        return response.data;
      } catch (error: any) {
        console.log("error -- -- --", error);
        return rejectWithValue(error.response?.data);
      }
    }
  );