import { configureStore } from "@reduxjs/toolkit";
import Products from "./Cart"
const  store = configureStore({
    reducer:{
        Cart:Products.reducer,
    }
})
export default store;