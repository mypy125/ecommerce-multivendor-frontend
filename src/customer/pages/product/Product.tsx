import React, { useEffect, useState } from "react";
import FilterSection from "./FilterSection.tsx";
import ProductCard from "./ProductCard.tsx";
import { Divider, FormControl, IconButton, InputLabel, MenuItem, Pagination, Select, 
    useMediaQuery, useTheme 
} from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../state/Store.ts";
import { fetchAllProducts } from "../../../state/customer/productSlice.ts";
import {  useParams, useSearchParams } from "react-router-dom";

const Product = () => {
    const them = useTheme();
    const isLarge = useMediaQuery(them.breakpoints.up("lg"));
    const [sort,setSort]=useState();
    const [page,setPage]=useState(1);
    const dispatch=useAppDispatch();
    const [searchParam,setSearchParams]=useSearchParams();
    const {category}=useParams();
    const {product}=useAppSelector(store=>store);

    const handleSortChange = (event:any) => {
        setSort(event.taget.value)
    }

    const handlePageChange = (value:number) => {
        setPage(value);
    }

    useEffect(()=>{
        const [minPrice,maxPrice]=searchParam.get("price")?.split("-")||[];
        const color=searchParam.get("color");
        const minDiscount=searchParam.get("discount")?Number(searchParam.get("discount")):undefined;
        const pageNumber=page-1;
        const newFilter={
            color:color || "",
            minPrice:minPrice?Number(minPrice):undefined,
            maxPrice:maxPrice?Number(maxPrice):undefined,
            minDiscount,
            page:pageNumber,
        }
        dispatch(fetchAllProducts({newFilter}));
    },[category,searchParam])

    return(
        <div className="-z-10- mt-10">
            <div>
                <h1 className="text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase spce-x-2">
                    women sarees
                </h1>
                <div className="lg:flex">
                    <section className="filter_section hidden lg:block w-[20%]">
                        <FilterSection/>
                    </section>
                    <div className="w-full lg:w-[80%] space-y-5">
                        <div className="flex justify-between items-center px-9 h-[40px]">
                            <div className="relative w-[50%]">
                                {
                                    !isLarge && (<IconButton>
                                        <FilterAlt/>
                                    </IconButton>)
                                }

                            </div>
                            <FormControl size="small" sx={{width:"200px"}}>
                              <InputLabel id="demo-simple-select-label">Age</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sort}
                                label="Age"
                                onChange={handleSortChange}
                              >
                                <MenuItem value={"price_low"}>Price : Low - High</MenuItem>
                                <MenuItem value={"price_high"}>Price : High - Low</MenuItem>
                              </Select>
                            </FormControl>
                        </div>

                        <Divider/>

                        <section className="products_section grid sm:grid-cols-2 md:grid-cols-3
                         lg:grid-cols-4 gap-y-5 px-5 justify-center">
                            {
                                product.products.map((item)=><ProductCard item={item}/>)
                            }
                        </section>
                        <div className="flex justify-center py-10">
                            <Pagination onChange={(e,value)=>handlePageChange(value)}
                             count={10} 
                             variant="outlined" 
                             color="primary"
                             />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;