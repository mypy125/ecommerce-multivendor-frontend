import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../../config/Api.ts"

export const sellerLogin=createAsyncThunk<any,any>("/sellerAuth/sellerLogin",
    async(loginRequest,{rejectWithValue})=>{
        try {
            const response = await api.post("/sellers/login",loginRequest)
            console.log("seller login ",response.data)
            const jwt=response.data.jwt;
            localStorage.setItem("jwt",jwt);
            
        } catch (error) {
            console.log("error -- -- -- ",error)
        }
    }
)