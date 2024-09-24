import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    title: "BOSCH Supports STEM Education in India",
    image: "/images/slider.jpeg",
    link: "#",
  },
  {
    title: "Infogain's Employee Volunteering",
    image: "/images/slider.jpeg",
    link: "#",
  },
  {
    title: "Wabtec Supports STEM Education In India",
    image: "/images/slider.jpeg",
    link: "#",
  },
];

export default function RecentNews() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="h-1 w-24 bg-orange-400 mx-auto m-2"></div>
        <h2 className="text-4xl font-bold text-center mb-8">
          Recent News & Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-blue-600 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="h-1 w-full bg-orange-400 mx-auto m-2"></div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <Link
                  href={item.link}
                  className="text-white text-sm  hover:text-gray-200 transition-colors duration-300"
                >
                  READ THE FULL STORY &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
