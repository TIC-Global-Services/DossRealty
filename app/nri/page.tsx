import type { Metadata } from 'next'
import BuildTrust from '@/components/nri/BuildTrust'
import Hero from '@/components/nri/Hero'
import InvestmentDesk from '@/components/nri/InvestmentDesk'
import PropertyJourney from '@/components/nri/PropertyJourney'
import RelatedArticles from '@/components/nri/RelatedArticles'
import Subscription from '@/components/nri/Subscription'
import EnquiryBtn from '@/components/reusable/EnquiryBtn'
import React from 'react'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/seo/schema'
import { DEFAULT_OG_IMAGE } from '@/lib/seo/config'

export const metadata: Metadata = {
  title: 'NRI Real Estate Investment',
  description:
    'A dedicated NRI desk for buyers investing in Tamil Nadu real estate from abroad — guidance on the property journey, trust, and financing.',
  alternates: { canonical: '/nri' },
  openGraph: {
    title: 'NRI Real Estate Investment | Doss Realty',
    description:
      'Guidance for NRIs investing in Chennai and Tamil Nadu real estate with Doss Realty.',
    url: '/nri',
    images: [DEFAULT_OG_IMAGE],
  },
}

const page = () => {
  return (
    <>
    <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'NRI', path: '/nri' }])} />
    <EnquiryBtn />
      <Hero />
      <InvestmentDesk />
      <PropertyJourney />
      <BuildTrust />
      <RelatedArticles />
      <Subscription />
    </>
  )
}

export default page
