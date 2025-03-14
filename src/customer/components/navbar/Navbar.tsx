import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { AddShoppingCart, FavoriteBorder, Storefront } from "@mui/icons-material";
import CategorySheet from "./CategorySheet.tsx";
import { mainCategory } from "../../../data/category/mainCategory.ts";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const isLoggedIn = true;
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
    const [selectedCategory, setSelectedCategory]=useState("men");
    const [showCategorySheet, setShowCategorySheet]=useState(false);
    const navigate=useNavigate();

    return (
        <>
            <Box className="sticky top-0 left-0 right-0 bg-white" sx={{ zIndex: 2 }}>
                <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
                    <div className="flex items-center gap-9">
                        {!isLarge && <IconButton>
                                     <MenuIcon />
                                    </IconButton>
                        }
                        
                        <h1 onClick={()=>navigate("/")} className="logo cursor-pointer text-lg md:text-2xl text-primary-color">
                            shop
                        </h1>
                    </div>

                    <ul className="flex items-center font-medium text-gray-800">
                        {mainCategory.map((item) =><li 
                        onMouseLeave={()=>{
                            setShowCategorySheet(false);
                        }}
                        onMouseEnter={()=>{
                            setShowCategorySheet(true);
                            setSelectedCategory(item.categoryId);
                        }}
                                className="mainCategory hover:text-primary-color hover:border-b-2 
                                           h-[70px] px-4 border-primary-color flex items-center transition-all
                                            duration-200"> 
                                {item.name}
                            </li>)}
                    </ul>

                    <div className="flex gap-1 lg:gap-6 items-center">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>

                        {isLoggedIn ? (
                            <Button onClick={()=>navigate("/account/orders")} className="flex items-center gap-2">
                                <Avatar 
                                    sx={{ width: 29, height: 29 }} 
                                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                />
                                <h1 className="font-semibold hidden lg:block">Gor</h1>
                            </Button>
                        ) : (
                            <Button variant="contained">Login</Button>
                        )}

                        <IconButton>
                            <FavoriteBorder sx={{ fontSize: 29 }} />
                        </IconButton>

                        <IconButton onClick={()=>navigate("/cart")}>
                            <AddShoppingCart className="text-gray-700" sx={{ fontSize: 29 }} />
                        </IconButton>

                        {isLarge && (
                            <Button startIcon={<Storefront />} variant="outlined">
                                Become Seller
                            </Button>
                        )}
                    </div>
                </div>
                {showCategorySheet && <div 
                    onMouseLeave={()=>{setShowCategorySheet(false);}}
                     onMouseEnter={()=>{setShowCategorySheet(true); }}
                    className="categorySheet absolute top-[4.41rem] left-20 right-20 border">
                    <CategorySheet selectedCategory={selectedCategory}/>
                </div>}
            </Box>
        </>
        
    );
}

export default Navbar;
