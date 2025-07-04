import type { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../types/types';
import { ProductRepository } from '../../repositories/ProductRepository';
import { ApiResponse } from '../../types/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<any>>
) {
  if (req.method === 'GET') {
    // 商品一覧取得
    try {
      const products = await ProductRepository.getAll();
      res.status(200).json({ success: true, data: products });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: { code: 'DB_ERROR', message: error.message || 'DBエラー' },
      });
    }
  } else if (req.method === 'POST') {
    // 商品新規登録
    const { name, description, price, imageUrl, ingredients, isAvailable } = req.body;
    if (!name || typeof price !== 'number' || !Array.isArray(ingredients)) {
      res.status(400).json({
        success: false,
        error: { code: 'VALIDATION_ERROR', message: '必須項目が不足しています' },
      });
      return;
    }
    const newProduct: Product = {
      id: crypto.randomUUID(),
      name,
      description: description || '',
      price,
      imageUrl: imageUrl || '',
      ingredients,
      isAvailable: isAvailable ?? true,
    };
    try {
      await ProductRepository.add(newProduct);
      res.status(201).json({ success: true, data: newProduct });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: { code: 'DB_ERROR', message: error.message || 'DBエラー' },
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({
      success: false,
      error: { code: 'METHOD_NOT_ALLOWED', message: '許可されていないメソッドです' },
    });
  }
}