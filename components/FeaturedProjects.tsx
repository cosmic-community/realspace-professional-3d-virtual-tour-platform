'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PortfolioProject } from '@/types'

interface FeaturedProjectsProps {
  projects: PortfolioProject[]
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-max-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover how our professional 3D virtual tours have transformed properties and delivered measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project, index) => {
            const featuredImage = project.metadata?.featured_image
            const projectType = project.metadata?.project_type?.value
            const squareFootage = project.metadata?.square_footage

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-custom hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {featuredImage && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
                      alt={project.metadata?.project_title || project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      width="400"
                      height="225"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    {projectType && (
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                        {projectType}
                      </span>
                    )}
                    {squareFootage && (
                      <span className="text-secondary-500 text-sm">
                        {squareFootage.toLocaleString()} sq ft
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {project.metadata?.project_title || project.title}
                  </h3>
                  
                  <div 
                    className="text-secondary-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: project.metadata?.project_description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...' || ''
                    }}
                  />
                  
                  <Link 
                    href={`/portfolio/${project.slug}`}
                    className="btn-primary w-full text-center inline-block"
                  >
                    View Project Details
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn-secondary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}