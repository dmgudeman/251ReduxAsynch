import { createSlice } from "@reduxjs/toolkit";


const initialProductsState = { products:{id:0, title:'Test',
price:6,
description:'This is a first product - amazing!'},

};

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    populateProducts(state, action) {
        console.log('222', state)
    //    state.products= initialProductsState;
      
    },
    addProduct(state, action) {
        console.log('3333333333')
      state.products = state.products + state.products[action.payload.key];
      console.log(state)
    },
   
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;