'use client'

import { motion } from 'framer-motion'

export default function TrustedCompaniesBanner() {
  // Real estate company logos - these would be replaced with your actual logos
  const companies = [
    {
      name: 'Keller Williams',
      logo: '/logos/keller-williams.png', // Replace with your actual logo path
      alt: 'Keller Williams Realty'
    },
    {
      name: 'Century 21',
      logo: '/logos/century-21.png', // Replace with your actual logo path
      alt: 'Century 21 Real Estate'
    },
    {
      name: 'Coldwell Banker',
      logo: '/logos/coldwell-banker.png', // Replace with your actual logo path
      alt: 'Coldwell Banker'
    },
    {
      name: 'RE/MAX',
      logo: '/logos/remax.png', // Replace with your actual logo path
      alt: 'RE/MAX'
    },
    {
      name: 'Berkshire Hathaway',
      logo: '/logos/berkshire-hathaway.png', // Replace with your actual logo path
      alt: 'Berkshire Hathaway HomeServices'
    },
    {
      name: 'Sotheby\'s',
      logo: '/logos/sothebys.png', // Replace with your actual logo path
      alt: 'Sotheby\'s International Realty'
    }
  ]

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container-max-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-secondary-600 mb-8">
            Trusted by West Michigan's Leading Real Estate Companies
          </h3>
          
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={company.logo}
                  alt={company.alt}
                  className="h-12 md:h-16 w-auto object-contain filter brightness-0 contrast-100"
                  width="120"
                  height="64"
                  onError={(e) => {
                    // Fallback to a placeholder if logo doesn't exist
                    e.currentTarget.src = `data:image/svg+xml,${encodeURIComponent(`
                      <svg width="120" height="64" xmlns="http://www.w3.org/2000/svg">
                        <rect width="120" height="64" fill="#f3f4f6" stroke="#e5e7eb" rx="8"/>
                        <text x="60" y="35" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#6b7280">
                          ${company.name}
                        </text>
                      </svg>
                    `)}`
                  }}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Optional descriptive text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm text-secondary-500 mt-6 max-w-2xl mx-auto"
          >
            Join the hundreds of real estate professionals who rely on our cutting-edge 3D virtual tour technology 
            to showcase properties and close deals faster.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}