import React from "react";

const DealCard = () => {
    return (
        <div className="w-[13rem] cursor-pointer hover:scale-105 transition-transform duration-200">
            <img 
                className="border-4 border-pink-600 w-full h-[12rem] object-cover object-top rounded-t-lg"
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                alt="Smart Watch"
            />
            <div className="border-4 border-black bg-black text-white p-3 text-center rounded-b-lg">
                <p className="text-lg font-semibold">Smart Watch</p>
                <p className="text-2xl font-bold">20% OFF</p>
                <p className="text-lg uppercase tracking-wide">Shop Now</p>
            </div>
        </div>
    );
}

export default DealCard;
