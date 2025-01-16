'use client'
import Image from 'next/image';
import { Product } from '@/types';

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Leather Bag',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500',
    category: 'Accessories',
    rating: 4.8,
    reviews: 156,
    discount: 20
  },
  {
    id: '2',
    name: 'Wireless Earbuds Pro',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500',
    category: 'Electronics',
    rating: 4.9,
    reviews: 243,
    discount: 15
  },
  {
    id: '3',
    name: 'Smart Home Hub',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500',
    category: 'Electronics',
    rating: 4.7,
    reviews: 189
  },
  {
    id: '4',
    name: 'Minimalist Watch',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500',
    category: 'Accessories',
    rating: 4.6,
    reviews: 167,
    discount: 25
  },
  {
    id: '5',
    name: 'Professional Camera',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500',
    category: 'Electronics',
    rating: 4.9,
    reviews: 208
  },
  {
    id: '6',
    name: 'Designer Sunglasses',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500',
    category: 'Accessories',
    rating: 4.7,
    reviews: 143,
    discount: 30
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-width">
        <div className="flex flex-col items-center mb-16">
          <span className="text-blue-600 font-medium mb-2">Our Selection</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl text-center">
            Discover our carefully curated collection of premium products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-[300px] overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay with Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="transform scale-0 group-hover:scale-100 transition-transform duration-500 w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  <button className="transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-gray-900">
                    {product.category}
                  </span>
                </div>
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
                      {product.discount}% OFF
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Product Info */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-600 ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    {product.discount ? (
                      <>
                        <span className="text-2xl font-bold text-gray-900">
                          ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ${product.price}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                    )}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 