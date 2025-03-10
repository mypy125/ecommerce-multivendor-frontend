import React from "react";
import {Avatar} from '@mui/material';
import { ElectricBolt } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const OrderItem = () => {
    return(
       <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">

        <div className="flex items-center gap-5">

            <div>
                <Avatar sizes="small" sx={{bgcolor:teal[500]}}>
                    <ElectricBolt/>
                </Avatar>
            </div>
            <div>
                <h1 className="font-bold text-primary-color">
                    PENDING
                </h1>
                <p>Arriving By Mont, 15 march</p>
            </div>
        </div>
        <div className="p-5 bg-teal-50 flex gap-3">
            <div>
                <img className="w-[70px]" 
                    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
                 alt="" 
                />
            </div>
            <div className="w-full space-y-2">
                <h1 className="font-bold">Armani Clothing</h1>
                <p>Cellecor A9 Pro Stark Bluetooth Calling Smart Watch with 1.96"
                     LCD Display, SpO2 & Heart Rate Monitor, IP68 Water Resistant, 5 Days.
                </p>
                <p>
                    <strong>Size: </strong>
                    FREE
                </p>
            </div>
        </div>
        
       </div>
    )
}

export default OrderItem;