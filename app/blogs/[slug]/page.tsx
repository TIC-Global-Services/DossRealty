import { notFound } from "next/navigation";

import BuyingPropertyBlog from "@/components/blog-pages/ConsideredGuide";
import NRIBlog from "@/components/blog-pages/CompleteGuide";
import TamilNaduBlog from "@/components/blog-pages/TamilNadu";
import MetroExpansionBlog from "@/components/blog-pages/MetroExpansion";
import MetropettaiBlog from "@/components/blog-pages/MetropettaiBlog";
import DevelopmentBlog from "@/components/blog-pages/Development";
import CraftsmanshipBlog from "@/components/blog-pages/Craftsmanship";
import ArtisticEngineeringBlog from "@/components/blog-pages/ArtisticEngineering";
import MultigenerationalAssetBlog from "@/components/blog-pages/Multigenerational";

const blogPages = {
  "considered-guide-to-buying-property-in-india":
    BuyingPropertyBlog,

  "complete-guide-to-buying-property-in-india-as-an-nri":
    NRIBlog,

  "why-tamil-nadu-continues-to-attract-nri-real-estate-investment":
    TamilNaduBlog,

  "how-metro-expansion-is-reshaping-real-estate-value-in-chennai":
    MetroExpansionBlog,

  "metropettai-where-chennais-next-chapter-feels-closer":
    MetropettaiBlog,

  "the-details-that-make-a-development-feel-considered":
    DevelopmentBlog,

  "where-craftsmanship-meets-real-estate":
    CraftsmanshipBlog,

  "what-artistic-engineering-means-in-real-estate":
    ArtisticEngineeringBlog,

  "real-estate-as-a-multigenerational-asset":
    MultigenerationalAssetBlog,
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const BlogComponent =
    blogPages[slug as keyof typeof blogPages];

  if (!BlogComponent) {
    notFound();
  }

  return <BlogComponent />;
}