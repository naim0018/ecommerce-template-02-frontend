'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container-width">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* <Image 
              src="https://i.imgur.com/DPZPFxr.jpg"
              alt="Store Logo" 
              width={120} 
              height={40} 
              className="object-contain"
            /> */}
            <h1 className="text-2xl font-bold">Ecommerce</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
            <Link href="/deals" className="text-gray-600 hover:text-gray-900">Deals</Link>
            <Link href="/new" className="text-gray-600 hover:text-gray-900">New Arrivals</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Cart & Account */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/categories" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                Categories
              </Link>
              <Link href="/deals" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                Deals
              </Link>
              <Link href="/new" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                New Arrivals
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 