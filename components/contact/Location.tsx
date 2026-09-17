"use client";

const Location = () => {
  return (
    <section className="py-8 lg:py-16">
      <div className="mx-auto px-6 lg:px-2">
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-center
            gap-10
            lg:gap-12
          "
        >
          {/* LEFT MAP */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[10px]
              w-full md:max-w-[500px]
              lg:max-w-[600px]
              h-[260px]
              md:h-[280px]
              lg:h-[300px]
              flex-shrink-0
              border
              border-[#EAEAEA]
            "
          >
            <iframe
              src="https://www.google.com/maps?q=13.0055639,80.1092389&z=15&output=embed"
              title="Doss Realty Location Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="md:max-w-[490px]
              lg:max-w-[420px]
              flex
              flex-col
              justify-center
              text-left
            "
          >
            <h2
              className="
                font-small
                text-[#111111]
                lg:leading-[1]
                lg:tracking-[-1.44px]
                text-[28px]
                leading-[36px]
                lg:text-[42px]
              "
            >
              Our Office
            </h2>

            <a
              href="https://maps.google.com/?q=13.0055639,80.1092389"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-start"
            >
              <button
                className="mt-4
                  lg:mt-8
                  rounded-full
                  bg-[#002D80]
                  px-6 py-2
                  lg:px-8
                  lg:py-3
                  text-white
                  text-[13px]
                  leading-[20px]
                  lg:text-[16px]
                  font-medium
                  transition
                  duration-300
                  hover:scale-105
                  cursor-pointer
                "
              >
                View Location Map
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;