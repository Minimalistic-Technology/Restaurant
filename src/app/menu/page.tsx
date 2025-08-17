
"use client";
import React from "react";
import { Coffee, Pizza, Utensils } from "lucide-react";
import Image from "next/image";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556742205-e10c9486e506?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-5xl md:text-7xl font-bold text-white text-center">
          Our Delicious Menu
        </h1>
      </section>

      {/* Menu Sections */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Starters */}
        <h2 className="text-3xl font-semibold flex items-center gap-2 mb-8">
          <Utensils className="text-red-600" /> Starters
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <MenuCard
            title="Garlic Bread"
            desc="Crispy golden bread topped with buttery garlic."
            price="₹120"
            img="https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FybGljJTIwYnJlYWR8ZW58MHwwfDB8fHwy"
          />
          <MenuCard
            title="Bruschetta"
            desc="Toasted bread topped with tomato, olive oil."
            price="₹150"
            img="https://images.unsplash.com/photo-1720636615079-1841bcaaec84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJ1c2NoZXR0YXxlbnwwfDB8MHx8fDI%3D"
          />
          <MenuCard
            title="Stuffed Mushrooms"
            desc="Juicy mushrooms filled with cheese & herbs."
            price="₹180"
            img="https://images.unsplash.com/photo-1622268805718-ca073548d4ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZmZlZCUyMG11c2hyb29tc3xlbnwwfDB8MHx8fDI%3D"
          />
        </div>

        {/* Pizza */}
        <h2 className="text-3xl font-semibold flex items-center gap-2 mb-8">
          <Pizza className="text-red-600" /> Pizzas
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <MenuCard
            title="Margherita"
            desc="Classic pizza with mozzarella, tomato & basil."
            price="₹350"
            img="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyZ2hlcml0YXxlbnwwfDB8MHx8fDI%3D"
          />
          <MenuCard
            title="Pepperoni"
            desc="Loaded with pepperoni & mozzarella cheese."
            price="₹420"
            img="https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVwcGVyb25pfGVufDB8MHwwfHx8Mg%3D%3D"
          />
          <MenuCard
            title="Veggie Supreme"
            desc="Onions, peppers, olives & extra cheese."
            price="₹400"
            img="https://images.unsplash.com/photo-1617470703128-26a0fc9af10f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZ2llJTIwcGl6emF8ZW58MHwwfDB8fHwy"
          />
        </div>

        {/* Beverages */}
        <h2 className="text-3xl font-semibold flex items-center gap-2 mb-8">
          <Coffee className="text-red-600" /> Beverages
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <MenuCard
            title="Cold Coffee"
            desc="Iced coffee served with cream & sugar."
            price="₹120"
            img="https://images.unsplash.com/photo-1625242662341-5e92c5101338?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGNvZmZlZXxlbnwwfDB8MHx8fDI%3D"
          />
          <MenuCard
            title="Fresh Lime Soda"
            desc="Refreshing soda with a tangy lime twist."
            price="₹90"
            img="https://images.unsplash.com/photo-1617984312743-d81d2c151041?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGltZSUyMHNvZGF8ZW58MHwwfDB8fHwy"
          />
          <MenuCard
            title="Mango Smoothie"
            desc="Chilled mango smoothie with creamy yogurt."
            price="₹150"
            img="https://images.unsplash.com/photo-1619898804188-e7bad4bd2127?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuZ28lMjBzbW9vdGhpZXxlbnwwfDB8MHx8fDI%3D"
          />
        </div>
      </section>
    </div>
  );
}

function MenuCard({
  title,
  desc,
  price,
  img,
}: {
  title: string;
  desc: string;
  price: string;
  img: string;
}) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden  transform transition duration-300 group hover:scale-105 ">
      <Image width={800} height={600} src={img} alt={title} className=" w-full aspect-4/3 scale-110 group-hover:scale-100 transform transition duration-300" />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 min-h-10">{desc}</p>
        <div className="flex justify-between items-center">
          <span className="text-red-600 font-bold">{price}</span>
          <button className="px-4 py-1 bg-[var(--color-red-shade)] text-white rounded-lg text-sm hover:bg-red-700">

            Order
          </button>
        </div>
      </div>
    </div>
  );
}
