import React from "react";
import UserAddressesCard from "./UserAddressCard.tsx";

const Address = () => {
    return(
        <div className="space-y-3">
            {
                [...Array(6)].map((item)=><UserAddressesCard/>)
            }
        </div>
    )
}

export default Address;