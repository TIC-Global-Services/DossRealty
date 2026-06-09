import Builts from '@/components/about/Builts'
import Hero from '@/components/about/Hero'
import ImageLoop from '@/components/about/ImageLoop'
import KnowMoreBlogs from '@/components/about/KnowMoreBlogs'
import Leadership from '@/components/about/LeaderShip'
import Vission from '@/components/about/Vission'
import ShapeTheFuture from '@/components/about/ShapeTheFuture'
import StatsCounter from '@/components/about/StatsCounter'
import React from 'react'
import EnquiryBtn from '@/components/reusable/EnquiryBtn'

const page = () => {
  return (
    <>
      <EnquiryBtn />
      <Hero />
      <ShapeTheFuture />
      <Vission />
      <StatsCounter />
      <Builts />
      <Leadership />
      <ImageLoop />\
      <KnowMoreBlogs />
    </>
  )
}

export default page
