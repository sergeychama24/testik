export type ProductType = "food" | "tech" | "clothes";

export type Product = {
  id: string;
  sale?: number;
  name: string;
  qty: number;
  price: number;
  type: ProductType;
  image: string;
};

export type ProductInCart = Omit<Product, 'image' | 'type'>

export type ProductResponse = {
  data: Product[],
  first: number,
  items: number;
  last: number;
  next: number;
  pages: 10;
}