import { Order } from '../types/types';
import { getAll, getById, add, update, remove, STORE_NAMES } from '../db/indexedDb';

export const OrderRepository = {
  async getAll(): Promise<Order[]> {
    return await getAll<Order>(STORE_NAMES.orders);
  },
  async getById(id: string): Promise<Order | undefined> {
    return await getById<Order>(STORE_NAMES.orders, id);
  },
  async add(order: Order): Promise<void> {
    return await add<Order>(STORE_NAMES.orders, order);
  },
  async update(order: Order): Promise<void> {
    return await update<Order>(STORE_NAMES.orders, order);
  },
  async remove(id: string): Promise<void> {
    return await remove(STORE_NAMES.orders, id);
  },
};