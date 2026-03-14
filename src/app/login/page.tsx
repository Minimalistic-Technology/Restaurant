"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const { loggedIn, setLoggedIn } = useLocalStorage();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin@123") {
      localStorage.setItem("email", email);
      router.replace("/");
      setLoggedIn(true);
      window.location.reload();
    } else {
      alert("Invalid credentials. Please use admin@gmail.com / admin@123");
    }
  };

  useEffect(() => {
    if (loggedIn) {
      router.replace("/");
      setLoading(true);
    } else {
      setEmail("admin@gmail.com");
      setPassword("admin@123");
      setLoading(false);
    }
  }, [router,loggedIn]);

  return (
    <>
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center">
          Loading...
        </div>
      ) : (
        <main className="min-h-screen flex items-center text-black justify-center bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
          <div className="bg-white/90 p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="w-full bg-[var(--color-red-shade)] text-white py-2 rounded-lg hover:bg-amber-700 transition cursor-pointer"
              >
                Login
              </button>
            </form>
            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <Link href="/signup" className="text-amber-600 font-medium ">
                Sign Up
              </Link>
            </p>
          </div>
        </main>
      )}
    </>
  );
}
