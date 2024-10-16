'use client';

import { School, Search, Bot, Users } from 'lucide-react';

const data = [
  {
    title: "Fully Equipped STEAM Labs",
    icon: School,
    description:
      "Encourages creativity and interdisciplinary learning through hands-on projects, fostering student engagement.",
  },
  {
    title: "Advanced AI/ML Labs",
    icon: Search,
    description:
      "Provides tools for practical experimentation, allowing students to learn and apply AI concepts in real-world scenarios.",
  },
  {
    title: "Hands-On Robotics Labs",
    icon: Bot,
    description:
      "Utilizes cutting-edge technology for building and programming robots, enhancing skills in engineering and technology.",
  },
  {
    title: "Expert Trainers",
    icon: Users,
    description:
      "Ensures effective mentorship and knowledge transfer, equipping educators with the skills needed to guide students.",
  },
];

export default function Comprehensive() {
  return (
    <div className="min-h-screen bg-yellow-200 p-4 md:p-8">
      <div className="max-w-4xl mx-auto pt-16">
        <header className="text-center mb-12">
          <h2 className="text-gray-600 text-lg mb-2">Comprehensive Education</h2>
          <h1 className="text-4xl font-bold mb-4">Libro&apos;s Comprehensive Solution</h1>
          <p className="text-gray-600">
            Integrating STEAM, AI/ML, and Robotics in Education for Tomorrow&apos;s Innovators
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <IconComponent className="w-12 h-12 mb-4 text-gray-800" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}