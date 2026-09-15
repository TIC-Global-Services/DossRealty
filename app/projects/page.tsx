import Hero from '@/components/projects/Hero'
import ProjectsFAQ from '@/components/projects/ProjectsFAQ'
import ProjectSection from '@/components/projects/ProjectSection'
import Testimonials from '@/components/projects/Testimonials'
import EnquiryBtn from '@/components/reusable/EnquiryBtn'
import React from 'react'

const page = () => {
  return (
    <>
    <EnquiryBtn />
     <Hero /> 
     <ProjectSection />
     <Testimonials />
     <ProjectsFAQ />
    </>
  )
}

export default page
