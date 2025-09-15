export const metadata = {
  title: 'Contact RealSpace GR - Get Your Free Quote',
  description: 'Contact us for professional 3D virtual tours, Matterport scanning services, and custom solutions. Free quotes available.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-max-width">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Let's Create Something Amazing Together
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Ready to transform your space with professional 3D virtual tours? 
              Get in touch for a free consultation and custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Phone</div>
                    <div className="text-secondary-600">(616) 555-0123</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Email</div>
                    <div className="text-secondary-600">info@realspacegr.com</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Location</div>
                    <div className="text-secondary-600">
                      Grand Rapids, Michigan<br />
                      Serving Michigan & Surrounding Areas
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-secondary-50 rounded-lg p-6">
                <h3 className="font-semibold text-secondary-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-secondary-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-custom p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Request Your Free Quote
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-900 mb-2">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-900 mb-2">
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-900 mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-900 mb-2">
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-900 mb-2">
                    Service Needed
                  </label>
                  <select className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="">Select a service</option>
                    <option value="virtual-tours">Virtual Tours</option>
                    <option value="3d-scanning">3D Scanning</option>
                    <option value="floor-plans">Floor Plans</option>
                    <option value="construction-docs">Construction Documentation</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-900 mb-2">
                    Project Details *
                  </label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Tell us about your project, property size, timeline, and any specific requirements..."
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}