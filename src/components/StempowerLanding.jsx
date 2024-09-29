"use client";

import { useState, useEffect, useRef } from "react";

const CountUp = ({ end, duration = 2000, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startAnimation]);

  return <span>{count}</span>;
};

export default function Component({ data }) {
  const [startAnimation, setStartAnimation] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="max-h-screen bg-white text-black flex flex-col justify-between">
        <div className="container mx-auto px-4 py-8 flex-grow">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 md:mb-0 max-w-2xl">
              {data.headerTitle}
            </h1>
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 text-lg font-semibold rounded transition duration-300 ease-in-out">
              {data.buttonText}
            </button>
          </div>
        </div>
      </div>
      <div ref={statsRef} className="bg-orange-400 p-8 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.stats.map((item, index) => (
            <div key={index} className="text-center">
              <h2 className="text-white text-6xl font-bold mb-2">
                <CountUp end={item.number} startAnimation={startAnimation} />
                {item.number >= 1000 && item.number < 1000000 && "K"}
                {item.number >= 1000000 && "M"}
              </h2>
              <p className="text-white text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
