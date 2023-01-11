import { createSlice } from "@reduxjs/toolkit";
import Product from "../../Product/Product.json";

const data = Product.products;

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: data,
  },
  reducers: {},
});

export default productsSlice.reducer;
