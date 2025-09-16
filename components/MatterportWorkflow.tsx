'use client'

import { motion } from 'framer-motion'

const workflowSteps = [
  {
    step: 1,
    title: "Site Preparation",
    description: "We arrive on-site and assess the space, ensuring optimal lighting conditions and clearing any obstacles that might interfere with scanning.",
    icon: "🏠",
    duration: "15-30 minutes",
    details: [
      "Space assessment and planning",
      "Lighting optimization",
      "Equipment setup and calibration"
    ]
  },
  {
    step: 2,
    title: "3D Scanning Process",
    description: "Using our Matterport Pro3 camera, we systematically capture the entire space with millimeter accuracy, taking scan positions every 8-10 feet.",
    icon: "📷",
    duration: "2-6 hours",
    details: [
      "Strategic scan positioning",
      "20 seconds per scan capture",
      "Real-time quality verification"
    ]
  },
  {
    step: 3,
    title: "Cloud Processing",
    description: "Scan data is automatically uploaded to Matterport's secure cloud where advanced AI algorithms process and stitch together your virtual tour.",
    icon: "☁️",
    duration: "24-48 hours",
    details: [
      "AI-powered image processing",
      "3D mesh generation",
      "Virtual tour creation"
    ]
  },
  {
    step: 4,
    title: "Final Delivery",
    description: "Receive your completed virtual tour with interactive features, measurement tools, floor plans, and easy sharing options.",
    icon: "✨",
    duration: "Immediate access",
    details: [
      "Interactive virtual tour",
      "Professional floor plans",
      "Marketing materials"
    ]
  }
]

export default function MatterportWorkflow() {
  return (
    <section id="workflow" className="py-20 bg-secondary-50">
      <div className="container-max-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            How Our 3D Scanning Works
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            From initial capture to final delivery, here's our simple 4-step process that transforms your space into an immersive virtual experience
          </p>
        </div>

        <div className="space-y-16">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary-900">
                      {step.title}
                    </h3>
                    <div className="text-primary-600 font-medium">
                      {step.duration}
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-secondary-600 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-secondary-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="flex-1 max-w-md">
                <div className="bg-white rounded-2xl shadow-custom p-8 text-center">
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <div className="text-lg font-semibold text-secondary-900 mb-2">
                    Step {step.step}
                  </div>
                  <div className="text-primary-600 font-medium">
                    {step.duration}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-custom p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-secondary-600 mb-6">
              Experience the power of professional 3D virtual tours for your property or project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule a Scan
              </button>
              <button className="btn-secondary">
                View Pricing
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}