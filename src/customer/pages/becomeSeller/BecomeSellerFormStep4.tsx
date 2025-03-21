import { TextField } from "@mui/material";
import React from "react";

interface BecomeSellerFormStep2Props{
    formik: any;
}
export const BecomeSellerFormStep3: React.FC<BecomeSellerFormStep2Props> = ({formik})=>{
    return(
        <div className="space-y-5">
            <TextField
            fullWidth
            name="bankDetails.accountNumber"
            label="Account Number"
            value={formik.values.bankDetails.accountNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bankDetails?.accountNumber && Boolean(formik.errors.bankDetails)}
            helperText={formik.touched.bankDetails?.accountNumber && formik.errors.bankDetails}
            />
            <TextField
            fullWidth
            name="bankDetails.ifscCode"
            label="IFSC Code"
            value={formik.values.bankDetails.ifscCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bankDetails?.ifscCode && Boolean(formik.errors.ifscCode)}
            helperText={formik.touched.bankDetails?.ifscCode && formik.errors.ifscCode}
            />
             <TextField
            fullWidth
            name="bankDetails.accountHolderName"
            label="Account Holder Name"
            value={formik.values.bankDetails.accountHolderName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bankDetails?.accountHolderName && Boolean(formik.errors.accountHolderName)}
            helperText={formik.touched.bankDetails?.accountHolderName && formik.errors.accountHolderName}
            />

        </div>
    )
}
