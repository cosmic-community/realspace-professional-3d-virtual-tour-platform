import HeroSection from '@/components/HeroSection'
import TrustedCompaniesBanner from '@/components/TrustedCompaniesBanner'
import FeaturedServices from '@/components/FeaturedServices'
import FeaturedProjects from '@/components/FeaturedProjects'
import TestimonialsSection from '@/components/TestimonialsSection'
import TechnologyShowcase from '@/components/TechnologyShowcase'
import { getServices, getPortfolioProjects, getTestimonials, getTechnologies } from '@/lib/cosmic'

export default async function HomePage() {
  // Fetch all data in parallel
  const [services, projects, testimonials, technologies] = await Promise.all([
    getServices(),
    getPortfolioProjects(),
    getTestimonials(),
    getTechnologies()
  ])

  // Filter featured items
  const featuredServices = services.filter(service => service.metadata?.featured_service)
  const featuredProjects = projects.filter(project => project.metadata?.featured_project)
  const featuredTestimonials = testimonials.filter(testimonial => testimonial.metadata?.featured_testimonial)
  const featuredTechnologies = technologies.filter(tech => tech.metadata?.featured_technology)

  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustedCompaniesBanner />
      <FeaturedServices services={featuredServices} />
      <FeaturedProjects projects={featuredProjects} />
      <TechnologyShowcase technologies={featuredTechnologies} />
      <TestimonialsSection testimonials={featuredTestimonials} />
    </div>
  )
}