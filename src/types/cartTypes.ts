import {Product} from "./productTypes.ts";
import {User} from "./userTypes.ts"

export interface CartItem{
    id:number;
    cart?:Cart;
    product:Product;
    size:string;
    quantity:number;
    mrPrice:number;
    sellingPrice:number;
    userId:number;
}

export interface Cart{
    id:number;
    user:User;
    cartItems:CartItem[];
    totalSellingPrice:number;
    totalItem:number;
    totalMrPrice:number;
    discount:number;
    couponCode:string | null;
}