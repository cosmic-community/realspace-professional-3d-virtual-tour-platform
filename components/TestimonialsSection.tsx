'use client'

import { motion } from 'framer-motion'
import { Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating ? 'text-yellow-400' : 'text-secondary-300'
      return (
        <svg
          key={index}
          className={`w-5 h-5 ${filled}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            clipRule="evenodd"
          />
        </svg>
      )
    })
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            See what our clients say about our professional 3D virtual tour services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => {
            const clientPhoto = testimonial.metadata?.client_photo
            const rating = parseInt(testimonial.metadata?.rating?.key || '5')
            
            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary-50 rounded-xl p-8 shadow-custom"
              >
                {/* Rating */}
                <div className="flex text-yellow-400 mb-4">
                  {renderStars(rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-secondary-700 text-lg mb-6 italic">
                  "{testimonial.metadata?.testimonial_text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center">
                  {clientPhoto && (
                    <img
                      src={`${clientPhoto.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                      alt={testimonial.metadata?.client_name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      width="48"
                      height="48"
                    />
                  )}
                  
                  <div>
                    <div className="font-semibold text-secondary-900">
                      {testimonial.metadata?.client_name}
                    </div>
                    <div className="text-secondary-600 text-sm">
                      {testimonial.metadata?.client_title}
                      {testimonial.metadata?.company && (
                        <span> at {testimonial.metadata.company}</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}