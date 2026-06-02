import Image from "next/image";

import builtImg from "@/assets/about/builtsImg.jpg";
import PrimaryBtn from "../reusable/PrimaryBtn";

const Builts = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">

        {/* FULL IMAGE SECTION */}
        <div className="relative overflow-hidden rounded-[30px] h-[500px] md:h-[400px]">

          {/* Background Image */}
          <Image
            src={builtImg}
            alt="Built Spaces"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* CONTENT */}
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-end
              p-6
              md:p-10
              lg:p-16
            "
          >
            <div className="max-w-[500px] text-white">


              {/* Heading */}
              <h2
                className="
                  font-heading
                  text-[24px]
                  md:text-[30px]
                  leading-[95%]
                  tracking-[-0.04em]
                "
              >
                Built on Trust. <br /> Driven by Purpose.
              </h2>

              {/* Paragraph */}
              <p
                className="
                  mt-6
                  text-[15px]
                  md:text-[18px]
                  leading-[140%]
                  text-white/80
                "
              >
                Clients Built on Trust represents the strong relationships we’ve created through transparency, reliability, and consistent quality.
              </p>

              {/* Button */}
              <PrimaryBtn
                className="
                  mt-8
                  rounded-full
                  px-8
                  py-4
                  text-white
                  transition
                  duration-300
                  hover:scale-105
                "
              >
                Read More
              </PrimaryBtn>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Builts;