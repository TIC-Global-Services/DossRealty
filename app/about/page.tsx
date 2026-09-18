import type { Metadata } from 'next'
import Builts from '@/components/about/Builts'
import Hero from '@/components/about/Hero'
import ImageLoop from '@/components/about/ImageLoop'
import AboutFAQ from '@/components/about/AboutFAQ'
import { aboutFaqData } from '@/data/faq'
import Leadership from '@/components/about/LeaderShip'
import Vission from '@/components/about/Vission'
import ShapeTheFuture from '@/components/about/ShapeTheFuture'
import StatsCounter from '@/components/about/StatsCounter'
import React from 'react'
import EnquiryBtn from '@/components/reusable/EnquiryBtn'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema, faqSchema } from '@/lib/seo/schema'
import { DEFAULT_OG_IMAGE } from '@/lib/seo/config'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Doss Realty has delivered over 5 million sq. ft. across 15+ developments since 1991. Learn about our founder, leadership, and Artistic Engineering approach to real estate in Chennai.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Doss Realty',
    description:
      'Three decades of judgement, discipline, and continuity behind every Doss Realty development.',
    url: '/about',
    images: [DEFAULT_OG_IMAGE],
  },
}

const page = () => {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])} />
      <JsonLd data={faqSchema(aboutFaqData)} />
      <EnquiryBtn />
      <Hero />
      <ShapeTheFuture />
      <Vission />
      <StatsCounter />
      <Builts />
      <Leadership />
      <ImageLoop />
      <AboutFAQ />
    </>
  )
}

export default page
