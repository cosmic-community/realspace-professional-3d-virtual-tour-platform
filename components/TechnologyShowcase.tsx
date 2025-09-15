'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Technology } from '@/types'

interface TechnologyShowcaseProps {
  technologies: Technology[]
}

export default function TechnologyShowcase({ technologies }: TechnologyShowcaseProps) {
  if (!technologies || technologies.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-secondary-900 text-white">
      <div className="container-max-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cutting-Edge Technology
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            We use the latest professional-grade equipment to deliver unparalleled accuracy and quality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {technologies.map((technology, index) => {
            const demoMedia = technology.metadata?.demo_media
            const keyBenefits = technology.metadata?.key_benefits || []

            return (
              <motion.div
                key={technology.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                {/* Technology Image */}
                {demoMedia && (
                  <div className="mb-8 lg:mb-0">
                    <img
                      src={`${demoMedia.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                      alt={technology.metadata?.technology_name}
                      className="w-full rounded-xl shadow-lg"
                      width="400"
                      height="300"
                    />
                  </div>
                )}

                {/* Technology Content */}
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {technology.metadata?.technology_name}
                  </h3>
                  
                  <div 
                    className="text-secondary-300 mb-6 prose-custom"
                    dangerouslySetInnerHTML={{
                      __html: technology.metadata?.description || ''
                    }}
                  />

                  {/* Key Benefits */}
                  {keyBenefits.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {keyBenefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div>
                              <span className="font-medium text-white">{benefit.benefit}: </span>
                              <span className="text-secondary-300">{benefit.description}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link 
                    href={`/technologies/${technology.slug}`}
                    className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/technologies" className="btn-secondary">
            View All Technologies
          </Link>
        </div>
      </div>
    </section>
  )
}