import React from "react";
import ElectricCategoryCard from "./ElectricCategoryCard.tsx";

const ElectricCategory = () => {
    return(
       <div className="flex flex-wrap justify-between py-5 lg:px-20 border-b">
        {[...Array(7)].map((_,index)=><ElectricCategoryCard/> )}
            
       </div>
    )
}

export default ElectricCategory