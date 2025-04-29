import React, { useState } from "react";
import LoginForm from "./LoginForm.tsx";
import RegisterForm from "./RegisterForm.tsx";
import { Button } from "@mui/material";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    return(
        <div className="flex justify-center h-[90vh] items-center">
            <div className="max-w-md h-[85vh] rounded-md border shadow-lg">
                <img className="w-full rounded-t-md"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5KLBcsBJ4rLRuTvzuJ5cAFR9YhbVje_VWg&s" 
                 alt="" />

                <div className="px-10 py-6">
                    {isLogin ? <LoginForm /> : <RegisterForm />}
                </div>

                <div className="mt-8 px-10">
                    <div className="flex items-center gap-1 justify-center mt-5">
                    <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>

                        <Button size="small" onClick={()=>setIsLogin(!isLogin)}>
                            {isLogin ? "Create Account":"Login"}
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Auth