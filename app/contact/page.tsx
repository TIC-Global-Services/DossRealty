import ContactSection from '@/components/contact/ContactSection'
import Hero from '@/components/contact/Hero'
import Location from '@/components/contact/Location'
import PartnerSection from '@/components/contact/PartnerSection'
import KnowMore from '@/components/projects/KnowMore'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <ContactSection />
      <PartnerSection />
      <Location />
      <KnowMore />
    </>
  )
}

export default page
