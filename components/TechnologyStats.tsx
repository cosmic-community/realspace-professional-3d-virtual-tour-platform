'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    number: "±1mm",
    label: "Scanning Accuracy",
    description: "Survey-grade precision"
  },
  {
    number: "20s",
    label: "Per Scan Position",
    description: "Ultra-fast capture"
  },
  {
    number: "134MP",
    label: "Image Resolution",
    description: "Professional quality"
  },
  {
    number: "100m",
    label: "Maximum Range",
    description: "Extended coverage"
  }
]

export default function TechnologyStats() {
  return (
    <section className="py-16 bg-white">
      <div className="container-max-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Precision by the Numbers
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Our Matterport Pro3 technology delivers unmatched accuracy and quality for professional applications
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-secondary-900 mb-1">
                {stat.label}
              </div>
              <div className="text-secondary-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}