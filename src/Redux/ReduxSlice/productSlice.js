import { createSlice } from "@reduxjs/toolkit";
import Product from "../../Product/Product.json";

const data = Product.products;
export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: data,
    budget: 100000000000,
    initialMoney: 100000000000,
  },
  reducers: {},
});

export default productsSlice.reducer;
