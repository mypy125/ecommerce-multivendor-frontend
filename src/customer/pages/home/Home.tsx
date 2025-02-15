import React from "react";
import ElectricCategory from "./electronicCategory/ElectricCategory.tsx";
import CategoryGrid from "./categoryGrid/CategoryGrid.tsx";
import Deal from "./deal/Deal.tsx";

const Home = () => {
    return(
       <>
            <div className="space-y-5 lg:spce-y-10 relative pb-20">
                <ElectricCategory/>
                <CategoryGrid/>
                <Deal/>
            </div>
       </>
    )
}

export default Home;