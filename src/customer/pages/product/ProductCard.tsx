import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const images=[
    "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1598522325484-118715b67eb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvcnR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1522706604291-210a56c3b376?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1589902818128-b557d782c2d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1627910087352-f4e3e28d9f5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
]
const ProductCard = () => {
    const [currentImage,setCurrentImage]=useState(0);
    const [isHovered,setIsHovered]=useState(false);

    useEffect(()=>{

        let interval:any

        if(isHovered){
            interval=setInterval(()=>{
                setCurrentImage((prevImage)=>(prevImage+1)%images.length);
            },1000);
        }
        else if(interval){
            clearInterval(interval);
            interval=null;
        }
        return () => clearInterval(interval);

    },[isHovered])
    return(
        <>
            <div className="group px-4 relative">
                <div 
                onMouseDownCapture={()=> setIsHovered(true)} 
                onMouseLeave={()=>setIsHovered(false)}
                className="card">
                    {
                        images.map((item,index)=> <img className="card-media object-top"
                        src={item} alt=""
                        style={{transform:`translateX(${(index-currentImage)*100}%)`}}
                        />)}

                        {isHovered &&
                            <div className="indicator flex flex-col items-center space-y-2">
                                <div className="flex gap-3">
                                    <Button variant="contained" color="secondary">
                                        <Favorite sx={{color:teal[500]}}/>
                                    </Button>
                                    <Button variant="contained" color="secondary">
                                        <ModeComment sx={{color:teal[500]}}/>
                                    </Button>
                                </div>
                            </div>
                        }
                </div>
                <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
                    <div className="name">
                        <h1>Nike</h1>
                        <p>Blue Shirt</p>
                    </div>
                    <div className="price flex items-center gap-3">
                        <span className="font-sans text-gray-800">
                            ֏5000
                        </span>
                        <span className="thin-line-through text-gray-400">
                            ֏9000
                        </span>
                        <span className="text-primary-color font-semibold">
                            60%
                        </span>
                    </div>

                </div>

            </div>

        </>
    )
}

export default ProductCard;