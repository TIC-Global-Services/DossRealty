import type { Metadata } from 'next'
import Hero from '@/components/projects/Hero'
import ProjectsFAQ from '@/components/projects/ProjectsFAQ'
import { projectsFaqData } from '@/data/faq'
import ProjectSection from '@/components/projects/ProjectSection'
import Testimonials from '@/components/projects/Testimonials'
import EnquiryBtn from '@/components/reusable/EnquiryBtn'
import React from 'react'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema, faqSchema } from '@/lib/seo/schema'
import { DEFAULT_OG_IMAGE, PROJECTS, SITE_URL } from '@/lib/seo/config'

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'Explore Doss Realty\'s RERA-approved plotted communities across Chennai and Tamil Nadu, including Metropettai in Poonamallee and Promise Park in Kanchipuram.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects | Doss Realty',
    description:
      'RERA-approved plotted developments across Chennai and Tamil Nadu.',
    url: '/projects',
    images: [DEFAULT_OG_IMAGE],
  },
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: Object.values(PROJECTS).map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: project.name,
    url: `${SITE_URL}${project.path}`,
  })),
}

const page = () => {
  return (
    <>
    <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }])} />
    <JsonLd data={itemListSchema} />
    <JsonLd data={faqSchema(projectsFaqData)} />
    <EnquiryBtn />
     <Hero />
     <ProjectSection />
     <Testimonials />
     <ProjectsFAQ />
    </>
  )
}

export default page
