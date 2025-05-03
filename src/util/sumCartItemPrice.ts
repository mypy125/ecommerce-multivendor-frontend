import { CartItem } from "../types/cartTypes";

export const sumCartItemMrPrice = (cartItems:CartItem[]) =>{
    return cartItems.reduce((idx,item)=>idx+item.mrPrice*item.quantity,0)
}

export const sumCartItemSellingPrice = (cartItems:CartItem[]) =>{
    return cartItems.reduce((idx,item)=>idx+item.sellingPrice*item.quantity,0)
}