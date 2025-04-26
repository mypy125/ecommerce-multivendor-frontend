import React, { useState } from "react";
import LoginForm from "./LoginForm.tsx";
import RegisterForm from "./RegisterForm.tsx";
import { Button } from "@mui/material";

const Auth = () => {
    const [isLogin,setIsLogin]=useState(true);


    return(
        <div className="flex justify-center h-[90vh] items-center">
            <div className="max-w-md h-[85vh] rounded-md border shadow-lg">
                <img className="w-full rounded-t-md"
                 src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                 alt="" />

                <div className="mt-8 px-10">
                    {
                        isLogin ? <LoginForm/>:<RegisterForm/>
                    }

                    <div className="flex items-center gap-1 justify-center mt-5">
                        <p>
                            {
                                isLogin && "Don't "
                            }
                            have Account
                        </p>
                        <Button size="small" onClick={()=>setIsLogin(!isLogin)}>
                            {
                                isLogin ? "Create Account":"Login"
                            }
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Auth