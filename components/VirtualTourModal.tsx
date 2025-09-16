'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioProject } from '@/types';

interface VirtualTourModalProps {
  project: PortfolioProject;
  onClose: () => void;
}

export default function VirtualTourModal({ project, onClose }: VirtualTourModalProps) {
  const {
    project_title,
    client_name,
    project_description,
    square_footage,
    tour_embed_code,
    results_metrics
  } = project.metadata || {};

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl font-bold text-secondary-900">
                {project_title || project.title}
              </h2>
              {client_name && (
                <p className="text-primary-600 font-medium mt-1">
                  {client_name}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Content */}
          <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)]">
            {/* Virtual Tour Embed */}
            <div className="lg:w-2/3 bg-gray-900">
              {tour_embed_code ? (
                <iframe
                  src={tour_embed_code}
                  className="w-full h-64 lg:h-full min-h-[400px]"
                  frameBorder="0"
                  allowFullScreen
                  title={`Virtual tour of ${project_title || project.title}`}
                />
              ) : (
                <div className="w-full h-64 lg:h-full min-h-[400px] flex items-center justify-center text-white">
                  <p>Virtual tour not available</p>
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="lg:w-1/3 p-6 overflow-y-auto">
              <div className="space-y-6">
                {/* Description */}
                {project_description && (
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      Project Overview
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {project_description}
                    </p>
                  </div>
                )}

                {/* Project Stats */}
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                    Project Details
                  </h3>
                  <div className="space-y-2">
                    {square_footage && (
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Square Footage:</span>
                        <span className="font-medium">{square_footage.toLocaleString()} sq ft</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Technology:</span>
                      <span className="font-medium">Matterport Pro2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Scan Quality:</span>
                      <span className="font-medium">4K</span>
                    </div>
                  </div>
                </div>

                {/* Results */}
                {results_metrics && (
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      Results
                    </h3>
                    <p className="text-secondary-600">
                      {results_metrics}
                    </p>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="space-y-3 pt-4">
                  <button
                    onClick={onClose}
                    className="w-full btn-primary"
                  >
                    Get Similar Tour
                  </button>
                  <button
                    onClick={() => window.open(tour_embed_code, '_blank')}
                    className="w-full btn-secondary"
                  >
                    Open in New Tab
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}