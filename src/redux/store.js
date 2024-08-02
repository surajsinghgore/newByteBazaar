"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";


import CartPopUpModelStateReducer from "./slice/CartPopUpModelState";

// manage reducer
const rootReducer = combineReducers({


  cartPopUpState: CartPopUpModelStateReducer,
  

});

export const store = configureStore({
  reducer: rootReducer,
});