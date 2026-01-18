"use client";

import Link from "next/link";
import { Suspense, useMemo, useState } from "react";
import { ContactSection } from "@/components/ContactSection";
import { PricingRangeCard } from "@/components/PricingRangeCard";

const heroMetrics = [
  { label: "Users", value: "50+ paying subscribers" },
  { label: "Revenue", value: "Bootstrapped subscription revenue" },
  { label: "Growth", value: "Weekly product releases" },
  { label: "Stack", value: "Next.js, Tailwind, Supabase, Stripe" },
];

const productCards = [
  {
    name: "WhyLearnVision.com",
    description: "Personal finance + life operating system SaaS with dashboards, workflows, and coaching loops.",
    category: "SaaS Platform",
    status: "Live",
    stack: ["Next.js", "Supabase", "Stripe", "Tailwind"],
    href: "https://whylearnvision.com",
    filters: ["saas"],
  },
  {
    name: "GreenGPTAdvisory.com",
    description: "Enterprise document AI platform (retrieval-augmented generation, RAG) for document intelligence and advisory workflows.",
    category: "Enterprise Document AI Platform",
    status: "Live",
    stack: ["Next.js", "Postgres", "OpenAI", "Pinecone"],
    href: "https://greengptadvisory.com",
    filters: ["rag", "ai"],
  },
  {
    name: "LearningToReadIsFun.com",
    description: "Tutoring scheduling and student management web app with parent/teacher portals.",
    category: "Education SaaS",
    status: "Live",
    stack: ["Next.js", "Supabase", "SendGrid"],
    href: "https://learningtoreadisfun.com",
    filters: ["saas", "education"],
  },
  {
    name: "Scott Street Software",
    description: "Custom internal operations platform for a construction firm (subcontracted), including an Email AI agent that parses inbox threads and updates the owner’s calendar automatically.",
    category: "Internal Business Systems",
    status: "Internal",
    stack: ["Next.js", "Node", "Postgres"],
    href: "#",
    filters: ["internal"],
  },
  {
    name: "Health Tracking SaaS",
    description: "Product modernization with AI feature expansion for a healthtech platform.",
    category: "HealthTech Platform",
    status: "In Development",
    stack: ["Next.js", "Python", "LangChain", "Supabase"],
    href: "#",
    filters: ["health", "saas"],
  },
  {
    name: "AI Sports Prediction Engine",
    description: "Forecasting engine with ingest, feature pipelines, and operator UI.",
    category: "AI Analytics & Prediction Systems",
    status: "Live",
    stack: ["Next.js", "Python", "Postgres", "Vercel"],
    href: "https://ai-sports-pick-generator.vercel.app/",
    filters: ["ai"],
  },
];

const filterOptions = [
  { label: "All", value: "all" },
  { label: "SaaS", value: "saas" },
  { label: "Document AI", value: "rag" },
  { label: "AI / Prediction", value: "ai" },
  { label: "Internal Tools", value: "internal" },
  { label: "Education", value: "education" },
  { label: "Health", value: "health" },
];

const offeringCategories = [
  {
    title: "Document AI Systems",
    body: "Document intelligence, retrieval, and analytics with access controls, evals, and reviewer workflows (RAG).",
    href: "/consulting?projectType=rag-software#start",
  },
  {
    title: "SaaS Platforms",
    body: "Subscription products with auth, billing, dashboards, and telemetry baked in from day one.",
    href: "/consulting?projectType=saas-tools#start",
  },
  {
    title: "AI Analytics Engines",
    body: "Prediction and scoring engines with ingest, feature stores, and operator dashboards.",
    href: "/consulting?projectType=prediction-engines#start",
  },
  {
    title: "Internal Business Tools",
    body: "Ops platforms, CRMs, and workflow automation to keep teams aligned and accountable.",
    href: "/consulting?projectType=web-systems#start",
  },
  {
    title: "Client Portals",
    body: "Role-based portals with messaging, file handling, and status tracking tailored to your customers.",
    href: "/consulting?projectType=saas-tools#start",
  },
];

const pricingRanges = [
  {
    title: "Document AI Systems",
    range: "$2,000 – $18,000+",
    factors: ["Document volume and data sensitivity", "Eval harness depth and human review needs", "Custom UI/UX and access control", "Deployment environment and compliance"],
    href: "/consulting?projectType=rag-software#start",
  },
  {
    title: "Custom SaaS Platforms",
    range: "$10,000 – $35,000+",
    factors: ["Role complexity and permissions", "Billing, subscriptions, and metering", "Integrations (payments, CRM, analytics)", "Observability, SLAs, and handoff support"],
    href: "/consulting?projectType=saas-tools#start",
  },
  {
    title: "AI Integrations",
    range: "$4,000 – $15,000+",
    factors: ["Number of workflows and automations", "Evaluation and guardrail requirements", "Legacy stack integration effort", "Change management and rollout support"],
    href: "/consulting?projectType=ai-integrations#start",
  },
  {
    title: "Internal Business Tools & Dashboards",
    range: "$5,000 – $20,000+",
    factors: ["Data sources and ETL complexity", "Role-based access and approvals", "Dashboard depth and visualization needs", "Admin tooling and training"],
    href: "/consulting?projectType=web-systems#start",
  },
  {
    title: "AI Prediction & Analytics Engines",
    range: "$10,000 – $35,000+",
    factors: ["Data ingestion + feature store design", "Model complexity and evaluation cadence", "Automation, alerts, and operator UI", "Performance and latency targets"],
    href: "/consulting?projectType=prediction-engines#start",
  },
];

