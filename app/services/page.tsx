import { getServices } from '@/lib/cosmic'
import { Service } from '@/types'
import Link from 'next/link'

export const metadata = {
  title: 'Professional 3D Virtual Tour Services | RealSpace GR',
  description: 'Comprehensive 3D virtual tours, precision scanning, floor plans, and construction documentation using Matterport Pro3 technology.',
}

export default async function ServicesPage() {
  const services = await getServices()

  // Group services by category
  const servicesByCategory = services.reduce((acc, service) => {
    const category = service.metadata?.service_category?.value || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(service)
    return acc
  }, {} as Record<string, Service[]>)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-max-width">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Professional 3D Services
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Comprehensive virtual tour and scanning solutions powered by cutting-edge Matterport technology. 
              From immersive virtual tours to precision documentation, we deliver results that drive success.
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="section-padding bg-white">
        <div className="container-max-width">
          {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
                {category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service) => {
                  const featuredImage = service.metadata?.featured_image

                  return (
                    <div
                      key={service.id}
                      className="bg-white rounded-xl shadow-custom hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                      {featuredImage && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={`${featuredImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                            alt={service.metadata?.service_name || service.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            width="300"
                            height="200"
                          />
                        </div>
                      )}
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-secondary-900 mb-3">
                          {service.metadata?.service_name || service.title}
                        </h3>
                        
                        <p className="text-secondary-600 mb-4">
                          {service.metadata?.short_description}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4">
                          {service.metadata?.starting_price && (
                            <div className="text-primary-600 font-semibold">
                              {service.metadata.starting_price}
                            </div>
                          )}
                          {service.metadata?.typical_duration && (
                            <div className="text-secondary-500 text-sm">
                              {service.metadata.typical_duration}
                            </div>
                          )}
                        </div>
                        
                        <Link 
                          href={`/services/${service.slug}`}
                          className="btn-primary w-full text-center inline-block"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a custom quote for your project and discover how our professional 3D services 
            can deliver measurable results for your business.
          </p>
          <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}