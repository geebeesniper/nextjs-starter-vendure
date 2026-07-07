import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { getRouteLocale } from "@/i18n/server";
import { FeaturedProducts } from "@/components/commerce/featured-products";
import { SITE_NAME, SITE_URL, buildCanonicalUrl } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import { toOgLocale } from "@/i18n/locale-utils";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRouteLocale();
    const t = await getTranslations({ locale, namespace: "Home" });
    const ogLocale = toOgLocale(locale);

    return {
        title: {
            absolute: `${SITE_NAME} - ${t("pageTitle")}`,
        },
        description: t("description"),
        alternates: {
            canonical: buildCanonicalUrl("/"),
        },
        openGraph: {
            title: `${SITE_NAME} - ${t("pageTitle")}`,
            description: t("ogDescription"),
            type: "website",
            locale: ogLocale,
            url: SITE_URL,
        },
    };
}

const productCategories = [
    {
        title: "Commercial LED Grow Lights",
        description:
            "High-output lighting solutions for greenhouse, indoor cultivation, and vertical farming projects.",
    },
    {
        title: "Rolling Benches",
        description:
            "Space-saving bench systems designed for large-scale cultivation, nursery, and warehouse layouts.",
    },
    {
        title: "Under Canopy Lighting",
        description:
            "Supplemental lighting systems for lower canopy penetration, uniform coverage, and yield optimization.",
    },
];

const systemFeatures = [
    "B2B quote-ready storefront",
    "Custom product catalog",
    "Fast Next.js frontend",
    "Vendure headless commerce backend",
];

export default async function Home() {
    const locale = await getRouteLocale();

    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_30%)]" />

                <div className="relative container mx-auto px-4 py-24 md:py-32">
                    <div className="max-w-4xl">
                        <div className="mb-6 inline-flex rounded-full border border-green-400/40 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
                            Industrial B2B Ecommerce Demo
                        </div>

                        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
                            Build a serious commerce system, not just a pretty store.
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                            A custom Vendure + Next.js storefront for product catalogs,
                            quote requests, custom checkout flows, and scalable ecommerce
                            architecture.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href={`/${locale}/search`}
                                className="rounded-xl bg-green-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-green-300"
                            >
                                View Products
                            </Link>

                            <Link
                                href={`/${locale}/account`}
                                className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                Customer Account
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
                            Product Categories
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                            Built for configurable, quote-heavy products.
                        </h2>
                    </div>

                    <p className="max-w-xl text-sm leading-6 text-neutral-400">
                        This storefront is designed for products where customers need
                        sizing, quantity, layout, installation notes, custom shipping, or
                        sales follow-up before buying.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {productCategories.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-green-400/40"
                        >
                            <div className="mb-5 h-12 w-12 rounded-xl bg-green-400/15 ring-1 ring-green-400/30" />
                            <h3 className="text-xl font-semibold text-white">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-neutral-400">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="border-y border-white/10 bg-white/[0.03]">
                <div className="container mx-auto grid gap-10 px-4 py-16 lg:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
                            Architecture
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                            Frontend on Vercel. Backend on VPS. Database on Supabase.
                        </h2>

                        <p className="mt-5 text-neutral-300">
                            This is the clean structure: Vercel handles the fast storefront,
                            Vendure handles products, cart, orders, customers, and checkout,
                            and the database/storage stay separate.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
                        <div className="space-y-4 text-sm text-neutral-300">
                            <div className="flex justify-between border-b border-white/10 pb-3">
                                <span>Frontend</span>
                                <span className="text-white">Vercel / Next.js</span>
                            </div>

                            <div className="flex justify-between border-b border-white/10 pb-3">
                                <span>Commerce API</span>
                                <span className="text-white">Vendure Shop API</span>
                            </div>

                            <div className="flex justify-between border-b border-white/10 pb-3">
                                <span>Backend</span>
                                <span className="text-white">VPS / Docker</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Database</span>
                                <span className="text-white">Postgres / Supabase</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="mb-10">
                    <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
                        Featured Products
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                        Products from Vendure Shop API
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-400">
                        These products are loaded from the connected Vendure backend. Right
                        now, your Vercel frontend is probably reading from the Vendure demo
                        API.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 md:p-6">
                    <Suspense>
                        <FeaturedProducts />
                    </Suspense>
                </div>
            </section>

            <section className="container mx-auto px-4 pb-20">
                <div className="rounded-3xl border border-green-400/20 bg-green-400/10 p-8 md:p-10">
                    <h2 className="text-3xl font-bold text-white">
                        Ready for a custom quote workflow.
                    </h2>

                    <p className="mt-4 max-w-3xl text-neutral-300">
                        This layout can later be extended with request-a-quote forms,
                        custom product options, sales review, shipping estimates, and
                        customer-specific pricing.
                    </p>

                    <div className="mt-8 grid gap-3 md:grid-cols-2">
                        {systemFeatures.map((feature) => (
                            <div
                                key={feature}
                                className="rounded-xl bg-black/20 px-4 py-3 text-sm text-white"
                            >
                                ✓ {feature}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
