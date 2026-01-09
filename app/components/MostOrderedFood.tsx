"use client";

import Image from "next/image";

const foods = [
  { name: "Fresh Salad Bowl", price: 45000, image: "/imgs/salad.png" },
  { name: "Chicken Noodles", price: 75000, image: "/imgs/chickennoodles.png" },
  { name: "Smoothie Fruits", price: 45000, image: "/imgs/smoothies.png" },
  { name: "Hot Chicken Wings", price: 45000, image: "/imgs/chickenwings.png" },
];

export default function MostOrderedFood() {
  return (
    <div className="bg-white p-6">
      <h3 className="text-black font-normal text-sm leading-5.5 tracking-[0.5px] mb-2">
        Most Ordered Food
      </h3>
      <p className="text-gray-500 font-normal text-xs leading-5.5 tracking-[0.5px] mb-6">
        Adipiscing elit, sed do eiusmod tempor
      </p>

      <div className="space-y-1">
        {foods.map((food, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-3 py-4"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  boxShadow: "0px 10px 20px 0px rgba(64, 72, 82, 0.35)",
                }}
              >
                <Image
                  src={food.image}
                  alt={food.name}
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <span className="text-[#273240] font-normal text-xs leading-5 tracking-[0.5px]">
                {food.name}
              </span>
            </div>
            <span className="text-[#273240] font-normal text-xs leading-5 tracking-[0.5px]">
              IDR {food.price.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
