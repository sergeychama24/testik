import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productsApi.ts";
import { ProductResponse, ProductType } from "../../types";

export function useGetAllProducts(
  type: ProductType,
  page: number,
  sort: "name" | "price" | "qty",
) {
  const [data, setData] = useState<ProductResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const res = getAllProducts(type, page, sort);
    res.then((products) => setData(products));
    res.catch((error) => setError(error.message));
    res.finally(() => setIsLoading(false));
  }, [page, sort, type]);

  return { result: data, isLoading, error };
}
