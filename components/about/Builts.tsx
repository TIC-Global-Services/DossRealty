import Image from "next/image";

import founderImg from "@/assets/about/FounderSample.webp";

const founder = {
  name: "D.V. Prathap Reddy",
  role: "Founder & Chairman",
  description: [
    "D.V. Prathap Reddy is the Founder and Chairman of Doss Realty. In 1991, he recognized the growing potential of Chennai's real estate market and established a business founded on transparency, reliability, and long-term value creation.",

    "Beginning with land development, he built a reputation for identifying opportunities and transforming them into thriving communities. Over the past three decades, Mr. Prathap has overseen the development of more than 5 million square feet and helped thousands of families realize their aspirations through real estate.",

    "Under his leadership, Doss Realty has evolved into a trusted name built on integrity, disciplined growth, and a commitment to delivering lasting value.",

    "Mr. Prathap also serves as a Board Member of Sri Ramakrishna Polytechnic College and supports a range of community and philanthropic initiatives, reflecting the values of stewardship and social responsibility that have guided his career.",

    "Today, he continues to guide the company’s strategic direction while upholding the principles that have defined its success since inception.",
  ],
};

const Builts = () => {
  return (
    <section data-theme="light" className="py-14 lg:py-20">
      <div className="mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* IMAGE */}
          <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] overflow-hidden rounded-[10px] bg-[#D9D9D9]">
            <Image
              src={founderImg}
              alt={founder.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* CONTENT */}
          <div className="text-[#1B2327]">
            <p className="text-[13px] lg:text-[15px] uppercase tracking-wider text-[#00256A] font-[500]">
              {founder.role}
            </p>

            <h2 className="mt-2 font-heading font-[300] text-[28px] leading-[34px] lg:text-[42px] lg:leading-[48px] text-[#1B2327]">
              {founder.name}
            </h2>

            <div className="mt-6 space-y-4">
              {founder.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[15px] lg:text-[17px] leading-[1.7] text-[#333333] font-[300]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Builts;
