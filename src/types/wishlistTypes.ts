import { Product } from "./productTypes.ts";
import { User } from "./userTypes.ts";

export interface Wishlist{
    id:number;
    user:User;
    product:Product[];
}

export interface WishlistState{
    wishlist:Wishlist | null;
    loading:boolean;
    error:string | null;
}

export interface AddProductToWishlistPayload{
    wishlistId:number;
    productId:number;
}