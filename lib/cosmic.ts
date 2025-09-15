import { createBucketClient } from '@cosmicjs/sdk';
import { 
  PortfolioProject, 
  Service, 
  BlogPost, 
  Testimonial, 
  Technology,
  CosmicResponse 
} from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Portfolio Projects
export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'portfolio-projects' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const projects = response.objects as PortfolioProject[];
    
    // Sort by project date (newest first)
    return projects.sort((a, b) => {
      const dateA = new Date(a.metadata?.project_date || '').getTime();
      const dateB = new Date(b.metadata?.project_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch portfolio projects');
  }
}

export async function getPortfolioProject(slug: string): Promise<PortfolioProject | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'portfolio-projects',
      slug
    }).props(['id', 'title', 'slug', 'metadata']).depth(1);
    
    return response.object as PortfolioProject;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}

// Services
export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Service[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch services');
  }
}

export async function getService(slug: string): Promise<Service | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'services',
      slug
    }).props(['id', 'title', 'slug', 'metadata']).depth(1);
    
    return response.object as Service;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}

// Blog Posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const posts = response.objects as BlogPost[];
    
    // Sort by created_at (newest first)
    return posts.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch blog posts');
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'blog-posts',
      slug
    }).props(['id', 'title', 'slug', 'metadata']).depth(1);
    
    return response.object as BlogPost;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch testimonials');
  }
}

// Technologies
export async function getTechnologies(): Promise<Technology[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'technologies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Technology[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch technologies');
  }
}

export async function getTechnology(slug: string): Promise<Technology | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'technologies',
      slug
    }).props(['id', 'title', 'slug', 'metadata']).depth(1);
    
    return response.object as Technology;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}