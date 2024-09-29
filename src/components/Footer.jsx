import React from "react";

export default function Footer({ data }) {
  return (
    <footer>
      <div className="bg-blue-600 text-white p-8">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between">
          {/* Left Column */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <div className="flex items-center mb-4">
              <svg
                className="w-12 h-12 mr-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <div>
                <h2 className="text-2xl font-bold">
                  {data.organization.name.split(" ")[0]}
                </h2>
                <h2 className="text-2xl font-bold">
                  {data.organization.name.split(" ")[1]}
                </h2>
                <p className="text-sm">{data.organization.description}</p>
              </div>
            </div>
            <p className="text-sm mb-4">{data.organization.details}</p>
            <button className="bg-yellow-400 text-blue-600 px-4 py-2 rounded font-bold">
              {data.organization.buttonText}
            </button>
          </div>

          {/* Middle Column */}
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {data.quickLinks.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3">
            <h3 className="text-xl font-bold mb-4">KEEP IN TOUCH</h3>
            <div className="space-y-2 mb-4">
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {data.contact.email}
              </p>
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {data.contact.phone}
              </p>
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {data.contact.address}
              </p>
            </div>
            <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              {data.socialMedia.map((social, index) => (
                <a key={index} href="#" className="hover:text-gray-300">
                  <span className="sr-only">{social}</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-400 text-center py-2 text-white">
        {data.footerText}
      </div>
    </footer>
  );
}
