import {createContext} from "react";

//session用のcontext
export const SessionState = createContext("");
export const SessionDispatch = createContext("");

//food用context
export const FoodState = createContext("");
export const FoodDispatch = createContext("");

//user用context
export const UserState = createContext("");
export const UserDispatch = createContext("");

//order用context
export const OrderState = createContext("");
export const OrderDispatch = createContext("");

//task用contest
export const TaskState = createContext("");
export const TaskDispatch = createContext("");
