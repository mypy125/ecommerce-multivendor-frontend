import { CheckCircle, FiberManualRecord } from "@mui/icons-material";
import { Box } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React, { useEffect, useState } from "react";

const steps=[
    {name:"OrderPlaced", description:"on Thu, 11 March", value:"PLACED"},
    {name:"Packed", description:"Item packed in Dispatch Warehause", value:"CONFIRMED"},
    {name:"Shipped", description:"on Mon, 15 March", value:"SHIPPED"},
    {name:"Arriving", description:"on Thu, 16 March", value:"ARRIVING"},
    {name:"Arrived", description:"on Thu, 16 March", value:"DELIVERED"},
    // {name:"Canceled", description:"on Thu, 16 March", value:"CANCELED"}

]
const canceledStep=[
    {name:"Order Placed", description:"on Thu, 11 March", value:"PLACED"},
    {name:"Order Canceled", description:"on Thu, 11 March", value:"CANCELED"},
]

const currentStep=2
const OrderSepper = ({orderStatus}:any) => {
    const [statusStep, setStatusStep]=useState(steps);

    useEffect(()=> {
        if(orderStatus === 'CANCELED'){
            setStatusStep(canceledStep)
        }
        else{
            setStatusStep(steps)
        }
    },[orderStatus])
    return (
        <Box className=" my-10">
            {statusStep.map((step, index) => (
                <div key={index} className="flex px-4">
                    <div className="flex flex-col items-center">
                        <Box
                            sx={{ zIndex: -1 }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center z-10
                            ${index <= currentStep 
                                ? "bg-gray-200 text-teal-500" 
                                : "bg-gray-300 text-gray-600"}`}
                        >
                            {step.value === orderStatus ? (
                                <CheckCircle />
                            ) : (
                                <FiberManualRecord sx={{ zIndex: -1 }} />
                            )}
                        </Box>
                        {
                            index < statusStep.length -1 && (
                                <div className={`border h-20 w-[2px] ${index<currentStep
                                    ? "bg-primary-color"
                                    : "bg-gray-300 text-gray-600"
                                }`}
                                ></div>
                            )
                        }
                    </div>
                    <div className={`ml-2 w-full`}>
                        <div className={`${step.value===orderStatus
                            ? "bg-primary-color p-2 text-white font-medim rounded-md -translate-y-3"
                            :""
                        } ${(orderStatus==="CANCALED"&&step.value===orderStatus)
                            ? "bg-red-500":""
                        }w-full`}
                        >
                            <p className={``} >
                                {step.name}
                            </p>
                            <p className={`${step.value===orderStatus
                                ? "text-gray-200"
                                : "text-gray-500"
                            } text-xs`}
                            >
                                {step.description}
                            </p>

                        </div>
                    </div>
                </div>
            ))}
        </Box>
    );
    
}

export default OrderSepper;