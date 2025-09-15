import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RealSpace GR - Professional 3D Virtual Tours & Matterport Services',
  description: 'Leading 3D virtual tour services using cutting-edge Matterport technology. Serving real estate, construction, and commercial industries with precision scanning and immersive experiences.',
  keywords: 'virtual tours, 3D scanning, Matterport, real estate, construction documentation, commercial photography',
  openGraph: {
    title: 'RealSpace GR - Professional 3D Virtual Tours',
    description: 'Professional Matterport 3D virtual tours and precision scanning services',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}