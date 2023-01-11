import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ReduxSlice/productSlice";

export const Store = configureStore({
  reducer: {
    products: productSlice,
  },
});
