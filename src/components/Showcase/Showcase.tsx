'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function Showcase() {
  return (
    <>
      {/* First Showcase - Parallax Section */}
      <section className="relative h-[500px] bg-fixed bg-center bg-cover flex items-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container-width text-white">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold mb-4">New Collection 2024</h2>
            <p className="text-lg mb-8">Discover our latest arrivals with premium quality and exclusive designs.</p>
            <Link 
              href="/collection/new"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Second Showcase - Three Column Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
                alt="Women's Fashion"
                width={600}
                height={800}
                className="object-cover w-full h-[400px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Women&apos;s Fashion</h3>
                <Link 
                  href="/category/women"
                  className="inline-flex items-center text-white text-sm font-medium group-hover:underline"
                >
                  Shop Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800"
                alt="Premium Accessories"
                width={600}
                height={800}
                className="object-cover w-full h-[400px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Premium Accessories</h3>
                <Link 
                  href="/category/accessories"
                  className="inline-flex items-center text-white text-sm font-medium group-hover:underline"
                >
                  Shop Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?w=800"
                alt="Lifestyle Collection"
                width={600}
                height={800}
                className="object-cover w-full h-[400px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Lifestyle Collection</h3>
                <Link 
                  href="/category/lifestyle"
                  className="inline-flex items-center text-white text-sm font-medium group-hover:underline"
                >
                  Shop Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 