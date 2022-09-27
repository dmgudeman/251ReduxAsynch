import { createSlice } from "@reduxjs/toolkit";


const initialCartState = { cart: {}, showCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
   
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;