import React, {createContext} from "react";

//food用context
export const FoodState = createContext("");
export const FoodDispatch = createContext("");

//user用context
export const UserState = createContext("");
export const UserDispatch = createContext("");

//order用context
export const OrderState = createContext("");
export const OrderDispatch = createContext("");