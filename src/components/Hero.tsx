import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white "
    >
      {/* Background Image */}
      <Image
        // src="/images/pizza-bg.jpg"
        src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Restaurant Ambience"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute w-[50%] rounded-full m-auto h-[50%] inset-0 bg-gradient-to-b from-black/50 via-black/60 to-transparent" />

      {/* Overlay Text */}
      <div className="relative z-10 max-w-xl px-4  h-120 flex flex-col justify-center items-center  rounded-[100%]">
        <h1 className=" text-6xl mb-4 md:text-9xl  font-extralight tracking-wider ">
          EDIBLES
        </h1>

        <p className="text-lg md:text-xl mb-6 tracking-wider word-spacing-widest">
          Experience the finest dining with flavors that tell a story.
        </p>
        <Link
          href="/menu"
          className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-[#51cfcf]  hover:to-[#c55454] transition duration-500"
        >
          View Menu
        </Link>
      </div>
    </section>
  );
};

export default Hero;
