import React from "react";
import ProfileFieldCard from "../../../component/ProfileFieldCard.tsx";
import { Divider } from "@mui/material";

const UserDetails = () => {
    return(
        <div className="flex justify-center py-10">

            <div className="w-full lg:w-[70%]">

                <div className="flex items-center pb-3 justify-between">

                    <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>

                </div>
                <div className="">
                    <ProfileFieldCard keys="Name" value={"Gor"}/>
                    <Divider/>
                    <ProfileFieldCard keys="Email" value={"gor1990.mkhitatryan@gmail.com"}/>
                    <Divider/>
                    <ProfileFieldCard keys="Mobile" value={"+(374)44-08-21-24"}/>
                </div>
            </div>

        </div>
    )
}

export default UserDetails;