import { CartItem } from '../types/types';
import { getAll, getById, add, update, remove, STORE_NAMES } from '../db/indexedDb';

export const CartRepository = {
  async getAll(): Promise<CartItem[]> {
    return await getAll<CartItem>(STORE_NAMES.cart);
  },
  async getById(id: string): Promise<CartItem | undefined> {
    return await getById<CartItem>(STORE_NAMES.cart, id);
  },
  async add(item: CartItem): Promise<void> {
    return await add<CartItem>(STORE_NAMES.cart, item);
  },
  async update(item: CartItem): Promise<void> {
    return await update<CartItem>(STORE_NAMES.cart, item);
  },
  async remove(id: string): Promise<void> {
    return await remove(STORE_NAMES.cart, id);
  },
};