import { Box, Grid, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useAppDispatch } from "../../../state/Store.ts";
import { createOrder } from "../../../state/customer/orderSlice.ts";

const AddressFormSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string().matches(/^\d{10}$/, "Mobile must be a 10-digit number").required("Mobile is required"),
    pinCode: Yup.string().matches(/^\d{6}$/, "Pin Code must be a 6-digit number").required("Pin Code is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    locality: Yup.string().required("Locality is required"),
});

const AddressForm = ({paymentGateway}:any) => {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
            mobile: "",
            pinCode: "",
            address: "",
            city: "",
            state: "",
            locality: ""
        },
        validationSchema: AddressFormSchema,
        onSubmit: (values) => {
            // submit form
            console.log(values);
            dispatch(createOrder({address:values,
                jwt:localStorage.getItem("jwt") || "",
                paymentGateway
            }))
        },
    });

    return (
        <Box sx={{ maxWidth: "auto" }}>
            <p className="text-xl font-bold text-center pb-5">Contact Details</p>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="name"
                            label="Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name="mobile"
                            label="Mobile"
                            value={formik.values.mobile}
                            onChange={formik.handleChange}
                            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                            helperText={formik.touched.mobile && formik.errors.mobile}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name="pinCode"
                            label="Pin Code"
                            value={formik.values.pinCode}
                            onChange={formik.handleChange}
                            error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                            helperText={formik.touched.pinCode && formik.errors.pinCode}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="address"
                            label="Address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="locality"
                            label="Locality"
                            value={formik.values.locality}
                            onChange={formik.handleChange}
                            error={formik.touched.locality && Boolean(formik.errors.locality)}
                            helperText={formik.touched.locality && formik.errors.locality}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name="city"
                            label="City"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name="state"
                            label="State"
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            error={formik.touched.state && Boolean(formik.errors.state)}
                            helperText={formik.touched.state && formik.errors.state}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Add Address
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default AddressForm;