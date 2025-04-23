type ProductType = "food" | "tech" | "clothes";

export type Product = {
  id: number;
  sale?: number;
  name: string;
  qty: number;
  price: number;
  type: ProductType;
  image: string;
};
