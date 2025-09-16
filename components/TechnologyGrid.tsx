'use client'

import { motion } from 'framer-motion'
import { Technology } from '@/types'

interface TechnologyGridProps {
  technologies: Technology[]
}

export default function TechnologyGrid({ technologies }: TechnologyGridProps) {
  if (!technologies || technologies.length === 0) {
    return null
  }

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="container-max-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Our Professional Equipment
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We use industry-leading technology to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {technologies.map((tech, index) => {
            const demoMedia = tech.metadata?.demo_media
            const keyBenefits = tech.metadata?.key_benefits || []
            const useCases = tech.metadata?.use_cases || []
            const isFeatured = tech.metadata?.featured_technology

            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-white rounded-2xl shadow-custom overflow-hidden ${
                  isFeatured ? 'ring-2 ring-primary-200 relative' : ''
                }`}
              >
                {isFeatured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}

                {demoMedia && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`${demoMedia.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
                      alt={tech.metadata?.technology_name || tech.title}
                      className="w-full h-full object-cover"
                      width="400"
                      height="225"
                    />
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                    {tech.metadata?.technology_name || tech.title}
                  </h3>
                  
                  <div 
                    className="text-secondary-600 mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: tech.metadata?.description || ''
                    }}
                  />

                  {keyBenefits.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                        Key Benefits
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {keyBenefits.slice(0, 4).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <div className="font-medium text-secondary-900 text-sm">
                                {benefit.benefit}
                              </div>
                              <div className="text-secondary-600 text-xs">
                                {benefit.description}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {tech.metadata?.technical_specs && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                        Technical Specifications
                      </h4>
                      <div 
                        className="text-secondary-600 text-sm"
                        dangerouslySetInnerHTML={{
                          __html: tech.metadata.technical_specs
                        }}
                      />
                    </div>
                  )}

                  {useCases.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                        Perfect For
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {useCases.map((useCase, useCaseIndex) => (
                          <span
                            key={useCaseIndex}
                            className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <button className="btn-primary w-full">
                    Learn More About {tech.metadata?.technology_name || tech.title}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Technology Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Technology Meets Innovation
          </h3>
          <p className="text-primary-100 mb-6 max-w-3xl mx-auto">
            Our commitment to using cutting-edge technology ensures that every virtual tour we create 
            meets the highest standards of quality, accuracy, and user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-white">
              Schedule Consultation
            </button>
            <button className="btn-outline-white">
              View Sample Tours
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}