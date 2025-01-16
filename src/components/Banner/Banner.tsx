'use client'


export default function Banner() {
  return (
    <section 
      className="relative h-[400px] md:h-[500px] lg:h-[60vh] mt-16 bg-fixed bg-center bg-cover flex items-center container-width"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=2000")'
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative   px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Spring Collection 2024
          </h1>
          <p className="text-lg text-white mb-8">
            Explore our fresh new arrivals with exclusive deals
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}