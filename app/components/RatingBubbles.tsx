"use client";

export default function RatingBubbles() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-gray-800 font-semibold text-lg mb-2">Your Rating</h3>
      <p className="text-sm text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur
      </p>

      <div className="relative h-80 sm:h-96 flex items-center justify-center overflow-hidden">
        {/* Food Taste - Large Orange Circle */}
        <div className="absolute right-0 sm:right-0 top-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#FFA726] flex items-center justify-center z-10 border-4 border-white shadow-lg">
          <div className="text-center text-white">
            <p className="text-3xl sm:text-5xl font-bold mb-1">85%</p>
            <p className="text-sm sm:text-lg font-medium">Food Taste</p>
          </div>
        </div>

        {/* Hygiene - Medium Purple Circle */}
        <div className="absolute left-4 sm:left-8 top-4 w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-[#8B7FDB] flex items-center justify-center z-20 border-4 border-white shadow-lg">
          <div className="text-center text-white">
            <p className="text-2xl sm:text-4xl font-bold mb-1">85%</p>
            <p className="text-xs sm:text-base font-medium">Hygiene</p>
          </div>
        </div>

        {/* Packaging - Medium Cyan Circle */}
        <div className="absolute left-0 sm:left-0 bottom-4 w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-[#4FC3F7] flex items-center justify-center z-20 border-4 border-white shadow-lg">
          <div className="text-center text-white">
            <p className="text-2xl sm:text-4xl font-bold mb-1">92%</p>
            <p className="text-xs sm:text-base font-medium">Packaging</p>
          </div>
        </div>
      </div>
    </div>
  );
}
