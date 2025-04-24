import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { ProductInCart } from "../../types";

interface CartState {
  items: ProductInCart[];
  totalItems: number;
  discount: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  discount: 0,
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInCart>) => {
      state.items = [...state.items, {
        ...action.payload,
        qty: 1
      }];
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.qty, 0);
      state.totalItems = state.items.reduce((total, item) => total + item.qty, 0);
    }
  }
})

export const { addToCart } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
export default cartSlice.reducer;