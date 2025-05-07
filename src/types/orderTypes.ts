import { Product } from "./productTypes.ts";
import { Address, User } from "./userTypes.ts";

export interface OrderState{
    orders:Order[];
    orderItem:OrderItem | null;
    currentOrder:Order | null;
    paymentOrder:any | null;
    loading:boolean;
    error:string | null;
    orderCanceled:boolean;
}

export interface Order{
    id:number;
    orderId:number;
    user:User;
    sellerId:number;
    orderItem:OrderItem[];
    orderDate:string;
    shippingAddress:Address;
    paymentDetails:any;
    totalMrpPrice:number;
    totalSellingPrice?:number;
    discount?:number;
    orderStatus:OrderStatus;
    totalItem:number;
    deliverDate:string;
}

export enum OrderStatus{
    PENDING="PENDING",
    SHIPPED="SHIPPED",
    DELIVERED="DELIVERED",
    CANCELLED="CANCELLED"
}

export interface OrderItem{
    id:number;
    order:Order;
    product:Product;
    size:string;
    quantity:number;
    mrpPrice:number;
    sellingPrice:number;
    userId:number;
}