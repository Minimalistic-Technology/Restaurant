import MenuCard from "@/components/MenuCard";
import dishes from "@/data/menuData.json";
import React from "react";
import Image from "next/image";
import { Coffee, Pizza, Utensils } from "lucide-react";

import FeaturedDishes from "@/components/FeaturedDishes";

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
          Our Delicious <br />
          <span className="text-[var(--color-red-shade)] font-bold md:text-9xl font-dancing-script">
            Menu
          </span>
        </h1>
      </section>

      {/* Menu Sections */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Starters */}
        <h2 className="text-3xl font-semibold flex items-center gap-2 mb-8">
          <Utensils className="text-red-600" /> Starters
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
        {dishes
          .filter((dish) => dish.category === "starters")
          .map((dish,index) => (
            <MenuCard
             key={index}
             title={dish.name}
             desc={dish.description}
             price={dish.price}
             img={dish.img}
             rating={4.7}
             />
          ))}
         </div>
      
        <h2 className="text-3xl font-semibold flex items-center gap-2 mb-8">
          <Pizza className="text-red-600" /> Pizzas
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {dishes 
            .filter((dish) => dish.category === "pizza")
            .map((dish, index) => (
             <MenuCard
              key={index}
              title={dish.name}
              desc={dish.description}
              price={dish.price}
              img={dish.img}
              rating={4.8}
            />
           ))}
       </div>
          
        
        <h2 className="text-3xl font-semibold flex items-center gap-2 mb-8">
          <Coffee className="text-red-600" /> Beverages
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {dishes
           .filter((dish) => dish.category === "Beverages")
           .map((dish , index) => (
             <MenuCard
             key={index}
             title={dish.name}
             desc={dish.description}
             price={dish.price}
             img={dish.img}
             rating={4.9}
             />
           ))}

           </div> 
      </section>
    </div>
  );
}


// function MenuCard({
//   title,
//   desc,
//   price,
//   img,
// }: {
//   title: string;
//   desc: string;
//   price: string;
//   img: string;
// }) {
//   return (
//     <div className="bg-white shadow-lg rounded-2xl overflow-hidden  transform transition duration-300 group hover:scale-105 ">
//       <Image
//         width={800}
//         height={600}
//         src={img}
//         alt={title}
//         className=" w-full aspect-4/3 scale-110 group-hover:scale-100 transform transition duration-300"
//       />
//       <div className="p-5">
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-600 text-sm mb-4 min-h-10">{desc}</p>
//         <div className="flex justify-between items-center">
//           <span className="text-red-600 font-bold">{price}</span>
//           <button className="px-4 py-1 bg-[var(--color-red-shade)] text-white rounded-lg text-sm hover:bg-red-700">
//             Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
