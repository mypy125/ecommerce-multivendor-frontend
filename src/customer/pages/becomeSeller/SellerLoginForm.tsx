import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useAppDispatch } from "../../../state/Store.ts";
import { sendLoginSignupOtp } from "../../../state/AuthSlice.ts";
import { sellerLogin } from "../../../state/seller/sellerAuthSlice.ts";

const SellerLoginForm = () => {
    const [otpSent, setOtpSent] = useState(false);
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            email:"",
            otp:""
        },
        onSubmit:(values)=>{
            console.log("form data",values)
            dispatch(sellerLogin({
                email:values.email,
                otp:values.otp
            }))
        }
    })

    const handleSentOtp= () => {
        if (!formik.values.email) return;
        dispatch(sendLoginSignupOtp({email:formik.values.email}));
        setOtpSent(true);
    }

    
    return(
        <div>
            <h1 className="text-center font-bold text-xl text-primary-color pb-5">
                Login As Seller
            </h1>
            <div className="space-y-5">
            <TextField
            fullWidth
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            />

            {
                true &&
                <div className="space-y-2">
                    <p className="font-medium text-sm opacity-60">enter OTP sent to email</p>
                    <TextField
                    fullWidth
                    name="otp"
                    label="Otp"
                    value={formik.values.otp}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.otp && Boolean(formik.errors.otp)}
                    helperText={formik.touched.otp && formik.errors.otp}
                    />
                </div>
            }

            {!otpSent && <Button onClick={handleSentOtp} fullWidth variant="contained" sx={{py:"11px"}}>
                Sent Otp
            </Button>}

            {otpSent && <Button type="submit" fullWidth variant="contained" sx={{py:"11px"}}>
                Login
            </Button>}

            </div>
        </div>
    )
}

export default SellerLoginForm;