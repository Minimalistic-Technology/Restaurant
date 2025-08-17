"use client";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-gray-300 py-12 bg-[#ad0a0a] w-full">
      <div className="max-w-7xl mx-auto pl-10 grid md:grid-cols-3 gap-8 ">
        {/* Brand Info */}
        <div className="pl-10">
          <h3 className="text-xl font-bold text-white mb-3">Edibles</h3>
          <p className="text-sm w-80">
            Discover destinations, book hassle-free, and enjoy unforgettable journeys with us.
          </p>
        </div>

        {/* Quick Links */}
        <div className="pl-20">
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm ">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/menu" className="hover:text-white">Menu</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-white"><Twitter size={20} /></Link>
            <Link href="#" className="hover:text-white"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-white"><Mail size={20} /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-300/50">
        © {new Date().getFullYear()} Edibles. All rights reserved.
      </div>
    </footer>
  );
}
