# RealSpace Professional 3D Virtual Tour Platform

![App Preview](https://imgix.cosmicjs.com/d2f867e0-9271-11f0-939d-c1726752de46-photo-1560518883-ce09059eeffa-1757967801524.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A cutting-edge professional website showcasing 3D virtual tour services, Matterport technology integration, and comprehensive real estate solutions. Built with Next.js 15 and powered by Cosmic CMS for dynamic content management.

## Features

- **Interactive Virtual Tour Showcase** - Embedded Matterport tours demonstrating service quality
- **Technology Deep Dives** - Detailed pages featuring Matterport Pro3 and drone integration  
- **Project Portfolio Gallery** - Case studies with before/after documentation and ROI metrics
- **Service Category Organization** - Structured presentation of virtual tours, 3D scanning, and construction documentation
- **Client Testimonials** - Star ratings and detailed feedback from real estate and commercial clients
- **Responsive Blog Platform** - Industry insights, best practices, and technology updates
- **Mobile-Optimized Design** - Seamless experience across all devices
- **SEO-Optimized** - Structured data and meta optimization for search visibility

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68c873b6fe0840663f64f7e8&clone_repository=68c87702fe0840663f64f81c)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "I want to clone https://www.realspacegr.com/ but make it 100x better. I want to showoff my virtual tour 3d layout business and additional services. The website needs to be informative but also showoff my skills, which in part is using the Matterport 3d scanning technology, https://matterport.com/, so I want to use a lot of their website info as well. Think you can build that?"

### Code Generation Prompt

> "Based on the content model I created for "I want to clone https://www.realspacegr.com/ but make it 100x better. I want to showoff my virtual tour 3d layout business and additional services. The website needs to be informative but also showoff my skills, which in part is using the Matterport 3d scanning technology, https://matterport.com/, so I want to use a lot of their website info as well. Think you can build that?", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and enhanced development experience
- **Tailwind CSS** - Utility-first styling framework
- **Cosmic CMS** - Headless CMS for content management
- **Framer Motion** - Smooth animations and interactions
- **Vercel** - Optimized deployment platform

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Cosmic account with the RealSpace content model

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env.local` file with your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

### Fetching Portfolio Projects
```typescript
const { objects: projects } = await cosmic.objects
  .find({ type: 'portfolio-projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Fetching Services with Categories
```typescript
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Fetching Blog Posts
```typescript
const { objects: posts } = await cosmic.objects
  .find({ type: 'blog-posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

## Cosmic CMS Integration

This application leverages your Cosmic content model with the following object types:

- **Portfolio Projects** - Showcase completed work with images, metrics, and embedded tours
- **Services** - Detail service offerings with pricing and technical specifications
- **Blog Posts** - Industry insights and company updates with categories and related projects
- **Testimonials** - Client feedback with ratings and project connections
- **Technologies** - Equipment and technology specifications with benefits and use cases

All content is dynamically loaded from Cosmic, allowing for easy updates through the Cosmic dashboard.

## Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Connect repository to Netlify
2. Add environment variables in site settings
3. Build command: `bun build`
4. Publish directory: `out` (for static export)

Remember to set your environment variables in your deployment platform's dashboard.

<!-- README_END -->