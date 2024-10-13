// main.jsx
import { futurePlans } from '@/data/services/futurePlans';
import React from 'react';

export default function FuturePlans( data) {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        
        <h1 className="text-4xl font-bold mb-2">{futurePlans.title}</h1>
        <p className="text-gray-600 text-lg">{futurePlans.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {futurePlans.main.map((plan, index) => (
          <FuturePlanCard
            key={index}
            title={plan.title}
            description={plan.description}
            futurePlan={plan.futurePlan}
            bgColor={plan.bgColor}
            textColor={plan.textColor}
          />
        ))}
      </div>
    </div>
  );
}

function FuturePlanCard({ title, description, futurePlan, bgColor, textColor }) {
  return (
    <div className={`${bgColor} ${textColor} p-6 rounded-lg flex flex-col justify-between h-full`}>
      <div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="mb-4">{description}</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Future Plan:</h4>
        <p>{futurePlan}</p>
      </div>
    </div>
  );
}
