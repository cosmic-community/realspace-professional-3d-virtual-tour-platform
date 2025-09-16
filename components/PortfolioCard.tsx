'use client';

import { motion } from 'framer-motion';
import { PortfolioProject } from '@/types';

interface PortfolioCardProps {
  project: PortfolioProject;
  onOpenTour: () => void;
}

export default function PortfolioCard({ project, onOpenTour }: PortfolioCardProps) {
  const {
    project_title,
    client_name,
    project_type,
    project_description,
    square_footage,
    featured_image,
    project_date
  } = project.metadata || {};

  const formattedDate = project_date ? new Date(project_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  }) : '';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-custom overflow-hidden group cursor-pointer"
      onClick={onOpenTour}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        {featured_image?.imgix_url && (
          <img
            src={`${featured_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={project_title || project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width={800}
            height={600}
          />
        )}
        
        {/* Project Type Badge */}
        {project_type && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {project_type.value}
            </span>
          </div>
        )}

        {/* Virtual Tour Button */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
            View Virtual Tour
          </button>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary-900 mb-2">
          {project_title || project.title}
        </h3>
        
        {client_name && (
          <p className="text-primary-600 font-medium mb-3">
            {client_name}
          </p>
        )}

        <p className="text-secondary-600 mb-4 line-clamp-3">
          {project_description}
        </p>

        <div className="flex items-center justify-between text-sm text-secondary-500">
          {square_footage && (
            <span>{square_footage.toLocaleString()} sq ft</span>
          )}
          {formattedDate && (
            <span>{formattedDate}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}