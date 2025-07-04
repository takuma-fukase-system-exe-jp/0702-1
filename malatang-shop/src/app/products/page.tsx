"use client";
import React from "react";
import Link from "next/link";

import { useCart } from "../cart/CartContext";


import { useRouter } from "next/navigation";

export default function ProductsPage() {
  // 仮の商品データ
  const products = [
    { id: 1, name: "麻辣湯セット", price: 1200 },
    { id: 2, name: "トッピング盛り合わせ", price: 500 },
    { id: 3, name: "追加スープ", price: 300 },
  ];

  const { addToCart } = useCart();
  const router = useRouter();

  // 各商品の数量を管理
  const [quantities, setQuantities] = React.useState<{ [id: number]: number }>({
    1: 1,
    2: 1,
    3: 1,
  });

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">商品一覧</h1>
      <ul className="space-y-4">
        {products.map((p) => (
          <li key={p.id} className="border p-4 rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-gray-500">¥{p.price.toLocaleString()}</div>
              <div className="mt-2">
              </div>
            </div>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              onClick={() => {
                addToCart({ ...p, quantity: 1 });
                router.push("/cart");
              }}
            >
              カートに追加
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link href="/cart" className="underline text-blue-600">カートを見る</Link>
      </div>
    </main>
  );
}