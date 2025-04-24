import { ProductInCart } from "../types";

export function formatProductType(type: string) {
  const types = new Map([
    ["tech", "Электроника"],
    ["food", "Еда"],
    ["clothes", "Одежда"],
  ]);

  return types.get(type);
}

export function checkHasInCart(cart: ProductInCart[], productId: string): boolean{
  return cart.some((item) => item.id === productId)
}