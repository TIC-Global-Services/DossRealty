import KnowMore from '@/components/projects/KnowMore'
import About from '@/components/projects/metropettai/About'
import DossEdge from '@/components/projects/metropettai/DossEdge'
import Gallery from '@/components/projects/metropettai/Gallery'
import Hero from '@/components/projects/metropettai/Hero'
import Highlights from '@/components/projects/metropettai/Highlights'
import LocationHighlights from '@/components/projects/metropettai/LocationHighlights'
import EnquiryBtn from '@/components/reusable/EnquiryBtn'
import React from 'react'

const page = () => {
  return (
    <>
    <EnquiryBtn />
    <Hero />
    <About />
    <DossEdge />
    <Highlights />
    <Gallery />
    <LocationHighlights />
    <KnowMore />
    </>
  )
}

export default page
