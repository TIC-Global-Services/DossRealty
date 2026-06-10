import Image from "next/image";

import mapImg from "@/assets/contact/map.png"; 

const Location = () => {
  return (
    <section className="py-14 lg:py-16 ">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

        <div
          className="
            grid
            items-center
            gap-10
            rounded-[10px]
            lg:grid-cols-[58%_42%]
          "
        >
          {/* LEFT MAP */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[10px]
              h-[260px]
              md:h-[340px]
              lg:h-[380px]
            "
          >
            <Image
              src={mapImg}
              alt="Location Map"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-[420px]">

            <h2
              className="
                font-small
                text-[#111111]
                leading-[50px]
                tracking-[-1.44px]
                text-[32px]
                md:text-[48px]
              "
            >
              Everyday Access
              <br />
              Made Easy
            </h2>

            <p
              className="
                mt-5
                text-[#666666]
                text-[15px]
                md:text-[16px]
                leading-[20px]
                tracking-[-0.48px]
              "
            >
              Serene Grove Villas is located in a well-connected
              residential area with easy access to schools,
              healthcare, shopping destinations, business hubs,
              and major transport routes.
            </p>

            <button
              className="
                mt-8 font-small leading-[20px]
                rounded-full
                bg-[#002D80]
                px-8
                py-3
                text-white
                text-[16px]
                font-medium
                transition
                duration-300
                hover:scale-105
              "
            >
              View Location Map
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Location;