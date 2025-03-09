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
                    src="https://img.freepik.com/free-vector/blond-man-with-eyeglasses-icon-isolated_24911-100831.jpg?semt=ais_hybrid"
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