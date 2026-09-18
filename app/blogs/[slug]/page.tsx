import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, blogPostingSchema } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/config";
import { blogs } from "@/data/blogs";
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

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(blogPages).map((slug) => ({ slug }));
}

function findPost(slug: string) {
  return blogs.find((post) => post.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    return { title: "Blog" };
  }

  const description = `${post.title} — insights from Doss Realty on real estate, investment, and design.`;

  return {
    title: post.title,
    description,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      title: post.title,
      description,
      url: `/blogs/${post.slug}`,
      type: "article",
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const BlogComponent =
    blogPages[slug as keyof typeof blogPages];

  if (!BlogComponent) {
    notFound();
  }

  const post = findPost(slug);

  return (
    <>
      {post ? (
        <>
          <JsonLd
            data={breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blogs", path: "/blogs" },
              { name: post.title, path: `/blogs/${post.slug}` },
            ])}
          />
          <JsonLd
            data={blogPostingSchema({
              title: post.title,
              description: `${post.title} — insights from Doss Realty on real estate, investment, and design.`,
              path: `/blogs/${post.slug}`,
            })}
          />
        </>
      ) : null}
      <BlogComponent />
    </>
  );
}