import Image from "next/image";
import heroData from "@/data/heroData.json";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <div className="relative w-full h-[40vh] sm:h-[60vh]">
        <Image
          src="/images/hero.jpeg"
          alt="Students using technology"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center sm:justify-start">
          <div className="mx-4 sm:mx-0 sm:ml-8 md:ml-16 bg-[#FFA500] text-black p-4 text-center sm:text-left inline-block max-w-xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {heroData.heroTitle}
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full flex-grow bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {heroData.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-2 bg-[#FFA500]"></div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 mb-4">
                    {item.description}
                  </p>
                  <button className="bg-[#FFA500] text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded text-sm">
                    {item.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
