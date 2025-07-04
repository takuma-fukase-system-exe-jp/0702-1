"use client";
import Link from "next/link";

import React from "react";
import { useCart } from "./CartContext";

export default function CartPage() {
  const { cart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">カート</h1>
      {cart.length === 0 ? (
        <div>カートは空です。</div>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="border p-4 rounded flex justify-between items-center">
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-gray-500">
                  ¥{item.price.toLocaleString()} ×{" "}
                  <select
                    value={item.quantity}
                    onChange={e => updateQuantity(item.id, Number(e.target.value))}
                    className="border rounded px-2 py-1"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>小計: ¥{(item.price * item.quantity).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 font-bold">合計: ¥{total.toLocaleString()}</div>
      <div className="mt-8">
        <Link
          href={cart.length > 0 ? `/order?item=${cart[0].id}&qty=${cart[0].quantity}` : "/order"}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          注文へ進む
        </Link>
      </div>
      <div className="mt-4">
        <Link href="/products" className="underline text-blue-600">商品一覧に戻る</Link>
      </div>
    </main>
  );
}