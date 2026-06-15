"use client";

import Image from "next/image";
import Link from "next/link";

import blogImg from "@/assets/blogs/articleImg1.jpg";
import rightArrow from '@/assets/blogs/rightArrow.png'

const blogs = [
  {
    id: "01",
    title:
      "A Simple Guide to Buying Your First Plot",
    image: blogImg,
    slug: "buying-your-first-plot",
  },
  {
    id: "02",
    title:
      "What To Check Before Buying a Property",
    slug:
      "check-before-buying-property",
  },
  {
    id: "03",
    title:
      "Understanding Property Documents Made Easy",
    slug:
      "property-documents-guide",
  },
  {
    id: "04",
    title:
      "Key Factors That Influence Property Appreciation",
    slug:
      "property-appreciation-factors",
  },
  {
    id: "05",
    title:
      "Why Plotted Developments Are a Smart Investment",
    slug:
      "plotted-developments-investment",
  },
  {
    id: "06",
    title:
      "How To Choose a Property with Long-Term Value",
    slug:
      "choose-property-long-term-value",
  },
];

export default function BlogsArticles() {
  return (
    <section className="pb-24">
      <div className="px-6 lg:px-12">
        {blogs.map(
          (blog, index) => (
            <div
              key={blog.id}
              className="
                border-t
                border-[#D9D9D9]
                py-8
                lg:py-10
              "
            >
              <div
                className="
                  grid
                  items-center
                  gap-10
                  lg:grid-cols-[1.4fr_1fr_180px]
                "
              >
                {/* Number + Title */}
                <div
                  className="
                    flex flex-col
                    items-start
                    gap-6
                    min-w-0
                  "
                >
                  {/* Number */}
                  <p
                    className="font-wide
                      shrink-0
                      text-[18px] md:leading-[20px]
                      italic
                      font-[900]
                      tracking-[-0.04em]
                      text-[#111111]
                    "
                  >
                    {blog.id}
                    <span className="font-light">
                      /
                    </span>
                  </p>

                  {/* Title */}
                  <h3
                    className="
                      max-w-[450px]
                      text-[18px]
                      md:text-[22px]
                      leading-[32px]
                      tracking-[0%]
                      text-[#000000]
                      font-[300]
                    "
                  >
                    {blog.title}
                  </h3>
                </div>

                {/* Image Column */}
                <div className="hidden lg:flex justify-center">
                  <div
                    className="
                      relative
                      h-[160px]
                      w-[250px]
                      overflow-hidden
                      rounded-[20px]
                      -rotate-6
                    "

                  >
                    {index === 0 &&
                      blog.image && (
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
                      )}
                  </div>
                </div>

                {/* Button */}
                <div className="flex lg:justify-end">
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-[#00256A]
                      px-8 text-[13.5px] md:leading-[18.9px]
                      py-4
                      font-medium
                      text-white
                      transition
                      duration-300
                      hover:scale-105
                    "
                  >
                    Read More

                    <Image
                      src={rightArrow}
                      alt="arrow"
                      width={18}
                      height={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </div>
              </div>
            </div>
          )
        )}

        {/* Bottom line */}
        <div className="border-t border-[#D9D9D9]" />
      </div>
    </section>
  );
}