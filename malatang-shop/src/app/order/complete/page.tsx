"use client";
import Link from "next/link";

export default function OrderCompletePage() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-6">ご注文ありがとうございました！</h1>
      <p className="mb-8">ご注文内容を受け付けました。</p>
      <Link href="/products" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
        商品一覧に戻る
      </Link>
    </main>
  );
}