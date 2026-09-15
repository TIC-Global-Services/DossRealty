import ContactSection from '@/components/contact/ContactSection'
import Hero from '@/components/contact/Hero'
import Location from '@/components/contact/Location'
import PartnerSection from '@/components/contact/PartnerSection'
import ContactFAQ from '@/components/contact/ContactFAQ'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <ContactSection />
      <PartnerSection />
      <Location />
      <ContactFAQ />
    </>
  )
}

export default page
