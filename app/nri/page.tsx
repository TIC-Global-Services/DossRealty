import BuildTrust from '@/components/nri/BuildTrust'
import Hero from '@/components/nri/Hero'
import InvestmentDesk from '@/components/nri/InvestmentDesk'
import PropertyJourney from '@/components/nri/PropertyJourney'
import RelatedArticles from '@/components/nri/RelatedArticles'
import Subscription from '@/components/nri/Subscription'
import EnquiryBtn from '@/components/reusable/EnquiryBtn'
import React from 'react'

const page = () => {
  return (
    <>
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
