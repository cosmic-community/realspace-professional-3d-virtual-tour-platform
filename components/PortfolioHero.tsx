'use client';

import { motion } from 'framer-motion';

export default function PortfolioHero() {
  return (
    <section className="hero-gradient py-20">
      <div className="container-max-width">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              Explore our collection of professional 3D virtual tours and immersive experiences. 
              From luxury real estate to commercial spaces, see how we bring properties to life 
              with cutting-edge Matterport technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-secondary-600">Projects Completed</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary-600">50M+</div>
                <div className="text-sm text-secondary-600">Square Feet Scanned</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-secondary-600">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}