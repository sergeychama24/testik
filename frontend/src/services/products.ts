import { ProductResponse, ProductType } from "../types";

const BASE_URL = "http://localhost:3000";

export async function getAllProducts(productType: ProductType, page: number): Promise<ProductResponse> {
  const res = await fetch(`${BASE_URL}/products?type=${productType}&_page=${page.toString()}&_per_page=10`);

  if (!res.ok) {
    throw new Error(`${productType} not found`);
  }

  return res.json();
}