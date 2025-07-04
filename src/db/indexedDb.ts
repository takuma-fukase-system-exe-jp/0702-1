import { Product, Ingredient, CartItem, Order } from '../types/types';

const DB_NAME = 'MalatangShopDB';
const DB_VERSION = 1;

const STORE_NAMES = {
  products: 'products',
  ingredients: 'ingredients',
  cart: 'cart',
  orders: 'orders',
};

export function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAMES.products)) {
        db.createObjectStore(STORE_NAMES.products, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(STORE_NAMES.ingredients)) {
        db.createObjectStore(STORE_NAMES.ingredients, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(STORE_NAMES.cart)) {
        db.createObjectStore(STORE_NAMES.cart, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(STORE_NAMES.orders)) {
        db.createObjectStore(STORE_NAMES.orders, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = () => {
      reject(request.error);
    };
  });
}

// 汎用CRUD関数
export async function getAll<T>(storeName: string): Promise<T[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result as T[]);
    request.onerror = () => reject(request.error);
  });
}

export async function getById<T>(storeName: string, id: string): Promise<T | undefined> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result as T);
    request.onerror = () => reject(request.error);
  });
}

export async function add<T>(storeName: string, data: T): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    const request = store.add(data);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export async function update<T>(storeName: string, data: T): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    const request = store.put(data);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export async function remove(storeName: string, id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    const request = store.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export { STORE_NAMES };