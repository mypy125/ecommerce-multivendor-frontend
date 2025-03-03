import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid2, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const ReviewCard = () => {
    return(
        <div className="flex justify-between">

            <Grid2 container spacing={9}>

                <Grid2 size={{xs:1}}>
                    <Box>
                        <Avatar className="text-withe" sx={{width:56, height:56, bgcolor:"#9155FD"}}>
                            G
                        </Avatar>
                    </Box>
                </Grid2>
                <Grid2 size={{xs:9}}>
                    <div className="space-y-2">
                        <div>
                            <p className="font-semibold text-lg">Gor</p>
                            <p className="opacity-70">2025-09-27T23:16:07.478333</p>
                        </div>
                    </div>

                    <Rating
                    readOnly
                    value={4.5}
                    precision={1}
                    />
                    <p>value for money product, great product</p>

                    <div>
                        <img className="w-24 h-24 object-cover"
                        src="https://images.unsplash.com/photo-1611242133994-78696d90da8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0Nnx8fGVufDB8fHx8fA%3D%3D"
                         alt="" />
                    </div>

                </Grid2>

            </Grid2>
                <div>
                    <IconButton>
                        <Delete sx={{color:red[700]}}/>
                    </IconButton>
                </div>
        </div>
    )
}

export default ReviewCard;