"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[85vh] w-full items-center justify-center bg-[#121212] px-6 text-center text-white">
      <div className="flex flex-col items-center">
        <span className="font-secondary text-sm uppercase tracking-[4px] text-[#B59A52]">
          Something went wrong
        </span>

        <h1 className="mt-4 font-heading text-[56px] leading-[0.95] tracking-[-0.05em] md:text-[90px]">
          A Small Setback
        </h1>

        <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-[#AFAFAF] md:text-[17px]">
          An unexpected error occurred while loading this page. You can try
          again, or head back to a page that works.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => unstable_retry()}
            className="cursor-pointer rounded-full bg-[#B59A52] px-8 py-3 text-sm font-[500] text-[#121212] transition duration-300 hover:opacity-90"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-full border border-[#B59A52]/40 px-8 py-3 text-sm font-[500] text-[#B59A52] transition duration-300 hover:bg-[#B59A52]/10"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
