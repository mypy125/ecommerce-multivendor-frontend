import React from "react";
import ShopByCategoryCard from "./ShopByCategoryCard.tsx";

const ShopByCategory = () => {
    return(
        <div className="flex flex-wrap justify-between lg:px-20 gap-7">
            {
                [...Array(8)].map((_,index)=><ShopByCategoryCard/>)
            }
        </div>
    )
}

export default ShopByCategory;