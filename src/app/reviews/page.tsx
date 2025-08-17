import Image from "next/image";

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: "Aarav Mehta",
      text: "The food was absolutely delicious, and the ambience made it even better. Highly recommend the paneer tikka!",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Ishita Sharma",
      text: "A perfect place for family dinners. The service is quick, and everything feels premium.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=90",
    },
    {
      id: 3,
      name: "Ishita Sharma",
      text: "A perfect place for family dinners. The service is quick, and everything feels premium.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=90",
    },
    {
      id: 4,
      name: "Ishita Sharma",
      text: "A perfect place for family dinners. The service is quick, and everything feels premium.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=90",
    },
    {
      id: 5,
      name: "Ishita Sharma",
      text: "A perfect place for family dinners. The service is quick, and everything feels premium.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=90",
    },
    {
      id: 6,
      name: "Ishita Sharma",
      text: "A perfect place for family dinners. The service is quick, and everything feels premium.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=90",
    },
    {
      id: 7,
      name: "Ishita Sharma",
      text: "A perfect place for family dinners. The service is quick, and everything feels premium.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=90",
    },

  ];

  return (
    <main className="bg-[#FAF9F6] min-h-screen pt-22 px-6 text-black">
      <h1 className="text-3xl font-bold text-center mb-10">Customer Reviews</h1>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={review.image}
                alt={review.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <h2 className="text-lg font-semibold">{review.name}</h2>
            </div>
            <p className="text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
