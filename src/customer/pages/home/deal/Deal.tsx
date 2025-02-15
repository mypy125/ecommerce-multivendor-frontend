import React from "react";
import DealCard from "./DealCard.tsx";

const Deal = () => {
    return(
        <div className="py-5 lg:px-20">
            
            <div className="flex items-center justify-between">
            {[...Array(5)].map((_,index)=><DealCard/>)}
            </div>
        </div>
    )
}

export default Deal;