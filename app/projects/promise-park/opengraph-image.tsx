import { ogImageContentType, ogImageSize, renderBrandOg } from "@/lib/seo/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const dynamic = "force-static";

export default async function Image() {
  return renderBrandOg({
    eyebrow: "Kanchipuram",
    title: "Promise Park",
    subtitle: "Plots from 443–2,348 sq.ft. · From ₹15L onwards · DTCP & RERA approved",
  });
}
