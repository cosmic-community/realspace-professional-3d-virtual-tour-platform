'use client'

import { motion } from 'framer-motion'

const trustedCompanies = [
  {
    name: 'HomeRealty',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop&auto=format,compress',
    alt: 'HomeRealty - Trusted Real Estate Partner'
  },
  {
    name: '616 Realty',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=200&fit=crop&auto=format,compress',
    alt: '616 Realty - Michigan Real Estate Experts'
  },
  {
    name: 'Jaqua Realtors',
    logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=200&fit=crop&auto=format,compress',
    alt: 'Jaqua Realtors - Professional Real Estate Services'
  },
  {
    name: 'Yoder Real Estate Team',
    logo: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=200&fit=crop&auto=format,compress',
    alt: 'Yoder Real Estate Team - Trusted Property Specialists'
  }
]

export default function TrustedCompaniesBanner() {
  return (
    <section className="section-padding bg-secondary-50 border-t border-secondary-200">
      <div className="container-max-width">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4"
          >
            Trusted by Leading Real Estate Companies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-secondary-600 max-w-2xl mx-auto"
          >
            Professional 3D virtual tours that help our partners sell properties faster and attract more qualified buyers
          </motion.p>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {trustedCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[120px] relative"
            >
              <div className="relative w-full h-16 flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={company.alt}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 rounded"
                  width="200"
                  height="80"
                />
                {/* Company name overlay for better identification */}
                <div className="absolute inset-0 flex items-center justify-center bg-white/90 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded">
                  <span className="text-sm font-semibold text-secondary-800 text-center px-2">
                    {company.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-secondary-600">Properties Scanned</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-primary-600 mb-2">40%</div>
            <div className="text-secondary-600">Faster Sales</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
            <div className="text-secondary-600">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}