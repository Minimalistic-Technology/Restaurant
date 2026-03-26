import { Star } from "lucide-react"

export default function
StarRating({ rating }: {rating: number}){
    return(
        <div className="flex items-center mb-3">
            {Array.from({ length:5 }).map((_, i) => {
                const fillValue = Math.min(Math.max(rating - i, 0),1);
    return(
        <div key={i} className="relative"> <Star className="h-5 w-5 text-gray-300" />
        <div className="absolute top-0 left-0 overflow-hidden" style={{width: '${fillValue*100}%'}} > <Star className="size-5 fill-yellow-400 text-yellow-400" /></div>
        </div>
    );
            })}
        </div>
    );
}