"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import sliderImages from "@/data/aboutSliderImages.json";
import sliderContent from "@/data/aboutSliderContent.json";

export default function Component() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % sliderImages.images.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % sliderImages.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + sliderImages.images.length) %
        sliderImages.images.length
    );
  };

  return (
    <div className="bg-blue-600 text-white p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 relative">
          <Image
            src={sliderImages.images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            width={600}
            height={400}
            className="rounded-lg"
          />
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prevImage}
              className="bg-black bg-opacity-50 text-white p-2 rounded-r-md hover:bg-opacity-75 transition-colors"
            >
              &#10094;
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={nextImage}
              className="bg-black bg-opacity-50 text-white p-2 rounded-l-md hover:bg-opacity-75 transition-colors"
            >
              &#10095;
            </button>
          </div>
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-orange-400 font-semibold">
            {sliderContent.subtitle}
          </h2>
          <h1 className="text-4xl font-bold">{sliderContent.title}</h1>
          <p className="text-lg">{sliderContent.description}</p>
          <button className="bg-orange-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-500 transition-colors">
            {sliderContent.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
