import { Product } from '../types/types';
import { getAll, getById, add, update, remove, STORE_NAMES } from '../db/indexedDb';

export const ProductRepository = {
  async getAll(): Promise<Product[]> {
    return await getAll<Product>(STORE_NAMES.products);
  },
  async getById(id: string): Promise<Product | undefined> {
    return await getById<Product>(STORE_NAMES.products, id);
  },
  async add(product: Product): Promise<void> {
    return await add<Product>(STORE_NAMES.products, product);
  },
  async update(product: Product): Promise<void> {
    return await update<Product>(STORE_NAMES.products, product);
  },
  async remove(id: string): Promise<void> {
    return await remove(STORE_NAMES.products, id);
  },
};