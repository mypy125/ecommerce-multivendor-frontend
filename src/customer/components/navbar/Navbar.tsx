import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    const isLoggedIn = false;

    return (
        <>
            <Box sx={{ width: '100%', borderBottom: '1px solid #ccc' }}>
                <div className="flex items-center justify-between px-5 lg:px-20 h-[70px]">
                    <div className="flex items-center gap-2">
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <h1 className="logo cursor-pointer text-lg md:text-2xl text-[#00927c]">
                            shop
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        {isLoggedIn ? (
                            <Button>gor</Button>
                        ) : (
                            <Button variant="contained">login</Button>
                        )}
                    </div>
                </div>
            </Box>
        </>
    );
}

export default Navbar;
