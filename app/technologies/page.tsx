import { getTechnologies } from '@/lib/cosmic';
import TechnologyHero from '@/components/TechnologyHero';
import TechnologyGrid from '@/components/TechnologyGrid';
import MatterportWorkflow from '@/components/MatterportWorkflow';
import TechnologyStats from '@/components/TechnologyStats';

export const metadata = {
  title: 'Technology - Professional 3D Scanning & Matterport Services | RealSpace GR',
  description: 'Discover our cutting-edge 3D scanning technology including Matterport Pro3 cameras, drone integration, and precision scanning equipment. Learn how we create immersive virtual tours with millimeter accuracy.',
  keywords: 'Matterport Pro3, 3D scanning technology, virtual tour equipment, precision scanning, drone integration, digital twin creation',
  openGraph: {
    title: 'Technology - Professional 3D Scanning & Matterport Services | RealSpace GR',
    description: 'Cutting-edge 3D scanning technology and Matterport Pro3 cameras for immersive virtual tours.',
    type: 'website',
  }
};

export default async function TechnologyPage() {
  const technologies = await getTechnologies();

  return (
    <div className="min-h-screen">
      <TechnologyHero />
      <TechnologyStats />
      <MatterportWorkflow />
      <TechnologyGrid technologies={technologies} />
    </div>
  );
}