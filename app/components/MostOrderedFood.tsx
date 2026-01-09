"use client";

const foods = [
  { name: "Fresh Salad Bowl", price: 45000, image: "🥗" },
  { name: "Chicken Noodles", price: 75000, image: "🍜" },
  { name: "Smoothie Fruits", price: 45000, image: "🥤" },
  { name: "Hot Chicken Wings", price: 45000, image: "🍗" },
];

export default function MostOrderedFood() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-gray-800 font-semibold text-lg mb-2">
        Most Ordered Food
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Adipiscing elit, sed do eiusmod tempor
      </p>

      <div className="space-y-1">
        {foods.map((food, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-3 py-4 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-3xl shadow-sm">
                {food.image}
              </div>
              <span className="text-gray-800 font-medium text-base group-hover:text-[#6C5DD3] transition-colors">
                {food.name}
              </span>
            </div>
            <span className="text-gray-600 font-semibold">
              IDR {food.price.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
