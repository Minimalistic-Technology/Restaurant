import Image from "next/image";
import dishes from '../data/menuData.json';

export default function FeaturedDishes() {
  return (
    <section className="py-16 bg-white text-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-medium tracking-wider underline mb-12 text-[var(--color-red-shade)] ">
          BestSeller
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {dishes.slice(0, 3).map((dish, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 group"
            >
              <div className="relative w-full h-56 ">
                <Image
                  src={dish.img}
                  alt={dish.name}
                  fill
                  className="w-full aspect-2/3 scale-110 group-hover:scale-100 transform transition duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
                <span className="text-lg font-bold text-[var(--color-red-shade)]">
                  {dish.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
