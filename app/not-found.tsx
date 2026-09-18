import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[85vh] w-full items-center justify-center bg-[#121212] px-6 text-center text-white">
      <div className="flex flex-col items-center">
        <span className="font-secondary text-sm uppercase tracking-[4px] text-[#B59A52]">
          Error 404
        </span>

        <h1 className="mt-4 font-heading text-[80px] leading-[0.9] tracking-[-0.05em] md:text-[140px]">
          Lost the Address
        </h1>

        <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-[#AFAFAF] md:text-[17px]">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back to a page built for you.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-[#B59A52] px-8 py-3 text-sm font-[500] text-[#121212] transition duration-300 hover:opacity-90"
          >
            Back to Home
          </Link>

          <Link
            href="/projects"
            className="rounded-full border border-[#B59A52]/40 px-8 py-3 text-sm font-[500] text-[#B59A52] transition duration-300 hover:bg-[#B59A52]/10"
          >
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
