"use client";
import { CartProvider } from "./cart/CartContext";
import Link from "next/link";

export default function Home() {
  return (
    <CartProvider>
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">麻辣湯通販サイト</h1>
        <div className="space-y-2">
          <div>
            <Link href="/products" className="text-blue-600 underline">
              商品一覧
            </Link>
          </div>
          <div>
            <Link href="/cart" className="text-blue-600 underline">
              カート
            </Link>
          </div>
        </div>
      </main>
    </CartProvider>
  );
}
