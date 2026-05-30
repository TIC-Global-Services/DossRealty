"use client";

const DossOutline = () => {
  return (
    <div className="relative flex items-center justify-center w-full overflow-hidden pointer-events-none">
      <div className="relative w-[90vw] max-w-[1000px]">

        {/* DOSS text with image visible inside */}
        <div
          className="relative h-[220px] md:h-[280px] lg:h-[320px] w-full"
          style={{
            WebkitMaskImage: `
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 300'%3E%3Ctext x='50%25' y='58%25' dominant-baseline='middle' text-anchor='middle' font-size='240' font-family='Arial' font-weight='700'%3EDOSS%3C/text%3E%3C/svg%3E")
            `,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",
          }}
        >
          {/* Sky / house visible inside text */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#bfe7ff_0%,#ffffff_100%)]" />

          {/* subtle luxury shine */}
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.45)_50%,transparent_70%)] animate-[shine_4s_linear_infinite]" />
        </div>

        {/* Outline Stroke */}
        <svg
          viewBox="0 0 1200 300"
          className="absolute inset-0 h-full w-full"
        >
          <text
            x="50%"
            y="58%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="doss-outline"
          >
            DOSS
          </text>
        </svg>

        {/* Realty */}
        <p className="absolute left-1/2 top-[68%] -translate-x-1/2 text-[20px] md:text-[30px] tracking-[12px] text-[#5d4936] font-light">
          REALTY
        </p>
      </div>
    </div>
  );
};

export default DossOutline;