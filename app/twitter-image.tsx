import { ogImageContentType, ogImageSize, renderBrandOg } from "@/lib/seo/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;
export const dynamic = "force-static";

export default async function Image() {
  return renderBrandOg({
    title: "Build Beyond Ordinary",
    subtitle: "Real Estate Developers · Chennai, India · Since 1991",
  });
}
