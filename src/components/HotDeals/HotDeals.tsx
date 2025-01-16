'use client'
import Image from 'next/image';
import { Product } from '@/types';

const deals: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    discount: 30,
  },
  {
    id: '2',
    name: 'Smart Watch Series 5',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500',
    discount: 20,
  },
  {
    id: '3',
    name: 'Nike Air Max 2024',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    discount: 15,
  },
  {
    id: '4',
    name: 'MacBook Pro M2',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    discount: 10,
  },
  {
    id: '5',
    name: 'iPhone 15 Pro',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500',
    discount: 25,
  },
  {
    id: '6',
    name: 'Samsung 4K TV',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500',
    discount: 40,
  },
  {
    id: '7',
    name: 'Gaming Chair',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500',
    discount: 35,
  },
  {
    id: '8',
    name: 'PlayStation 5',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500',
    discount: 15,
  }
];

export default function HotDeals() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-width">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Hot Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={deal.image}
                  alt={deal.name}
                  fill
                  className="object-cover"
                />
                {deal.discount && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">
                    -{deal.discount}%
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{deal.name}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 line-through">${deal.price}</span>
                    <span className="text-xl font-bold ml-2">
                      ${(deal.price * (1 - (deal.discount || 0) / 100)).toFixed(2)}
                    </span>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
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