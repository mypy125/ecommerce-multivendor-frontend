import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import OrderSepper from "./OrderSepper.tsx";

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
       </Box>
    )

}

export default OrderDetails;