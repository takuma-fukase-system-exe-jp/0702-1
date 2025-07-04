"use client";
import Link from "next/link";

import { useCart } from "../cart/CartContext";


import { useRouter } from "next/navigation";

export default function OrderPage() {
  const { cart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">注文内容確認</h1>
      {cart.length === 0 ? (
        <div>注文内容がありません。</div>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="border p-4 rounded flex justify-between items-center">
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-gray-500">¥{item.price.toLocaleString()} × {item.quantity}</div>
              </div>
              <div>小計: ¥{(item.price * item.quantity).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 font-bold">合計: ¥{total.toLocaleString()}</div>
      <div className="mt-8">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          onClick={() => router.push("/order/complete")}
        >
          注文を確定する
        </button>
      </div>
      <div className="mt-4">
        <Link href="/products" className="underline text-blue-600">商品一覧に戻る</Link>
      </div>
    </main>
  );
}