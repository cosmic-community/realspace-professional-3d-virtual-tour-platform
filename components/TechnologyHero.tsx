'use client'

import { motion } from 'framer-motion'

export default function TechnologyHero() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="container-max-width relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Cutting-Edge 3D
            <span className="text-secondary-200 block">Scanning Technology</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed"
          >
            Discover the advanced technology behind our professional virtual tours. 
            From millimeter-accurate Matterport Pro3 cameras to integrated drone services, 
            we use the best equipment to create stunning digital experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              className="btn-white"
              onClick={() => document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </button>
            <button 
              className="btn-outline-white"
              onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Equipment
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white opacity-30 rounded-full"></div>
    </section>
  )
}