function Badge({ children }: { children: string }) {
  return <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">{children}</span>;
}

export default function AppsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return productCards;
    return productCards.filter((product) => product.filters.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="space-y-12">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 px-8 py-12 shadow-xl shadow-slate-200/60">
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Our Software Products</p>
            <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">WhyLearnVision is our flagship SaaS.</h1>
            <p className="text-base text-slate-600">
              Personal finance + life operating system designed for operators who want clarity on cash, habits, and decisions. Built by the
              same studio that ships document AI (RAG) systems, analytics engines, and internal tools for clients.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href="https://whylearnvision.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-[#1f4ed8] px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-200/70 transition hover:-translate-y-0.5 hover:bg-[#1b44c2]"
              >
                Try the App
              </Link>
              <Link
                href="https://whylearnvision.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-slate-900 px-6 py-2.5 font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                View Demo
              </Link>
              <Link
                href="/consulting?projectType=saas-tools#start"
                className="inline-flex items-center rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-slate-600 underline-offset-4 hover:underline"
              >
                Build this for my business
              </Link>
            </div>
          </div>
          <div className="grid gap-3 rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-lg shadow-slate-200/80">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Proof & Metrics</p>
            <div className="grid gap-3 md:grid-cols-2">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">{metric.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Production Systems We&apos;ve Built</p>
            <h2 className="text-2xl font-semibold text-slate-900">Proof across SaaS, AI, and internal platforms</h2>
            <p className="text-sm text-slate-600">Filter by type to see examples closest to your build.</p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`rounded-full border px-3 py-1 transition duration-200 ${
                  activeFilter === option.value
                    ? "border-slate-900 bg-slate-900 text-white shadow-md shadow-slate-300/50"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:-translate-y-0.5 hover:border-slate-300"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.name}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm shadow-slate-200 transition duration-200 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-slate-900">{product.name}</p>
                  <p className="text-sm text-slate-600">{product.description}</p>
                </div>
                <Badge>{product.status}</Badge>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>{product.category}</Badge>
                {product.filters.map((filter) => (
                  <span key={filter} className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    {filter === "ai"
                      ? "AI"
                      : filter === "rag"
                        ? "Document AI"
                        : filter === "saas"
                          ? "SaaS"
                          : filter === "internal"
                            ? "Internal"
                            : filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-slate-600">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <Link
                  href={product.href}
                  target={product.href.startsWith("http") ? "_blank" : undefined}
                  rel={product.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center text-sm font-semibold text-[#1f4ed8] transition hover:translate-x-1"
                >
                  {product.href === "#" ? "Case study on request" : "Open product"} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg shadow-slate-200/70">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">These are examples of what we build</p>
          <h3 className="text-2xl font-semibold text-slate-900">Choose the category that matches your product</h3>
          <p className="max-w-3xl text-sm text-slate-600">
            Each engagement is productized: clear scope, timeline, and deployment. Use these products as templates or starting points for
            your build.
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {offeringCategories.map((category) => (
            <div key={category.title} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm shadow-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <p className="text-lg font-semibold text-slate-900">{category.title}</p>
              <p className="mt-2 text-sm text-slate-600">{category.body}</p>
              <Link
                href={category.href}
                className="mt-4 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5"
              >
                Build this for my business
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Typical project ranges</p>
          <h3 className="text-2xl font-semibold text-slate-900">Premium builds with scoped flexibility</h3>
          <p className="max-w-3xl text-sm text-slate-600">
            Most engagements land in these ranges; final pricing depends on scope, data, integrations, security, and timelines. Pricing is
            highly flexible based on project complexity. We keep projects lean, measurable, and production-ready.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pricingRanges.map((item) => (
            <PricingRangeCard key={item.title} title={item.title} range={item.range} factors={item.factors} href={item.href} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Conversion layer</p>
          <h3 className="text-2xl font-semibold text-slate-900">Ready to ship something similar?</h3>
          <p className="max-w-3xl text-sm text-slate-600">
            Tell us which product inspires your build. We&apos;ll respond with architecture notes, timelines, and a productized engagement
            plan.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link
            href="/consulting?projectType=saas-tools#start"
            className="inline-flex items-center rounded-full bg-[#1f4ed8] px-5 py-2 font-semibold text-white shadow-lg shadow-blue-200/70 transition hover:-translate-y-0.5 hover:bg-[#1b44c2]"
          >
            Start a SaaS build
          </Link>
          <Link
            href="/consulting?projectType=rag-software#start"
            className="inline-flex items-center rounded-full border border-slate-900 px-5 py-2 font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            Build a document AI system
          </Link>
          <Link
            href="/consulting?projectType=prediction-engines#start"
            className="inline-flex items-center rounded-full border border-slate-200 px-5 py-2 font-semibold text-slate-700 transition hover:-translate-y-0.5"
          >
            Launch an AI prediction engine
          </Link>
        </div>
      </section>

      <Suspense fallback={null}>
        <ContactSection
          eyebrow="Get access"
          title="Tell us what product you need"
          description="If you want a demo, sandbox access, or a tailored implementation, share your data sources and target outcomes."
          ctaLabel="Request Access"
        />
      </Suspense>
    </div>
  );
}
