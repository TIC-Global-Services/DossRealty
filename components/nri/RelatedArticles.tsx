import Image from "next/image";
import Link from "next/link";

import article1 from "@/assets/nri/articleImg1.jpg";
import article2 from "@/assets/nri/articleImg2.jpg";
import article3 from "@/assets/nri/articleImg3.jpg";

const RelatedArticles = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-20 max-w-[1440px] px-5 md:px-8 lg:px-10">

        {/* Heading */}
        <h2
          className="
            font-heading
            text-[30px]
            md:text-[48px]
            leading-[95%]
            tracking-[-0.05em]
            text-[#111111]
          "
        >
          Related articles
        </h2>

        {/* Main Layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[48%_52%]">

          {/* LEFT FEATURED ARTICLE */}
          <Link
            href="/blogs/property-investment-india"
            className="group"
          >
            <div className="relative overflow-hidden rounded-[10px] md:rounded-[10px]">

              <Image
                src={article1}
                alt="Featured Article"
                className="
                  h-[500px]
                  md:h-[550px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Title */}
              <div className="absolute left-7 top-7 md:left-8 md:top-8 max-w-[360px]">
                <h3
                  className="
                    text-[18px]
                    md:text-[24px]
                    leading-[105%]
                    text-white
                  "
                >
                  A Complete Guide to NRI Property
                  Investment in India
                </h3>
              </div>

            </div>
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex flex-col">

            {/* TOP TWO ARTICLES */}
            <div className="grid gap-6 md:grid-cols-2">

              {/* ARTICLE 1 */}
              <Link
                href="/blogs/chennai-real-estate"
                className="group"
              >
                <div className="overflow-hidden rounded-[12px] md:rounded-[10px]">
                  <Image
                    src={article2}
                    alt=""
                    className="
                      h-[240px]
                      md:h-[300px]
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                <h3
                  className="
                    mt-4
                    text-[14px]
                    md:text-[20px]
                    leading-[115%]
                    text-[#111111]
                  "
                >
                  Key Benefits of Investing in
                  Chennai Real Estate for NRIs
                </h3>

                <p
                  className="
                    mt-3
                    text-[14px]
                    md:text-[16px]
                    leading-[150%]
                    text-[#6B6B6B]
                  "
                >
                  Explore why Chennai continues
                  to attract NRI investors through
                  strong infrastructure growth,
                  high rental demand, trusted
                  developments, and long-term
                  investment potential.
                </p>
              </Link>

              {/* ARTICLE 2 */}
              <Link
                href="/blogs/chennai-investment"
                className="group"
              >
                <div className="overflow-hidden rounded-[12px] md:rounded-[10px]">
                  <Image
                    src={article3}
                    alt=""
                    className="
                      h-[240px]
                      md:h-[300px]
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                <h3
                  className="
                    mt-4
                    text-[14px]
                    md:text-[20px]
                    leading-[115%]
                    text-[#111111]
                  "
                >
                  Key Benefits of Investing in
                  Chennai Real Estate for NRIs
                </h3>

                <p
                  className="
                    mt-3
                    text-[14px]
                    md:text-[16px]
                    leading-[150%]
                    text-[#6B6B6B]
                  "
                >
                  Explore why Chennai continues
                  to attract NRI investors through
                  strong infrastructure growth,
                  high rental demand, trusted
                  developments, and long-term
                  investment potential.
                </p>
              </Link>

            </div>

            {/* BUTTON */}
            <div className="mt-10 flex justify-end">
              <Link
                href="/blogs"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#00256A]
                  px-8
                  py-4
                  text-[15px]
                  text-white
                  transition
                  duration-300
                  hover:scale-105
                "
              >
                Browse all articles
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RelatedArticles;