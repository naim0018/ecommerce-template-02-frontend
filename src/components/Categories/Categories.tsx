/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { Category } from '@/types';

const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500',
    itemCount: 320
  },
  {
    id: '2',
    name: 'Fashion & Clothing',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500',
    itemCount: 520
  },
  {
    id: '3',
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500',
    itemCount: 230
  },
  {
    id: '4',
    name: 'Sports & Fitness',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500',
    itemCount: 150
  },
  {
    id: '5',
    name: 'Beauty & Health',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500',
    itemCount: 180
  },
  {
    id: '6',
    name: 'Books & Stationery',
    image: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=500',
    itemCount: 240
  },
  {
    id: '7',
    name: 'Toys & Games',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500',
    itemCount: 160
  },
  {
    id: '8',
    name: 'Automotive',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500',
    itemCount: 90
  }
];

export default function Categories() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      const container = sliderRef.current;
      const newScrollPosition = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

      // For looping
      if (newScrollPosition > container.scrollWidth - container.clientWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (newScrollPosition < 0) {
        container.scrollTo({ left: container.scrollWidth - container.clientWidth, behavior: 'smooth' });
      } else {
        container.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
      }
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      scroll('right');
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Check scroll position
  const handleScroll = () => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      setIsAtStart(container.scrollLeft <= 0);
      setIsAtEnd(container.scrollLeft >= container.scrollWidth - container.clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = sliderRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container-width">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of categories
          </p>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-all -translate-x-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={handleScroll}
          >
            {/* Add duplicate items at the start for smooth looping */}
            {categories.slice(-2).map((category) => (
              <Link 
                href={`/category/${category.id}`} 
                key={`start-${category.id}`}
                className="flex-none w-[280px] group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                      <h3 className="text-lg font-bold text-white mb-1">{category.name}</h3>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-300">{category.itemCount.toLocaleString()} Products</p>
                        <span className="inline-flex items-center text-white text-sm font-medium">
                          Shop Now
                          <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Original items */}
            {categories.map((category) => (
              <Link 
                href={`/category/${category.id}`} 
                key={category.id}
                className="flex-none w-[280px] group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                      <h3 className="text-lg font-bold text-white mb-1">{category.name}</h3>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-300">{category.itemCount.toLocaleString()} Products</p>
                        <span className="inline-flex items-center text-white text-sm font-medium">
                          Shop Now
                          <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Add duplicate items at the end for smooth looping */}
            {categories.slice(0, 2).map((category) => (
              <Link 
                href={`/category/${category.id}`} 
                key={`end-${category.id}`}
                className="flex-none w-[280px] group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                      <h3 className="text-lg font-bold text-white mb-1">{category.name}</h3>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-300">{category.itemCount.toLocaleString()} Products</p>
                        <span className="inline-flex items-center text-white text-sm font-medium">
                          Shop Now
                          <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-all translate-x-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 