import type { Metadata } from "next";
import {
  PROMISE_PARK_PROJECT_LOCATION,
  PROMISE_PARK_LOCATION_DATA,
} from "@/data/locationData";
import PromiseParkFAQ from '@/components/projects/promise-park/PromiseParkFAQ'
import { promiseParkFaqData } from '@/data/faq'
import About from '@/components/projects/promise-park/About'
import DossEdge from '@/components/projects/promise-park/DossEdge'
import Gallery from '@/components/projects/promise-park/Gallery'
import Hero from '@/components/projects/promise-park/Hero'
import Highlights from '@/components/projects/promise-park/Highlights'
import LocationHighlights from '@/components/projects/promise-park/LocationHighlights'
import EnquiryBtn from '@/components/reusable/EnquiryBtn'
import ConnectedToChennai from '@/components/reusable/ConnectedToChennai'
import ConnectedToChennaiTitle from '@/components/projects/metropettai/ConnectedToChennaiTitle'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema, faqSchema, projectSchema } from '@/lib/seo/schema'
import { PROJECTS, SITE_URL } from '@/lib/seo/config'

const project = PROJECTS.promisePark;

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
      <JsonLd data={faqSchema(promiseParkFaqData)} />
      <EnquiryBtn />
      <Hero />
      <About />
      <DossEdge />
      <Highlights />
      <ConnectedToChennaiTitle />
      <ConnectedToChennai
        projectLocation={PROMISE_PARK_PROJECT_LOCATION}
        locationData={PROMISE_PARK_LOCATION_DATA}
      />
      <Gallery />
      <LocationHighlights />
      <PromiseParkFAQ />
    </>
  )
}

export default page
