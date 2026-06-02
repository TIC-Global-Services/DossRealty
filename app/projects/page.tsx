import Hero from '@/components/projects/Hero'
import KnowMore from '@/components/projects/KnowMore'
import ProjectSection from '@/components/projects/ProjectSection'
import Testimonials from '@/components/projects/Testimonials'
import React from 'react'

const page = () => {
  return (
    <>
     <Hero /> 
     <ProjectSection />
     <Testimonials />
     <KnowMore />
    </>
  )
}

export default page
