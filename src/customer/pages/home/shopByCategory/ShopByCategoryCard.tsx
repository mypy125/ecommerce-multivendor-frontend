import React from "react";
import "./ShopByCategory.css";

const ShopByCategoryCard = () => {
    return(
        <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">

            <div className="custome-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color">
                <img className="rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full"
                    src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2V5Ym9hcmQlMjBhbmQlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="" />
            </div>
            <h1>keyboard & laptop</h1>

        </div>
    )
}

export default ShopByCategoryCard;