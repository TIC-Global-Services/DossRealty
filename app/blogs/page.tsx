import type { Metadata } from 'next'
import KnowMoreBlogs from '@/components/about/KnowMoreBlogs'
import BlogsArticles from '@/components/blogs/BlogsArticles'
import Hero from '@/components/blogs/Hero'
import EnquiryBtn from '@/components/reusable/EnquiryBtn'
import React from 'react'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/seo/schema'
import { DEFAULT_OG_IMAGE, SITE_URL } from '@/lib/seo/config'
import { blogs } from '@/data/blogs'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on buying property in India, NRI real estate investment, Chennai infrastructure, and the craft behind Doss Realty developments.',
  alternates: { canonical: '/blogs' },
  openGraph: {
    title: 'Blog | Doss Realty',
    description: 'Insights on real estate, investment, and design from Doss Realty.',
    url: '/blogs',
    images: [DEFAULT_OG_IMAGE],
  },
}

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Doss Realty Blog',
  url: `${SITE_URL}/blogs`,
  blogPost: blogs.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    url: `${SITE_URL}/blogs/${post.slug}`,
  })),
}

const page = () => {
  return (
    <>
    <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blogs', path: '/blogs' }])} />
    <JsonLd data={blogListSchema} />
    <EnquiryBtn />
    <Hero />
    <BlogsArticles />
    <KnowMoreBlogs />
    </>
  )
}

export default page
