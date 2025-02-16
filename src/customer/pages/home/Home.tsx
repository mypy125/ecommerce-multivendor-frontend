import React from "react";
import ElectricCategory from "./electronicCategory/ElectricCategory.tsx";
import CategoryGrid from "./categoryGrid/CategoryGrid.tsx";
import Deal from "./deal/Deal.tsx";
import ShopByCategory from "./shopByCategory/ShopByCategory.tsx";
import { Button } from "@mui/material";
import { Storefront } from "@mui/icons-material";

const Home = () => {
    return(
       <>
            <div className="space-y-5 lg:spce-y-10 relative pb-20">
                <ElectricCategory/>
                <CategoryGrid/>
             
                <div className="pt-20">
                    <h1 className="text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10 text-center">
                        TUDAY'S DEAL
                    </h1>
                    <Deal/>
                </div>

                <section className="py-20">
                    <h1 className="text-lg lg:text-4xl font-bold text-primary-color pb-5 lg:pb-10 text-center">
                        SHOP BY CATEGORY
                    </h1>
                    <ShopByCategory/>
                </section>

                <section className="lg:px-20 relative h-[200px] lg:h-[450px] object-cover">
                    <img className="w-full h-full"
                        src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Shop Banner" />
                    <div className="absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3">
                        <h1>Sell your Product</h1>
                        <p className="text-lg md:text-2xl">With<span className="logo"> Shop</span></p>
                        <div className="pt-6 flex justify-center">
                            <Button startIcon={<Storefront/>} variant="contained" size="large">
                                Become Seller
                            </Button>
                        </div>
                    </div>
                </section>

            </div>
       </>
    )
}

export default Home;