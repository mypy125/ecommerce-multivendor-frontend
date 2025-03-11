import { Box, Button, Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderSepper from "./OrderSepper.tsx";
import { Payments } from "@mui/icons-material";

const OrderDetails = () => {
    const navigate = useNavigate();
    return(
       <Box>
        <section className="flex flex-col gap-5 justify-center items-center">

            <img className="w-[100px]"
             src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D" alt="" 
            />

            <div className="text-sm space-y-1 text-center">
                <h1 className="font-bold">
                    {"Armani Clothing"}
                </h1>
                <p>Cellecor A9 Pro Stark Bluetooth Calling Smart Watch with 1.96"
                LCD Display, SpO2 & Heart Rate Monitor, IP68 Water Resistant, 5 Days.</p>
                <p><strong>Size: </strong>M</p>
            </div>
            <div>
                <Button onClick={()=> navigate(`/reviews/${5}/create`)}>Write Review</Button>
            </div>
        </section>

        <section className="border p-5">
            <OrderSepper orderStatus={"SHIPPED"}/>
        </section>

        <div className="border pb-5 p-5">
            <h1 className="font-bold pb-3">Delivery Address</h1>
            <div className="text-sm space-y-2">
                <div className="flex gap-5 font-medium">
                    <p>{"Gor"}</p>
                    <Divider flexItem orientation="vertical"/>
                    <p>{37444082124}</p>
                </div>
                <p>Armenia Yerevan, Komitas 12 str</p>
            </div>
        </div>
        <div className="border space-y-4">
            <div className="flex justify-between text-sm pt-5 px-5">
                <div className="space-y-1">
                    <p className="font-bold">Total Item Price</p>
                    <p>You saved <span className="text-green-500 font-medium text-xs">֏{4999}.00</span> on this item</p>
                </div>
                <p className="font-medium">֏{5999}.00</p>
            </div>
            <div className="px-5">
                <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
                    <Payments/>
                    <p>Pay On Delivery</p>
                </div>
            </div>

            <Divider/>

            <div className="px-5 pb-5">
                <p className="text-xs"><strong>Sold by : </strong>{"Armani Clothing"}</p>
            </div>

            <div className="p-10">
                <Button
                disabled={true}
                // onClick={handleCencelOrder}
                color="error" sx={{py:"0.7rem"}} className="" variant="outlined"
                fullWidth
                >
                    {
                        true ? "order canceled":"Cancel Order"
                    }
                </Button>
            </div>
        </div>
       </Box>
    )

}

export default OrderDetails;