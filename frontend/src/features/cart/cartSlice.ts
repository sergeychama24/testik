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
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInCart>) => {
      state.items.push({ ...action.payload, qty: 1 });
      state.totalPrice += action.payload.price;
      state.totalItems += 1;

      if (action.payload.sale) {
        state.discount += action.payload.price - action.payload.sale;
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<Pick<ProductInCart, "id" | "price" | "sale">>,
    ) => {
      const removedItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (removedItem) {
        state.totalPrice -= removedItem.price * removedItem.qty;
        state.totalItems -= removedItem.qty;
        if (action.payload.sale) {
          state.discount -= action.payload.price - action.payload.sale;
        }
      }
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    increment: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.qty += 1;
        state.totalPrice += item.price;
        state.totalItems += 1;
        if (item.sale) {
          state.discount += item.price - item.sale;
        }
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
        state.totalPrice -= item.price;
        state.totalItems -= 1;
        if (item.sale) {
          state.discount -= item.price - item.sale;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
export default cartSlice.reducer;
