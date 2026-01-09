"use client";

import Image from "next/image";

export default function RatingBubbles() {
  return (
    <div className="bg-white p-6">
      <h3 className="text-black mb-3">Your Rating</h3>
      <p className="text-xs text-gray-500 mb-4">
        Lorem ipsum dolor sit amet, consectetur
      </p>

      <div className="relative flex items-center justify-center">
        <Image
          src="/charts/ratings-combined.png"
          alt="Rating Bubbles - Food Taste 85%, Hygiene 85%, Packaging 92%"
          width={500}
          height={400}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
