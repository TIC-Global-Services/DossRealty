"use client";

import Image from "next/image";
import Link from "next/link";

import blogImg from "@/assets/blogs/articleImg1.jpg";

const blogs = [
  {
    id: "01",
    title: "A Simple Guide to Buying Your First Plot",
    image: blogImg,
    slug: "buying-your-first-plot",
  },
  {
    id: "02",
    title: "What To Check Before Buying a Property",
    slug: "check-before-buying-property",
  },
  {
    id: "03",
    title: "Understanding Property Documents Made Easy",
    slug: "property-documents-guide",
  },
  {
    id: "04",
    title: "Key Factors That Influence Property Appreciation",
    slug: "property-appreciation-factors",
  },
  {
    id: "05",
    title: "Why Plotted Developments Are a Smart Investment",
    slug: "plotted-developments-investment",
  },
  {
    id: "06",
    title: "How To Choose a Property with Long-Term Value",
    slug: "choose-property-long-term-value",
  },
];

export default function BlogsArticles() {
  return (
    <section className="pb-24">
      <div className="px-6 lg:px-12">

        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className="
              border-t
              border-[#D9D9D9]
              py-8
              lg:py-12
            "
          >
            <div
              className="
                grid
                items-center
                gap-8
                lg:grid-cols-[90px_1fr_360px_160px]
              "
            >
              {/* Number */}
              <div className="self-start pt-3">
                <p
                  className="
                    text-[28px]
                    italic
                    font-semibold
                    tracking-[-0.04em]
                    text-[#111111]
                  "
                >
                  {blog.id}
                  <span className="font-light">/</span>
                </p>
              </div>

              {/* Title */}
              <div>
                <h3
                  className="
                    max-w-[280px]
                    text-[18px]
                    md:text-[22px]
                    leading-[140%]
                    tracking-[-0.02em]
                    text-[#111111]
                    font-normal
                  "
                >
                  {blog.title}
                </h3>
              </div>

              {/* Image only first row */}
              <div className="hidden lg:flex justify-center">
                {index === 0 && blog.image && (
                  <div
                    className="
                      relative
                      h-[160px]
                      w-[275px]
                      overflow-hidden
                      rounded-[26px]
                    "
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                    />
                  </div>
                )}
              </div>

              {/* Button */}
              <div className="flex justify-start lg:justify-end">
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#032B7A]
                    px-7
                    py-4
                    text-[13px]
                    font-medium
                    text-white
                    transition
                    duration-300
                    hover:scale-105
                  "
                >
                  Read More

                  <span className="text-[16px]">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom line */}
        <div className="border-t border-[#D9D9D9]" />
      </div>
    </section>
  );
}