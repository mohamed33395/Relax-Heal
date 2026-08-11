'use client'

import { useState } from 'react'
import Button from './Button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-40 border-b border-gray-800">
      <div className="w-full py-4 flex items-center justify-between px-4 md:px-6">
        {/* Left side - Logo */}
        <img src="/imag/loge.png" alt="Logo" className="h-10 md:h-12 w-auto" />

        {/* Center - Links (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/packages" className="text-white hover:text-gray-300 transition-colors">الباقات</a>
          <a href="/experience" className="text-white hover:text-gray-300 transition-colors">التجربة</a>
          <a href="/about" className="text-white hover:text-gray-300 transition-colors">عن ريلاكس هيل</a>
          <a href="/treatments" className="text-white hover:text-gray-300 transition-colors">العلاجات</a>
          <a href="/" className="text-white hover:text-gray-300 transition-colors">الرئيسية</a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Right side - Button (hidden on mobile) */}
        <div className="hidden md:block">
          <Button icon={
            <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: 'rgba(150, 215, 78, 1)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 3.293a1 1 0 010 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          }>
              ابدأ تجربتك
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="flex flex-col items-center py-4 space-y-4">
            <a href="/" className="text-white hover:text-gray-300 transition-colors">الرئيسية</a>
            <a href="/treatments" className="text-white hover:text-gray-300 transition-colors">العلاجات</a>
            <a href="/about" className="text-white hover:text-gray-300 transition-colors">عن ريلاكس هيل</a>
            <a href="/experience" className="text-white hover:text-gray-300 transition-colors">التجربة</a>
            <a href="/packages" className="text-white hover:text-gray-300 transition-colors">الباقات</a>
            <Button icon={
              <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: 'rgba(150, 215, 78, 1)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 3.293a1 1 0 010 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            }>
                ابدأ تجربتك
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
