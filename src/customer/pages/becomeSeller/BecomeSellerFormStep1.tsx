import { Box, TextField } from "@mui/material";
import React from "react";

const BecomeSellerFormStep1 = ({ formik }) => {
    return (
        <Box>
            <p className="text-xl font-bold text-center pb-9">Contact Details</p>

            <div className="space-y-9">
                <TextField
                    fullWidth
                    name="mobile"
                    label="Mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                    helperText={formik.touched.mobile && formik.errors.mobile}
                />
                <TextField
                    fullWidth
                    name="nds"
                    label="NDS"
                    value={formik.values.nds}
                    onChange={formik.handleChange}
                    error={formik.touched.nds && Boolean(formik.errors.nds)}
                    helperText={formik.touched.nds && formik.errors.nds}
                />
            </div>
        </Box>
    );
};

export default BecomeSellerFormStep1;