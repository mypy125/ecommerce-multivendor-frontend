import React, { useState } from "react";
import { useAppDispatch } from "../../../state/Store.ts";
import { useFormik } from "formik";
import { sendLoginSignupOtp } from "../../../state/AuthSlice.ts";
import { Button, TextField } from "@mui/material";

const RegisterForm = () => {
    const dispatch = useAppDispatch();
    const [otpSent, setOtpSent] = useState(false);

    const formik = useFormik({
        initialValues: {
            email:"",
            otp:"",
            fullName:""
        },
        onSubmit:(values)=>{
            console.log("form data",values)
        }
    })

    const handleSentOtp = () => {
        if (!formik.values.email) return;
        dispatch(sendLoginSignupOtp({ email: formik.values.email }));
        setOtpSent(true);
    };

    return(
        <div>
            <h1 className="text-center font-bold text-xl text-primary-color pb-8">Signup</h1>
             <form onSubmit={formik.handleSubmit} className="space-y-5">
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

                {otpSent && (
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <p className="font-medium text-sm opacity-60">Enter OTP sent to email</p>
                      <TextField
                        fullWidth
                        name="otp"
                        label="OTP"
                        value={formik.values.otp}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.otp && Boolean(formik.errors.otp)}
                        helperText={formik.touched.otp && formik.errors.otp}
                      />
                    </div>
                
                    <TextField
                      fullWidth
                      name="fullName"
                      label="Full Name"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                      helperText={formik.touched.fullName && formik.errors.fullName}
                    />
                  </div>
                )}

              {!otpSent && (
                <Button onClick={handleSentOtp} fullWidth variant="contained" sx={{ py: "11px" }}>
                  Send OTP
                </Button>
              )}

              {otpSent && (
                <Button type="submit" fullWidth variant="contained" sx={{ py: "11px" }}>
                  Signup
                </Button>
              )}
            </form>
        </div>
    )
}

export default RegisterForm