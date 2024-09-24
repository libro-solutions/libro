import React from 'react';
import statistics from '@/data/whyInvest.json';

export default function WhyInvestInSTEM() {
  return (
    <div className="bg-blue-600 text-white p-8 md:p-12 lg:p-16 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">Why Invest In STEM?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-12">
        {statistics.map((stat, index) => (
          <StatisticItem
            key={index}
            percentage={stat.percentage}
            description={stat.description}
          />
        ))}
      </div>
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
        aria-label="Read more about STEM investment"
      >
        READ MORE
      </button>
    </div>
  );
}

function StatisticItem({ percentage, description }) {
  return (
    <div className="space-y-2">
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold">{percentage}</p>
      <p className="text-sm md:text-base lg:text-lg">{description}</p>
    </div>
  );
}