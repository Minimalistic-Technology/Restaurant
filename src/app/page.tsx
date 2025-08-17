"use client"
import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import Reviews from "@/components/Reviews";
import CallToAction from "@/components/CTA";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("email")) setLoading(false);
    else {
      router.replace("/login");
      setLoading(false);
    }
  }, [router]);

  return (
    <>
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center">
          Loading...
        </div>
      ) : (
        <main className="bg-[#FAF9F6] min-h-screen font-poppins">
          <Hero />
          <FeaturedDishes />
          <Reviews />
          <CallToAction />
        </main>
      )}
    </>
  );
}
