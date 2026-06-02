import Builts from '@/components/about/Builts'
import Hero from '@/components/about/Hero'
import ImageLoop from '@/components/about/ImageLoop'
import KnowMoreBlogs from '@/components/about/KnowMoreBlogs'
import Leadership from '@/components/about/LeaderShip'
import Mission from '@/components/about/Mission'
import ShapeTheFuture from '@/components/about/ShapeTheFuture'
import StatsCounter from '@/components/about/StatsCounter'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <ShapeTheFuture />
      <Mission />
      <StatsCounter />
      <Builts />
      <Leadership />
      <ImageLoop />\
      <KnowMoreBlogs />
    </>
  )
}

export default page
