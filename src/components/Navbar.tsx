"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50  text-white shadow-md bg-[var(--color-red-shade)]">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold ">
          Edibles
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/" className="hover:text-[#D4AF37]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:text-[#D4AF37]">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#D4AF37]">
              About
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-[#D4AF37]">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#D4AF37]">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/reviews" className="hover:text-[#D4AF37]">
              Reviews
            </Link>
          </li>
          {loggedIn ? (
            <>
              <li>
                <Link href={"/profile"} className="hover:text-[#D4AF37]">
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={() => localStorage.removeItem("email")}
                  className="hover:text-[#D4AF37]"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login" className="hover:text-[#D4AF37]">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#6B2737] px-4 pb-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" onClick={toggleMenu}>
                Menu
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={toggleMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
