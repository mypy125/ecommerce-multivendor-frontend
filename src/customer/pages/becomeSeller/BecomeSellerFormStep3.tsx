import { TextField } from "@mui/material";
import React from "react";

interface BecomeSellerFormStep2Props{
    formik: any;
}
export const BecomeSellerFormStep4: React.FC<BecomeSellerFormStep2Props> = ({formik})=>{
    return(
        <div className="space-y-5">
            <TextField
            fullWidth
            name="bankDetails.businessName"
            label="Business Namer"
            value={formik.values.bankDetails.businessName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bankDetails?.businessName && Boolean(formik.errors.businessName)}
            helperText={formik.touched.bankDetails?.businessName && formik.errors.businessName}
            />
            <TextField
            fullWidth
            name="sellerName"
            label="Seller Name"
            value={formik.values.bankDetails.sellerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bankDetails?.sellerName && Boolean(formik.errors.sellerName)}
            helperText={formik.touched.bankDetails?.sellerName && formik.errors.sellerName}
            />
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
              <TextField
            fullWidth
            name="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            />

        </div>
    )
}
