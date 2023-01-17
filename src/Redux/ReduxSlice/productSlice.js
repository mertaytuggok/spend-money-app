import { createSlice } from "@reduxjs/toolkit";
import Product from "../../Product/Product.json";

const data = Product;

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: data,
    budget: 100000000000,
    initialMoney: 100000000000,
  },
  reducers: {
    updateCount: (state, action) => {
      const { count, id } = action.payload;

      const product = state.items.find((product) => product.id === id);
      product.count = count;

      let price = 0;

      state.items.forEach((product) => {
        price += Number(product.count) * Number(product.productPrice);
      });

      state.budget = state.initialMoney - Number(price);
    },
  },
});

export const { updateCount } = productsSlice.actions;
export default productsSlice.reducer;
