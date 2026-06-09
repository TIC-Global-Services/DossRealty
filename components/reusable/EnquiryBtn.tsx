"use client";

import Image from "next/image";
import shareIcon from '@/assets/home/shareIcon.png'
import whatsAppIcon from '@/assets/home/whatsappIcon.png'

export default function EnquiryBtn() {
  return (
    <div
      className="
        fixed
        -right-5
        bottom-5
        z-[10000]
        flex
        flex-col
        gap-3
      "
    >
      {/* WHATSAPP */}
      <a
        href="https://wa.me/918333033337"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          flex
          h-[42px]
          w-[75px]
          items-center
          justify-center
          rounded-full

          border border-white/20
          bg-[rgba(255,255,255,0.18)]

          backdrop-blur-[24px]
          shadow-[
            inset_0_1px_1px_rgba(255,255,255,0.35),
            0_8px_30px_rgba(0,0,0,0.12)
          ]

          transition-all
          duration-300
          hover:scale-105
          hover:bg-white/25
        "
      >
        <Image
           src={whatsAppIcon}
           alt="shareIcon"
           width={10}
           height={10}
           priority
           className="h-5 w-5 object-contain"
         />
      </a>

      {/* CALL */}
      <a
        href="tel:+918333033337"
        className="
          group
          flex
          h-[42px]
          w-[75px]
          items-center
          justify-center
          rounded-full

          border border-white/20
          bg-[rgba(255,255,255,0.18)]

          backdrop-blur-[24px]
          shadow-[
            inset_0_1px_1px_rgba(255,255,255,0.35),
            0_8px_30px_rgba(0,0,0,0.12)
          ]

          transition-all
          duration-300
          hover:scale-105
          hover:bg-white/25
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="black"
        >
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>

      {/* TELEGRAM */}
      <a
        href="https://t.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          flex
          h-[42px]
          w-[75px]
          items-center
          justify-center
          rounded-full

          border border-white/20
          bg-[rgba(255,255,255,0.18)]

          backdrop-blur-[24px]
          shadow-[
            inset_0_1px_1px_rgba(255,255,255,0.35),
            0_8px_30px_rgba(0,0,0,0.12)
          ]

          transition-all
          duration-300
          hover:scale-105
          hover:bg-white/25
        "
      >
        <Image
           src={shareIcon}
           alt="shareIcon"
           width={10}
           height={10}
           priority
           className="h-5 w-5 object-contain"
         />
      </a>
    </div>
  );
}