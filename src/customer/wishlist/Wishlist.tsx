import React, { useEffect } from "react";
import WishlistProductCard from "./WishlistProductCard";
import { useAppDispatch, useAppSelector } from "../../state/Store.ts";
import { getWishlistByUserId } from "../../state/customer/wishlistSlice.ts";

const Wishlist = () => {
    const dispatch = useAppDispatch();
    const {wishlist} = useAppSelector(store=>store);

    useEffect(()=>{
        dispatch(getWishlistByUserId())
    },[])
    return(
        <div className="h-[85vh] p-5 lg:p-20">
            <section>
                <h1><strong>My Wishlist</strong>8 items</h1>

                <div className="pt-10 flex flex-wrap gap-5">
                    {
                        wishlist.wishlist?.product.map((item)=><WishlistProductCard item={item}/>)
                    }
                </div>
            </section>
        </div>
    )
}

export default Wishlist;