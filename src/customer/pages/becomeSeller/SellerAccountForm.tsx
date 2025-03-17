import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import BecomeSellerFormStep1 from "./BecomeSellerFormStep1.tsx";
import { useFormik } from "formik";

const steps=[
    "Tax Details & Mobile",
    "Pickup Address",
    "Bank Details",
    "Supplier Details"
]
const SellerAccountForm = () => {
    const [activeStep,setActiveStep]=useState(0);

    const handleStep = (value:number) => () => {
        setActiveStep((prevStep) => {
            if (prevStep < steps.length - 1 || (prevStep > 0 && value === -1)) {
                return prevStep + value;
            }
            if (prevStep === steps.length - 1) {
                handleCreateAccount();
            }
            return prevStep;
        });
    };

    const handleCreateAccount = () => {
        console.log("create account...")
    }

    const formik = useFormik({
        initialValues: {
            mobile: "",
            otp: "",
            gstin: "",
            pickupAddress: {
                name: "",
                mobile: "",
                pincode: "",
                address: "",
                locality: "",
                city: "",
                state: "",
            },
            bankDetails: {
                accountNumber: "",
                ifscCode: "",
                accountHolderName: "",
            },
            sellerName: "",
            email: "",
            businessDetails: {
                businessName: "",
                businessEmail: "",
                businessMobile: "",
                logo: "",
                banner: "",
                businessAddress: "",
            },
            password: "",
        },
        onSubmit: (values)=> {
            console.log(values,"formik submited");
            console.log("active step",activeStep);
            
        }
    });

    return(
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {
                    steps.map((lable,index)=>(
                        <Step key={lable}>
                            <StepLabel>{lable}</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
            <section>
                {
                    activeStep===0 ? <BecomeSellerFormStep1 formik={formik}/>:""
                }

            </section>
            <div className="flex items-center justify-between">
                <Button onClick={handleStep(-1)} variant="contained" disabled={activeStep===0}>
                    back
                </Button>
                <Button onClick={handleStep(1)} variant="contained" >
                {
                    activeStep==(steps.length-1)?"Create Account":"Continue"
                }
                    continue
                </Button>

            </div>
        </div>
    )
}

export default SellerAccountForm;