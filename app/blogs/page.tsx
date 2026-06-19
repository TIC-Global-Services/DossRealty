import KnowMoreBlogs from '@/components/about/KnowMoreBlogs'
import BlogsArticles from '@/components/blogs/BlogsArticles'
import Hero from '@/components/blogs/Hero'
import EnquiryBtn from '@/components/reusable/EnquiryBtn'
import React from 'react'

const page = () => {
  return (
    <>
    <EnquiryBtn />
    <Hero />     
    <BlogsArticles /> 
    <KnowMoreBlogs />
    </>
  )
}

export default page
