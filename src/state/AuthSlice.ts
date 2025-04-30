import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../config/Api.ts";
import { User } from "../types/userTypes.ts";

export const sendLoginSignupOtp=createAsyncThunk("/auth/sendLoginSignupOtp",
    async({email}:{email:string},{rejectWithValue})=>{
        try {
            const response = await api.post("/auth/sent/login-signup-otp",{email})
            console.log("login otp ",response)
            
        } catch (error) {
            console.log("error -- -- -- ",error)
        }
    }
)

export const signin=createAsyncThunk<any,any>("/auth/signin",
    async(loginRequest,{rejectWithValue})=>{
        try {
            const response = await api.post("/auth/signing",loginRequest)
            console.log("login otp ",response.data)
            localStorage.setItem("jwt",response.data.jwt)
            return response.data.jwt;
        } catch (error) {
            console.log("error -- -- -- ",error)
        }
    }
)

export const signup=createAsyncThunk<any,any>("/auth/signup",
    async(signupRequest,{rejectWithValue})=>{
        try {
            const response = await api.post("/auth/signup",signupRequest)
            console.log("login otp ",response.data)
            localStorage.setItem("jwt",response.data.jwt)
            return response.data.jwt;
        } catch (error) {
            console.log("error -- -- -- ",error)
        }
    }
)

export const fetchUserProfile=createAsyncThunk<any,any>("/auth/fetchUserProfile",
    async({jwt},{rejectWithValue})=>{
        try {
            const response = await api.get("/api/users/profile",{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            })
            console.log("user profile ",response.data)
            return response.data;
        } catch (error) {
            console.log("error -- -- -- ",error)
        }
    }
)

export const logout=createAsyncThunk<any,any>("/auth/logout",
    async(navigate,{rejectWithValue})=>{
        try {
            localStorage.clear()
            navigate("/")
            console.log("logout success ")
        } catch (error) {
            console.log("error -- --",error)
        }
    }
)

interface AuthState{
    jwt:string | null,
    otpSent:boolean,
    isLoggedIn:boolean,
    user:User | null
    loading:boolean;
}

const initialState:AuthState={
    jwt:null,
    otpSent:false,
    isLoggedIn:false,
    user:null,
    loading:false
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
      
        builder.addCase(sendLoginSignupOtp.pending, (state) => {
            state.loading=true;
        })
        .addCase(sendLoginSignupOtp.fulfilled, (state) => {
            state.loading=false;
            state.otpSent=true;
        })
        .addCase(sendLoginSignupOtp.rejected, (state) => {
            state.loading=false;
        })
        .addCase(signin.fulfilled, (state, action) => {
          state.jwt = action.payload;
          state.isLoggedIn = true;
        })
        .addCase(signup.fulfilled, (state, action) => {
          state.jwt = action.payload;
          state.isLoggedIn = true;
        })
        .addCase(fetchUserProfile.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
        })
        .addCase(logout.fulfilled, (state) => {
            state.jwt=null;
            state.isLoggedIn = false;
            state.user=null;
          })
    }
})


export default authSlice.reducer;