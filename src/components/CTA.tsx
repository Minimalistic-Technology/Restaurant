
import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 py-16 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Delicious food is just one click away 🍽️
      </h2>
      <p className="text-lg text-gray-300 mb-6">
        Order now and enjoy fresh meals delivered to your doorstep.
      </p>
      <Link href={"/menu"} className="px-8 py-3 inline-block rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
        Order Now
      </Link>
    </section>
  );
};

export default CallToAction;
