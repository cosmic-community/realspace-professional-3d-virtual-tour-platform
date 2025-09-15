'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Service } from '@/types'

interface FeaturedServicesProps {
  services: Service[]
}

export default function FeaturedServices({ services }: FeaturedServicesProps) {
  if (!services || services.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Professional 3D Services
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Comprehensive virtual tour and scanning solutions powered by cutting-edge Matterport technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const featuredImage = service.metadata?.featured_image

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-custom hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {featuredImage && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`${featuredImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                      alt={service.metadata?.service_name || service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      width="300"
                      height="200"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {service.metadata?.service_name || service.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-4 line-clamp-3">
                    {service.metadata?.short_description}
                  </p>
                  
                  {service.metadata?.starting_price && (
                    <div className="text-primary-600 font-semibold mb-4">
                      Starting at {service.metadata.starting_price}
                    </div>
                  )}
                  
                  <Link 
                    href={`/services/${service.slug}`}
                    className="btn-primary w-full text-center inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}