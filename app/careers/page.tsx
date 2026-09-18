import type { Metadata } from 'next'
import BuiltForLiving from '@/components/careers/BuiltForLiving'
import Hero from '@/components/careers/Hero'
import WhyWorkWithUs from '@/components/careers/WhyWorkWithUs'
import EnquiryBtn from '@/components/reusable/EnquiryBtn'
import React from 'react'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/seo/schema'
import { DEFAULT_OG_IMAGE } from '@/lib/seo/config'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Doss Realty and grow with a company driven by trust, innovation, and a long-term vision for creating meaningful developments across Chennai.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers at Doss Realty',
    description:
      'Great spaces are built by great people. Explore careers at Doss Realty.',
    url: '/careers',
    images: [DEFAULT_OG_IMAGE],
  },
}

const page = () => {
  return (
    <>
    <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Careers', path: '/careers' }])} />
    <EnquiryBtn />
    <Hero />
    <WhyWorkWithUs />
    <BuiltForLiving />
    </>
  )
}

export default page
