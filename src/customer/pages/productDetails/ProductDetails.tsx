import { Add, AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Star, Wallet, WorkspacePremium } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useState } from "react";
import SimilarProduct from "./SimilarProduct.tsx";
import ReviewCard from "../review/ReviewCard.tsx";

const ProductDateils = () => {
    const [quantity, setQuantity]=React.useState(1);

    return(
        <div  className="px-5 lg:px-20 pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <section className="flex flex-col lg:flex-row gap-5">
                    <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
                        {
                            [...Array(4)].map((item)=> 
                            <img className="lg:w-full w-[50px] cursor-pointer rounded-md"
                             src="https://images.unsplash.com/photo-1579175548263-85b7adfc5566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" 
                             alt=""
                             />)
                        }
                    </div>
                    <div className="w-full lg:w-[85%]">
                        <img className="w-full rounded-md"
                        src="https://images.unsplash.com/photo-1523537590773-17506913706b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHNob3J0fGVufDB8fDB8fHww"
                         alt="" />
                    </div>
                </section>
                <section>
                    <h1 className="font-bold text-lg text-primary-color">
                        Raam cloting
                    </h1>
                    <p className="text-gray-500 font-semibld">
                        men black shirt
                    </p>
                    <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
                        <div className="flex gap-1 items-center">
                            <span>4</span>
                            <Star sx={{color:teal[500], fontSize:"17px"}}/>
                        </div>
                        <Divider orientation="vertical" flexItem/>
                        <span>234 Ratings</span>
                    </div>
                    <div>
                        <div className="price flex items-center gap-3 mt-5 text-2xl">
                            <span className="font-sans text-gray-800">
                                ֏4000
                            </span>
                            <span className="line-through text-gray-400">
                                ֏9999
                            </span>
                            <span className="text-primary-color font-semibold">
                                60%
                            </span>
                        </div>
                        <p className="text-sm">Inclusive of all taxes, Free shiping above ֏ 15000.</p>
                    </div>

                    <div className="mt-7 space-y-3">
                        <div className="flex items-center gap-4">
                            <Shield sx={{color:teal[500]}}/>
                            <p>Authentic & Quality Assured</p>

                        </div>
                        <div className="flex items-center gap-4">
                            <WorkspacePremium sx={{color:teal[500]}}/>
                            <p>100% money back garantee</p>

                        </div>
                        <div className="flex items-center gap-4">
                            <LocalShipping sx={{color:teal[500]}}/>
                            <p>Free Shipping & Returnes</p>

                        </div>
                        <div className="flex items-center gap-4">
                            <Wallet sx={{color:teal[500]}}/>
                            <p>Pay on delivery might be available</p>

                        </div>
                    </div>

                    <div className="mt-7 space-y-2">

                        <h1>QUANTITY</h1>

                        <div className="flex items-center gap-2 w-[140px] justify-between">

                            <Button disabled={quantity==1} onClick={()=>setQuantity(quantity-1)}>
                                <Remove/>
                            </Button>
                            <span>
                                {quantity}
                            </span>
                            <Button onClick={()=>setQuantity(quantity+1)}>
                                <Add/>
                            </Button>
                        </div>
                    </div>

                    <div className="mt-12 flex items-center gap-5">
                        <Button
                        fullWidth 
                        variant="contained"
                        startIcon={<AddShoppingCart/>}
                        sx={{py:"1rem"}}>
                            Add To Bag
                        </Button>

                        <Button 
                        fullWidth
                        variant="outlined"
                        startIcon={<FavoriteBorder/>}
                        sx={{py:"1rem"}}>
                            Wishlist
                        </Button>
                    </div>
                    <div className="mt-5">
                        <p>
                        The saree comes with an unstitched blouse portion. The blouse worn by 
                        the model may be for modeling purposes only. Check the blouse portion 
                        image to get an idea of how the actual blouse portion looks like. 
                        </p>
                    </div>

                    <div className="mt-12 space-y-5">
                        <ReviewCard/>
                        <Divider/>
                    </div>

                </section>
            </div>

            <div className="mt-20">
                <h1 className="text-lg font-bold">
                    Similar Product
                </h1>
                <div className="pt-5">
                    <SimilarProduct/>
                </div>
                
            </div>
        </div>
    )
}

export default ProductDateils;