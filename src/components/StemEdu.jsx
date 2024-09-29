import Link from "next/link";

export default function StemEdu({ data }) {
  return (
    <div className="w-full min-h-[50vh] bg-white flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-16 sm:w-24 h-1 bg-yellow-400 mb-4 mx-auto"></div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {data.title}
            </h1>
          </div>

          <div className="space-y-3 mb-6 text-sm sm:text-base">
            <p className="text-gray-700">{data.paragraph1}</p>

            <p className="text-gray-700">{data.paragraph2}</p>

            <p className="text-gray-700">{data.paragraph3}</p>
          </div>
          <Link
            href="#"
            className="inline-block bg-yellow-400 text-white font-semibold py-2 px-4 sm:px-6 rounded hover:bg-yellow-500 transition duration-300 text-sm sm:text-base"
          >
            {data.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
