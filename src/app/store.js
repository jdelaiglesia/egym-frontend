import { configureStore } from "@reduxjs/toolkit";
import testSlice from "../features/testSlice/testSlice";

export const store = configureStore({
    reducer: {
        test : testSlice
    }
})
