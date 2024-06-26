import { createContext } from "react";

//session用のcontext
export const SessionState = createContext("");
export const SessionDispatch = createContext("");

//guestSession用のcontext
export const GuestState = createContext("");
export const GuestDispatch = createContext("");

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

//message用context
export const MessageState = createContext("");
export const MessageDispatch = createContext("");
