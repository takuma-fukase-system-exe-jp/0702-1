"use client";
import { CartProvider } from "./cart/CartContext";
import Link from "next/link";

export default function Home() {
  return (
    <CartProvider>
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">麻辣湯通販サイト サンプル</h1>
        <ul className="space-y-4">
          <li>
            <Link href="/products" className="underline text-blue-600 text-lg">
              商品一覧ページへ
            </Link>
          </li>
          <li>
            <Link href="/cart" className="underline text-blue-600 text-lg">
              カートを見る
            </Link>
          </li>
          <li>
            <Link href="/order" className="underline text-blue-600 text-lg">
              注文内容確認
            </Link>
          </li>
        </ul>
      </main>
    </CartProvider>
  );
}
