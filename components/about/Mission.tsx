import Image from "next/image";

import missionImg from "@/assets/about/missionOutline.png";

const Mission = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">

        {/* TOP CONTENT */}
        <div className="mx-auto max-w-[900px] text-center">
          {/* Sub Heading */}
          <p
            className="
              mb-4
              text-[14px]
              uppercase
              tracking-[0.08em]
              text-[#00256A]
            "
          >
            Mission
          </p>

          {/* Heading */}
          <h2
            className="
              font-heading
              text-[34px]
              md:text-[58px]
              leading-[95%]
              tracking-[-0.04em]
              text-[#111111]
            "
          >
            Designed for Today, <br /> Built for Tomorrow
          </h2>
        </div>

        {/* IMAGE */}
        <div className="relative mt-12 overflow-hidden rounded-[28px] h-[350px] md:h-[550px]">
          <Image
            src={missionImg}
            alt="Mission"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;