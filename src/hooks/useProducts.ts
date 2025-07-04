import { useState } from 'react';
import { Product, ApiError } from '../types/types';
import { ProductRepository } from '../repositories/ProductRepository';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await ProductRepository.getAll();
      setProducts(res);
    } catch (e: any) {
      setError({ code: 'DB_ERROR', message: e.message || 'DBエラー' });
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product: Omit<Product, 'id'>) => {
    setLoading(true);
    setError(null);
    try {
      const newProduct: Product = { ...product, id: crypto.randomUUID() };
      await ProductRepository.add(newProduct);
      setProducts((prev) => [...prev, newProduct]);
    } catch (e: any) {
      setError({ code: 'DB_ERROR', message: e.message || 'DBエラー' });
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, fetchProducts, addProduct };
}