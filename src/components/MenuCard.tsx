"use client"

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import StarRating from "./StarRating";

interface MenuCardProps {
    title: string;
    desc: string;
    price: string;
    img: string;
    rating: number;
}

const MenuCard = ({ title, desc, price, img, rating }: MenuCardProps) => {
    const { addToCart } = useCart();

    return (
        <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all group">
            <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4">
                <Image 
                    src={img} 
                    alt={title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            
            <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2">{desc}</p>
                
                
                <StarRating rating={rating} />
                
                <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-bold text-orange-600">{price}</span>
                    <button 
                        onClick={() => addToCart({ title, price:String(price), img })}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;