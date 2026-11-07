import Link from "next/link";
import { notFound } from "next/navigation";
import { NICHES } from "../../../lib/niches";
import { SITE, wa } from "../../../lib/site";

export const generateStaticParams = () =>
  NICHES.map((n) => ({ slug: n.slug }));

const find = async (params) => {
  const { slug } = await params;
  return NICHES.find((n) => n.slug === slug);
};

export async function generateMetadata({ params }) {
  const n = await find(params);

  if (!n) return {};

  return {
    title: n.h1,
    description: n.intro,
    alternates: {
      canonical: `/niches/${n.slug}`,
    },
  };
}

export default async function Niche({ params }) {
  const n = await find(params);

  if (!n) {
    notFound();
  }

  const faq = [n.q, ...SITE.faq.slice(0, 2)];

  const ld