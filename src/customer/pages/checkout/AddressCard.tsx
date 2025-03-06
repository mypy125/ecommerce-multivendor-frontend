import { Radio } from "@mui/material";
import React from "react";

const AddressCard = () => {

    const handleChange =(event:any) => {
        console.log(event.target.checked)
    }

    return(
        <div className="p-5 border rounded-md flex">
            <div>
                <Radio
                checked={true}
                onChange={handleChange}
                value=""
                name="radio-button"

                />
            </div>
            <div className="space-y-3 pt-3">
                <h1>Gor</h1>
                <p className="w-[320px]">Armenia, Yerevan, Arabkir 124</p>
                <strong>Mobile:<span> +37444082124</span></strong>
            </div>
        </div>
    )
}

export default AddressCard;