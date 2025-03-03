import React from "react";
import ReviewCard from "./ReviewCard.tsx";
import { Divider } from "@mui/material";

const Review = () => {
    return(
        <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">

            <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
            <img src="https://images.unsplash.com/photo-1523537590773-17506913706b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=
            M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHNob3J0fGVufDB8fDB8fHww" alt="" />

            <div>
                <div>
                    <p className="font-bold text-x1">Virani Clothing</p>
                    <p className="text-lg text-gray-600">Women's Withe Shirt </p>
                </div>
            </div>
            <div>
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
                </div>
            </div>
            </section>

            <section className="space-y-5 w-full">
                {
                    [...Array(6)].map((item)=> <div className="space-y-3"> <ReviewCard/>
                     <Divider/>
                    </div> 
                   
                    )
                }
            </section>

        </div>
    )
}

export default Review;