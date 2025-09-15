'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <iframe
            src="https://www.youtube-nocookie.com/embed/PZTaoJ8hEW4?autoplay=1&mute=1&loop=1&playlist=PZTaoJ8hEW4&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
            title="3D Virtual Tour Background Video"
            className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 scale-150"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              pointerEvents: 'none',
              objectFit: 'cover'
            }}
          />
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max-width text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional 3D Virtual Tours
            <span className="block text-primary-400">That Drive Results</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your real estate marketing with immersive virtual tours using cutting-edge 
            Matterport technology. Increase engagement by 300% and sell properties 31% faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-block"
            >
              Get Your Free Quote
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-block"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">300%</div>
            <p className="text-lg">More Engagement</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">31%</div>
            <p className="text-lg">Faster Sales</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">±1mm</div>
            <p className="text-lg">Survey Accuracy</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}