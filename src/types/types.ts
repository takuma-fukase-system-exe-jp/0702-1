/**
 * 麻辣湯通販サイト 共通型定義
 */

// 商品
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  ingredients: string[]; // 具材IDリスト
  isAvailable: boolean;
};

// 具材
export type Ingredient = {
  id: string;
  name: string;
  isAvailable: boolean;
};

// カートアイテム
export type CartItem = {
  id: string;
  productId: string;
  ingredientIds: string[];
  quantity: number;
};

// 注文
export type Order = {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'completed' | 'cancelled';
  createdAt: string;
};

// APIレスポンス共通型
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
};

// エラー型
export type ApiError = {
  code: string;
  message: string;
  details?: any;
};