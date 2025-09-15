'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max-width">
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-gradient">
              RealSpace GR
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Portfolio
            </Link>
            <Link href="/technologies" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Technology
            </Link>
            <Link href="/blog" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`block h-0.5 w-6 bg-secondary-700 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block h-0.5 w-6 bg-secondary-700 mt-1 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-secondary-700 mt-1 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200"
          >
            <nav className="px-4 py-4 space-y-4">
              <Link href="/" className="block text-secondary-700 hover:text-primary-600 font-medium">
                Home
              </Link>
              <Link href="/services" className="block text-secondary-700 hover:text-primary-600 font-medium">
                Services
              </Link>
              <Link href="/portfolio" className="block text-secondary-700 hover:text-primary-600 font-medium">
                Portfolio
              </Link>
              <Link href="/technologies" className="block text-secondary-700 hover:text-primary-600 font-medium">
                Technology
              </Link>
              <Link href="/blog" className="block text-secondary-700 hover:text-primary-600 font-medium">
                Blog
              </Link>
              <Link href="/contact" className="block btn-primary w-full text-center">
                Get Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}