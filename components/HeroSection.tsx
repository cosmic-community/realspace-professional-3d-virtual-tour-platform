'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero-gradient section-padding">
      <div className="container-max-width">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6"
          >
            Professional <span className="text-gradient">3D Virtual Tours</span> & Matterport Services
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto"
          >
            Transform your real estate, construction, or commercial space with cutting-edge 3D scanning technology. 
            Our Matterport Pro3 services deliver millimeter-accurate digital twins that sell properties 31% faster.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Your Free Quote
            </Link>
            <Link href="/portfolio" className="btn-secondary text-lg px-8 py-4">
              View Our Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">300%</div>
              <div className="text-secondary-600">More Engagement vs Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">31%</div>
              <div className="text-secondary-600">Faster Sale Times</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">±1mm</div>
              <div className="text-secondary-600">Survey-Grade Accuracy</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}