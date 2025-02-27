import { ImageRounded } from "@mui/icons-material";
import React from "react";

const SimilarProductCard = () => {
    return(
        <div> 
            <div className="group px-4 relative">
                <div className="card">
                    <img className="card-media object-top"
                        src={"https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxzaGlydHxlbnwwfHwwfHx8MA%3D%3D"}
                         alt=""
                        />

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
        </div>
    )
}

export default SimilarProductCard;