'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import imagesData from '@/data/trustedPartnerships.json'

export default function CombinedSliders() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = imagesData.images

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => {
      clearInterval(imageTimer)
    }
  }, [images.length])

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Legacy of Trusted Partnerships</h2>
        <p className="text-center text-gray-600 mb-8">
          We appreciate our partners&rsquo; trust, support, and encouragement in propelling us towards
          our mission of making STEM education accessible to all.
        </p>
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentImageIndex * 25}%)` }}
          >
            {images.concat(images.slice(0, 4)).map((src, index) => (
              <div key={index} className="w-1/4 flex-shrink-0 px-2">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={300}
                  height={50}
                  className="rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}