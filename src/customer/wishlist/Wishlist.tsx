import React from "react";
import WishlistProductCard from "./WishlistProductCard";

const Wishlist = () => {
    return(
        <div className="h-[85vh] p-5 lg:p-20">
            <section>
                <h1><strong>My Wishlist</strong>8 items</h1>

                <div className="pt-10 flex flex-wrap gap-5">
                    {
                        [...Array(5).map((item)=><WishlistProductCard/>)]
                    }
                </div>
            </section>
        </div>
    )
}

export default Wishlist;