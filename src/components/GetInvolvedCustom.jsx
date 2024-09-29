"use client";

import { useState } from "react";

export default function GetInvolved({ data }) {
  const [country, setCountry] = useState("India");

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-lg text-gray-700">{data.subtitle}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <form className="space-y-4">
            <input
              type="text"
              placeholder={data.form.fullNamePlaceholder}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder={data.form.emailPlaceholder}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <div className="grid grid-cols-3 gap-2">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="col-span-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="India">India (भारत)</option>
                {/* Add more countries as needed */}
              </select>
              <input
                type="text"
                placeholder="+91"
                className="col-span-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <textarea
              placeholder="About You*"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none h-24"
            ></textarea>
            <textarea
              placeholder="Specific enquiry, if any."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none h-24"
            ></textarea>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="rounded border-gray-300 text-orange-400 focus:ring-orange-400"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to receive communication from INDIA STEM FOUNDATION*
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
