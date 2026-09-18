import { ogImageContentType, ogImageSize, renderBrandOg } from "@/lib/seo/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const dynamic = "force-static";

export default async function Image() {
  return renderBrandOg({
    eyebrow: "Poonamallee, Chennai",
    title: "Metropettai",
    subtitle: "Plots from 711–2,400 sq.ft. · From ₹45L onwards · CMDA & RERA approved",
  });
}
