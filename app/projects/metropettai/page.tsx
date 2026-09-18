import type { Metadata } from "next";
import {
  PROJECT_LOCATION,
  LOCATION_DATA,
} from "@/data/locationData";

import MetropettaiFAQ from '@/components/projects/metropettai/MetropettaiFAQ'
import { metropettaiFaqData } from '@/data/faq'
import About from '@/components/projects/metropettai/About'
import DossEdge from '@/components/projects/metropettai/DossEdge'
import Gallery from '@/components/projects/metropettai/Gallery'
import Hero from '@/components/projects/metropettai/Hero'
import Highlights from '@/components/projects/metropettai/Highlights'
import LocationHighlights from '@/components/projects/metropettai/LocationHighlights'
import EnquiryBtn from '@/components/reusable/EnquiryBtn'
import ConnectedToChennai from '@/components/reusable/ConnectedToChennai'
import ConnectedToChennaiTitle from '@/components/projects/metropettai/ConnectedToChennaiTitle'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema, faqSchema, projectSchema } from '@/lib/seo/schema'
import { PROJECTS, SITE_URL } from '@/lib/seo/config'

const project = PROJECTS.metropettai;

export const metadata: Metadata = {
  title: `${project.name} — Plots in ${project.locality}`,
  description: project.description,
  alternates: { canonical: project.path },
  openGraph: {
    title: `${project.name} | Doss Realty`,
    description: project.description,
    url: project.path,
  },
};

const page = () => {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
          { name: project.name, path: project.path },
        ])}
      />
      <JsonLd data={projectSchema({ ...project, image: `${SITE_URL}${project.path}/opengraph-image` })} />
      <JsonLd data={faqSchema(metropettaiFaqData)} />
      <EnquiryBtn />
      <Hero />
      <About />
      <DossEdge />
      <Highlights />
      <ConnectedToChennaiTitle />
      <ConnectedToChennai
        projectLocation={PROJECT_LOCATION}
        locationData={LOCATION_DATA}
      />
      <Gallery />
      <LocationHighlights />
      <MetropettaiFAQ />
    </>
  )
}

export default page
