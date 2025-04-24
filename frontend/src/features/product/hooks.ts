import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productsApi.ts";
import { ProductResponse, ProductType } from "../../types";

export function useGetAllProducts(type: ProductType, page: number){
  const [data, setData] = useState<ProductResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const res = getAllProducts(type, page)
    res.then(products => setData(products))
    res.catch(error => setError(error.message))
    res.finally(() => setIsLoading(false));
  }, [page]);

  return { result: data, isLoading, error }
}