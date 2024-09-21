import Image from "next/image";
import heroData from "@/data/heroData.json";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen">
      <Image
        src="/images/hero.jpeg"
        alt="Students using technology"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="w-full h-full"
      />

      <div className="absolute inset-0 flex flex-col justify-between mt-16 sm:mt-0">
        <div className="h-auto sm:h-1/2 flex items-center justify-center sm:justify-start sm:items-center pt-4 sm:pt-0">
          <div className="mx-4 sm:mx-0 sm:ml-8 md:ml-16 bg-[#FFA500] text-black p-4 text-center sm:text-left inline-block max-w-xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              MAKING STEM EDUCATION ACCESSIBLE TO ALL
            </h1>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-16 sm:mt-0">
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
                <p className="text-xs sm:text-sm text-gray-700 mb-4">{item.description}</p>
                <button className="bg-[#FFA500] text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded text-sm">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}