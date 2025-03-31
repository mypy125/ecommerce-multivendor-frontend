import { AddPhotoAlternate } from "@mui/icons-material";
import { Alert, Button, CircularProgress, FormControl, FormHelperText, Grid2, IconButton, InputLabel,
     MenuItem, Select, Snackbar, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { uploadImageToCloudinary } from "../../../util/uploadToCloudinary.ts";
import { menLevelTwo } from "../../../data/category/level two/menLevelTwo.ts";
import { womenLevelTwo } from "../../../data/category/level two/womenLevelTwo.ts";
import { furnitureLevelTwo } from "../../../data/category/level two/furnitureLevelTwo.ts";
import { electronicsLevelTwo } from "../../../data/category/level two/electronicsLevelTwo.ts";
import { menLevelThree } from "../../../data/category/level three/menLevelThree.ts";
import { womenLevelThree } from "../../../data/category/level three/womenLevelThree.ts";
import { furnitureLevelThree } from "../../../data/category/level three/furnitureLevelThree.ts";
import { electronicsLevelThree } from "../../../data/category/level three/electronicsLevelThree.ts";
import { mainCategory } from "../../../data/category/mainCategory.ts";
import { colors } from "../../../data/filter/color.ts";

const categoryTwo: { [key: string]: any[] } = {
    men: menLevelTwo,
    women: womenLevelTwo,
    kids: [],
    home_furniture: furnitureLevelTwo,
    beauty: [],
    electronics: electronicsLevelTwo
};

const categoryThree: { [key: string]: any[] } = {
    men: menLevelThree,
    women: womenLevelThree,
    kids: [],
    home_furniture: furnitureLevelThree,
    beauty: [],
    electronics: electronicsLevelThree
};

const AddProductForm = () => {
    const [uploadImage, setUploadImage] = useState(false);
    const [snackbarOpen, setOpenSnackbar] = useState(false);

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            mrPrice: "",
            sellingPrice: "",
            quantity: "",
            color: "",
            images: [],
            category: "",
            category2: "",
            category3: "",
            size: "",
        },
        onSubmit: (values) => {
            console.log(values)
        }
    });

    const handleImageChange = async (event: any) => {
        const file = event.target.files[0];
        setUploadImage(true);
        const image = await uploadImageToCloudinary(file);
        formik.setFieldValue("images", [...formik.values.images, image]);
        setUploadImage(false);
    };

    const handleRemoveImage = (index: number) => {
        const updateImages = [...formik.values.images];
        updateImages.splice(index, 1);
        formik.setFieldValue("images", updateImages);
    };

    const childCategory = (category: any, parentCategoryId: any) => {
        return category.filter((child: any) => {
            return child.parentCategoryId===parentCategoryId;
        });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="space-y-4 p-4">
                <Grid2 container spacing={2}>

                    <Grid2 className="flex flex-wrap gap-5" size={{xs: 12}}>
                        <input
                            type="file"
                            accept="image/*"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                        />

                        <label className="relative" htmlFor="fileInput">
                            <span className="w-24 h-24 cursor-pointer flex items-center justify-center
                                p-3 border rounded-md border-gray-400">
                                <AddPhotoAlternate className="text-gray-700" />
                            </span>
                            {
                                uploadImage && (
                                    <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 
                                    flex justify-center items-center">
                                        <CircularProgress />
                                    </div>
                                )
                            }
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {
                                formik.values.images.map((image, index) => (
                                    <div className="relative">
                                        <img className="w-24 h-24 object-cover"
                                            key={index}
                                            src={image}
                                            alt={`ProductImage ${index + 1}`}
                                        />

                                        <IconButton
                                            onClick={() => handleRemoveImage(index)}
                                            className=""
                                            size="small"
                                            color="error"
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                right: 0,
                                                outline: "none"
                                            }}
                                        />

                                    </div>
                                ))
                            }

                        </div>

                    </Grid2>
                    <Grid2 size={{xs: 12}}>
                        <TextField
                            fullWidth
                            id="title"
                            name="title"
                            label="Title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                            required
                        />

                    </Grid2>
                    <Grid2 size={{xs: 12}}>
                        <TextField
                            multiline
                            rows={4}
                            fullWidth
                            id="description"
                            name="description"
                            label="Description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                            required
                        />

                    </Grid2>
                    <Grid2 size={{xs: 12, md: 4, lg: 3}}>
                        <TextField
                            fullWidth
                            id="mrPrice"
                            name="mrPrice"
                            label="MRP Price"
                            type="number"
                            value={formik.values.mrPrice}
                            onChange={formik.handleChange}
                            error={formik.touched.mrPrice && Boolean(formik.errors.mrPrice)}
                            helperText={formik.touched.mrPrice && formik.errors.mrPrice}
                            required
                        />

                    </Grid2>
                    <Grid2 size={{xs: 12, md: 4, lg: 3}}>
                        <TextField
                            fullWidth
                            id="sellingPrice"
                            name="sellingPrice"
                            label="Selling Price"
                            type="number"
                            value={formik.values.sellingPrice}
                            onChange={formik.handleChange}
                            error={formik.touched.sellingPrice && Boolean(formik.errors.sellingPrice)}
                            helperText={formik.touched.sellingPrice && formik.errors.sellingPrice}
                            required
                        />

                    </Grid2>
                    <Grid2 size={{xs: 12, md: 4, lg: 3}}>
                        <FormControl
                            fullWidth
                            error={formik.touched.color && Boolean(formik.errors.color)}
                            required
                        >
                            <InputLabel id="color-label">Color</InputLabel>
                            <Select
                                labelId="color-label"
                                id="color"
                                name="color"
                                value={formik.values.color}
                                onChange={formik.handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    colors.map((color, index) => (
                                        <MenuItem key={index} value={color.name}>
                                            <div className="flex gap-3">
                                                <span
                                                    style={{ backgroundColor: color.hex }}
                                                    className={`h-5 w-5 rounded-full ${color.name === "White" ? "border" : ""}`}
                                                ></span>
                                                <p>{color.name}</p>
                                            </div>
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                            {
                                formik.touched.color && formik.errors.color && (
                                    <FormHelperText>{formik.errors.color}</FormHelperText>
                                )
                            }
                        </FormControl>
                    </Grid2>
                    <Grid2 size={{xs: 12, md: 4, lg: 3}}>
                        <FormControl
                            fullWidth
                            error={formik.touched.size && Boolean(formik.errors.size)}
                            required
                        >
                            <InputLabel id="size-label">Size</InputLabel>
                            <Select
                                labelId="size-label"
                                id="size"
                                name="size"
                                label="Size"
                                value={formik.values.size}
                                onChange={formik.handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="FREE">FREE</MenuItem>
                                <MenuItem value="S">S</MenuItem>
                                <MenuItem value="M">M</MenuItem>
                                <MenuItem value="L">L</MenuItem>
                                <MenuItem value="XL">XL</MenuItem>
                            </Select>
                            {
                                formik.touched.size && formik.errors.size && (
                                    <FormHelperText>{formik.errors.size}</FormHelperText>
                                )
                            }
                        </FormControl>
                    </Grid2>
                    <Grid2 size={{xs: 12, md: 4, lg: 4}}>
                        <FormControl
                            fullWidth
                            error={formik.touched.category && Boolean(formik.errors.category)}
                            required
                        >
                            <InputLabel id="category-label">Category</InputLabel>
                            <Select
                                labelId="category-label"
                                id="category"
                                name="category"
                                label="Category"
                                value={formik.values.category}
                                onChange={formik.handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    mainCategory.map((item) => (
                                        <MenuItem value={item.categoryId}>
                                            {item.name}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                            {
                                formik.touched.category && formik.errors.category && (
                                    <FormHelperText>{formik.errors.category}</FormHelperText>
                                )
                            }
                        </FormControl>
                    </Grid2>
                    <Grid2 size={{xs: 12, md: 4, lg: 4}}>
                        <FormControl
                            fullWidth
                            error={formik.touched.category2 && Boolean(formik.errors.category2)}
                            required
                        >
                            <InputLabel id="category-label">Second Category</InputLabel>
                            <Select
                                labelId="category-label"
                                id="category"
                                name="category2"
                                label="Second Category"
                                value={formik.values.category2}
                                onChange={formik.handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    formik.values.category &&
                                        categoryTwo[formik.values.category]?.map((item) => (
                                        <MenuItem value={item.categoryId}>
                                            <p>{item.name}</p>
                                        </MenuItem>
                                    )
                                        
                                    )
                                }
                            </Select>
                            {
                                formik.touched.category2 && formik.errors.category2 && (
                                    <FormHelperText>{formik.errors.category2}</FormHelperText>
                                )
                            }
                        </FormControl>
                    </Grid2>
                    <Grid2 size={{xs: 12, md: 4, lg: 4}}>
                        <FormControl
                            fullWidth
                            error={formik.touched.category3 && Boolean(formik.errors.category3)}
                            required
                        >
                            <InputLabel id="category-label">Third Category</InputLabel>
                            <Select
                                labelId="category-label"
                                id="category"
                                name="category3"
                                label="Third Category"
                                value={formik.values.category3}
                                onChange={formik.handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    formik.values.category2 &&
                                    childCategory(
                                        categoryThree[formik.values.category],
                                        formik.values.category2
                                    )?.map((item:any) => (
                                        <MenuItem value={item.categoryId}>
                                            <p>{item.name}</p>
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                            {
                                formik.touched.category3 && formik.errors.category3 && (
                                    <FormHelperText>{formik.errors.category3}</FormHelperText>
                                )
                            }
                        </FormControl>
                    </Grid2>
                    <Grid2 size={{xs: 12}}>
                        <Button 
                        sx={{p: "14px"}} 
                        fullWidth 
                        type="submit" 
                        variant="contained" 
                        color="primary"
                        >
                            Add Product
                        </Button>
                    </Grid2>
                </Grid2>
            </form>
            <Snackbar
            anchorOrigin={{vertical: "top", horizontal: "right" }}
            open={snackbarOpen} autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            >
              <Alert
              onClose={handleCloseSnackbar}
              security=""
              variant="filled"
              sx={{width: "100%"}}
              >
                {true?"Product Created Successufuly":"error"}
              </Alert>
            </Snackbar>
        </div>
    );
};

export default AddProductForm;