import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cartslice'
import wishResucer from "./Whishslice"

const Store = configureStore({
    reducer: {
    cart: cartReducer,
    whish: wishResucer,

    },
})
export default Store;

