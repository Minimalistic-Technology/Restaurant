"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 border-b pb-4"
            >
              <Image
                src={item.img}
                width={80}
                height={80}
                alt={item.title}
                className="rounded-md"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">₹{item.price} × {item.qty}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.title)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 text-lg font-bold">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={() => {
              alert("Order Placed Successfully! 🎉");
              clearCart();
            }}
            className="mt-6 w-full bg-[var(--color-red-shade)] text-white py-3 rounded-lg hover:bg-red-700"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}
