import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "../redux/slices/DataSlice"

export const Store = configureStore({
    reducer:{
        Data: DataSlice
    }
})