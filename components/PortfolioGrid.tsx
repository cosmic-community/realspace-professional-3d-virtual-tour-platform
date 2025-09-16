'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from '@/components/PortfolioCard';
import VirtualTourModal from '@/components/VirtualTourModal';
import { PortfolioProject } from '@/types';

interface PortfolioGridProps {
  projects: PortfolioProject[];
}

// Demo projects with the Matterport URLs provided
const demoProjects: PortfolioProject[] = [
  {
    id: 'demo-luxury-residence',
    slug: 'luxury-residence-showcase',
    title: 'Luxury Residence Showcase',
    content: '',
    type: 'portfolio-projects',
    created_at: '2024-01-15',
    modified_at: '2024-01-15',
    metadata: {
      project_title: 'Luxury Residential Property',
      client_name: 'Premium Real Estate Group',
      project_type: {
        key: 'residential',
        value: 'Residential'
      },
      project_description: 'Stunning luxury residence featuring modern architecture, premium finishes, and spacious living areas. This comprehensive virtual tour showcases every detail of this exceptional property.',
      square_footage: 4500,
      project_date: '2024-01-15',
      featured_image: {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&auto=format,compress',
        imgix_url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&auto=format,compress'
      },
      tour_embed_code: 'https://my.matterport.com/show/?m=r41jTCmNBt5',
      results_metrics: 'Increased property interest by 300%, reduced showing time by 60%',
      featured_project: true
    }
  },
  {
    id: 'demo-commercial-space',
    slug: 'commercial-office-tour',
    title: 'Commercial Office Space',
    content: '',
    type: 'portfolio-projects',
    created_at: '2024-01-10',
    modified_at: '2024-01-10',
    metadata: {
      project_title: 'Modern Commercial Office',
      client_name: 'Corporate Solutions Inc.',
      project_type: {
        key: 'commercial',
        value: 'Commercial'
      },
      project_description: 'Professional office space featuring contemporary design, flexible work areas, and state-of-the-art amenities. Perfect for showcasing commercial real estate opportunities.',
      square_footage: 8200,
      project_date: '2024-01-10',
      featured_image: {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&auto=format,compress',
        imgix_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&auto=format,compress'
      },
      tour_embed_code: 'https://my.matterport.com/show/?m=UcSZvTR37iX',
      results_metrics: 'Generated 25+ qualified leads, shortened sales cycle by 45%',
      featured_project: true
    }
  },
  {
    id: 'demo-featured-example',
    slug: 'featured-virtual-tour-example',
    title: 'Featured Virtual Tour Example',
    content: '',
    type: 'portfolio-projects',
    created_at: '2024-01-20',
    modified_at: '2024-01-20',
    metadata: {
      project_title: 'Premium Virtual Tour Experience',
      client_name: 'RealSpace GR Showcase',
      project_type: {
        key: 'residential',
        value: 'Residential'
      },
      project_description: 'An exceptional virtual tour experience showcasing advanced 3D scanning technology and immersive walkthrough capabilities. This example demonstrates the high-quality virtual tours we create for our clients.',
      square_footage: 3200,
      project_date: '2024-01-20',
      featured_image: {
        url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=2000&auto=format,compress',
        imgix_url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=2000&auto=format,compress'
      },
      tour_embed_code: 'https://my.matterport.com/show/?m=QtX77UcQ8aX',
      results_metrics: 'Enhanced online engagement by 250%, reduced in-person visits by 40%',
      featured_project: true
    }
  }
];

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Combine demo projects with any actual projects from Cosmic
  const allProjects = [...demoProjects, ...projects];

  // Filter projects based on selected filter
  const filteredProjects = allProjects.filter(project => {
    if (filter === 'all') return true;
    return project.metadata?.project_type?.key === filter;
  });

  const filterOptions = [
    { key: 'all', label: 'All Projects' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'construction', label: 'Construction' },
    { key: 'hospitality', label: 'Hospitality' }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max-width">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setFilter(option.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === option.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-secondary-700 hover:bg-gray-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PortfolioCard 
                project={project} 
                onOpenTour={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-secondary-600 text-lg">
              No projects found for the selected filter.
            </p>
          </div>
        )}
      </div>

      {/* Virtual Tour Modal */}
      {selectedProject && (
        <VirtualTourModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}