'use client'
import Image from 'next/image';
import Link from 'next/link';

const trendingItems = [
  {
    id: '1',
    name: 'Premium Watches',
    description: 'Luxury timepieces for every occasion',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800',
    category: 'Accessories'
  },
  {
    id: '2',
    name: 'Smart Home Devices',
    description: 'Transform your living space',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800',
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Organic Skincare',
    description: 'Natural beauty essentials',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800',
    category: 'Beauty'
  },
  {
    id: '4',
    name: 'Designer Furniture',
    description: 'Modern & contemporary pieces',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800',
    category: 'Home'
  }
];

export default function Trending() {
  return (
    <section className="py-16 bg-white">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Now</h2>
          <p className="text-lg text-gray-600">Discover what&apos;s popular this week</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trendingItems.map((item, index) => (
            <Link 
              href={`/category/${item.category.toLowerCase()}`}
              key={item.id}
              className={`relative group overflow-hidden rounded-2xl ${
                index === 0 ? 'md:col-span-2 md:h-[600px]' : 'h-[400px]'
              }`}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-4">
                  {item.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-200 mb-4">{item.description}</p>
                <div className="inline-flex items-center text-white font-medium group-hover:underline">
                  Explore Collection
                  <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 