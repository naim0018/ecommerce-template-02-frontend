'use client'
export default function Newsletter() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container-width">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-blue-100 text-lg">
              Get updates about new products and special offers
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white min-w-[300px]"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 