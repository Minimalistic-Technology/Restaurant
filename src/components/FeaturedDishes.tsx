import Image from "next/image";
import dishes from '../data/menuData.json';

// const dishes = [
//   {
//     name: "Margherita Pizza",
//     description: "Classic delight with fresh mozzarella & basil.",
//     price: "₹350",
//     img: "https://images.hattafoodhub.com/insecure/fit/1000/1000/ce/0/plain/https://hatta-foodhub-assests.s3.me-central-1.amazonaws.com/be22d8/prods/JxPiONitcQsuNuhTxUlMVyPRNMrWktYX2fUkwf8O.png@webp"
// },
// {
//     name: "Grilled Salmon",
//     description: "Served with lemon butter sauce & fresh herbs.",
//     price: "₹380",
//     img: "https://www.pccmarkets.com/wp-content/uploads/2017/08/pcc-rosemary-grilled-salmon-flo.jpg"
// },
// {
//     name: "Pasta Alfredo",
//     description: "Creamy Alfredo sauce with parmesan & mushrooms.",
//     price: "₹250",
//     img: "https://www.allrecipes.com/thmb/ziUOvj4f_me5yvZhYCUy0n4IKbQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/276725-creamy-chicken-alfredo-VAT-001-Beauty-4x3-c4b026db5cb349f4b8fd627c56f91a42.jpg"
//   }
// ];

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
