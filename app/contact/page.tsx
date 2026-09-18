import type { Metadata } from 'next'
import ContactSection from '@/components/contact/ContactSection'
import Hero from '@/components/contact/Hero'
import Location from '@/components/contact/Location'
import PartnerSection from '@/components/contact/PartnerSection'
import ContactFAQ from '@/components/contact/ContactFAQ'
import { contactFaqData } from '@/data/faq'
import React from 'react'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema, faqSchema } from '@/lib/seo/schema'
import { CONTACT, DEFAULT_OG_IMAGE } from '@/lib/seo/config'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with Doss Realty in Chennai. Call ${CONTACT.phone}, email ${CONTACT.email}, or schedule a site visit to any active development.`,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Doss Realty',
    description: 'Schedule a site visit or reach our team for project enquiries, financing, and referrals.',
    url: '/contact',
    images: [DEFAULT_OG_IMAGE],
  },
}

const page = () => {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
      <JsonLd data={faqSchema(contactFaqData)} />
      <Hero />
      <ContactSection />
      <PartnerSection />
      <Location />
      <ContactFAQ />
    </>
  )
}

export default page
