// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Portfolio Project interface
interface PortfolioProject extends CosmicObject {
  type: 'portfolio-projects';
  metadata: {
    project_title?: string;
    client_name?: string;
    project_type?: {
      key: string;
      value: string;
    };
    project_description?: string;
    square_footage?: number;
    project_date?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    project_gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    tour_embed_code?: string;
    results_metrics?: string;
    services_used?: Service[];
    featured_project?: boolean;
  };
}

// Service interface
interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    short_description?: string;
    full_description?: string;
    service_category?: {
      key: string;
      value: string;
    };
    technologies_used?: string[];
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    service_gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    starting_price?: string;
    typical_duration?: string;
    industries_served?: string[];
    featured_service?: boolean;
  };
}

// Blog Post interface
interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    post_title?: string;
    excerpt?: string;
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: string;
    categories?: string[];
    related_projects?: PortfolioProject[];
    featured_post?: boolean;
  };
}

// Testimonial interface
interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    client_title?: string;
    company?: string;
    testimonial_text?: string;
    rating?: {
      key: string;
      value: string;
    };
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    related_project?: PortfolioProject;
    featured_testimonial?: boolean;
  };
}

// Technology interface
interface Technology extends CosmicObject {
  type: 'technologies';
  metadata: {
    technology_name?: string;
    description?: string;
    key_benefits?: Array<{
      benefit: string;
      description: string;
    }>;
    technical_specs?: string;
    demo_media?: {
      url: string;
      imgix_url: string;
    };
    use_cases?: string[];
    featured_technology?: boolean;
  };
}

// API response types
interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Type guards for runtime validation
function isPortfolioProject(obj: CosmicObject): obj is PortfolioProject {
  return obj.type === 'portfolio-projects';
}

function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type === 'blog-posts';
}

function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

function isTechnology(obj: CosmicObject): obj is Technology {
  return obj.type === 'technologies';
}

// Export all types
export type {
  CosmicObject,
  PortfolioProject,
  Service,
  BlogPost,
  Testimonial,
  Technology,
  CosmicResponse
};

export {
  isPortfolioProject,
  isService,
  isBlogPost,
  isTestimonial,
  isTechnology
};