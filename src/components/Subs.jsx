export default function NewsletterSubscription() {
    return (
      <div className="bg-orange-400 p-6 md:p-10 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <form className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-0 md:w-1/3">
              Subscribe to Our Newsletter
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-2/3">
              <input
                type="text"
                placeholder="Name"
                className="bg-white text-black placeholder-gray-500 w-full sm:w-1/3 px-4 py-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-white text-black placeholder-gray-500 w-full sm:w-1/3 px-4 py-2 rounded-md"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }