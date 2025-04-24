import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice.ts";

export const store = configureStore({
  reducer: {
    // TODO: Replace on real reducers
    cart: cartReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;