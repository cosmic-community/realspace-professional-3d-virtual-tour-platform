import { getPortfolioProjects } from '@/lib/cosmic';
import PortfolioHero from '@/components/PortfolioHero';
import PortfolioGrid from '@/components/PortfolioGrid';
import { PortfolioProject } from '@/types';

export const metadata = {
  title: 'Portfolio - Professional 3D Virtual Tours | RealSpace GR',
  description: 'Explore our portfolio of professional Matterport 3D virtual tours. See how we\'ve transformed spaces across real estate, construction, and commercial industries with cutting-edge virtual tour technology.',
  keywords: 'virtual tour portfolio, Matterport examples, 3D scanning projects, real estate virtual tours, construction documentation',
  openGraph: {
    title: 'Portfolio - Professional 3D Virtual Tours | RealSpace GR',
    description: 'Explore our portfolio of professional Matterport 3D virtual tours and 3D scanning projects.',
    type: 'website',
  }
};

export default async function Portfolio() {
  const portfolioProjects = await getPortfolioProjects();

  return (
    <div className="min-h-screen">
      <PortfolioHero />
      <PortfolioGrid projects={portfolioProjects} />
    </div>
  );
}