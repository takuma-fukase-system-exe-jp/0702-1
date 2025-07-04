import { Ingredient } from '../types/types';
import { getAll, getById, add, update, remove, STORE_NAMES } from '../db/indexedDb';

export const IngredientRepository = {
  async getAll(): Promise<Ingredient[]> {
    return await getAll<Ingredient>(STORE_NAMES.ingredients);
  },
  async getById(id: string): Promise<Ingredient | undefined> {
    return await getById<Ingredient>(STORE_NAMES.ingredients, id);
  },
  async add(ingredient: Ingredient): Promise<void> {
    return await add<Ingredient>(STORE_NAMES.ingredients, ingredient);
  },
  async update(ingredient: Ingredient): Promise<void> {
    return await update<Ingredient>(STORE_NAMES.ingredients, ingredient);
  },
  async remove(id: string): Promise<void> {
    return await remove(STORE_NAMES.ingredients, id);
  },
};