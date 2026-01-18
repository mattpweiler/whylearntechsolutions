import Link from "next/link";
import { Suspense } from "react";
import { ContactSection } from "@/components/ContactSection";

const productCategories = [
  {
    title: "Document AI Systems",
    description: "Searchable knowledge bases powered by your docs, data, and guardrails (retrieval-augmented generation, RAG).",
    points: ["Document pipelines + embeddings", "Access controls, audit trails, analytics", "Human-in-the-loop review"],
    href: "/consulting?projectType=rag-software#start",
  },
  {
    title: "SaaS Tools for Businesses",
    description: "Web apps, portals, and dashboards with production-grade UX and data models.",
    points: ["Client portals + internal CRMs", "Usage telemetry + billing ready", "Deployable to Vercel/Render"],
    href: "/consulting?projectType=saas-tools#start",
  },
  {
    title: "AI Integrations",
    description: "Embed LLMs into existing products and workflows without breaking reliability.",
    points: ["Orchestrations + eval harnesses", "Prompt governance + fallbacks", "Adapters for Zapier/Slack/API"],
    href: "/consulting?projectType=ai-integrations#start",
  },
  {
    title: "Customer-Facing Websites & Internal Systems",
    description: "Marketing sites and internal ops tools that stay fast, secure, and updatable.",
    points: ["Conversion-grade copy + UX", "CMS + role-based workflows", "Technical SEO baked in"],
    href: "/consulting?projectType=web-systems#start",
  },
  {
    title: "AI Prediction Engines",
    description: "Forecasting models for sports, finance, and analytics with clear performance tracking.",
    points: ["Data ingestion + feature stores", "Evaluation + model monitoring", "APIs and operator dashboards"],
    href: "/consulting?projectType=prediction-engines#start",
  },
];

const engagementModels = [
  {
    title: "Our Software Products",
    body: "Off-the-shelf SaaS, Document AI platforms (RAG), and prediction engines with onboarding, docs, and support. Perfect when you want a proven product fast.",
    links: [
      { label: "View products", href: "/apps" },
      { label: "Request demo", href: "/consulting?projectType=saas-tools#start" },
    ],
  },
  {
    title: "Custom Development & Consulting",
    body: "Productized engineering sprints for teams that need bespoke systems. We design, build, and ship with you—then keep iterating.",
    links: [
      { label: "Tech Consulting", href: "/consulting" },
      { label: "Start a project", href: "/consulting#start" },
    ],
  },
];

const principles = [
  { title: "Product-first", body: "We ship usable software—not decks. Expect clickable prototypes and working builds early." },
  { title: "Systems thinking", body: "Data flows, observability, and governance are designed up front so scaling is predictable." },
  { title: "Founder-led", body: "You work directly with Matt—full-stack engineer, AI systems builder, and operator." },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="overflow-hidden rounded-3xl bg-white px-6 py-12 shadow-2xl shadow-slate-200/60 md:px-10 md:py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">WhyLearnTech — AI Software Studio</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
          We build AI software products and custom systems that your team win.
        </h1>
        <p className="mt-4 max-w-3xl text-base text-slate-600">
          Document AI platforms (retrieval-augmented generation, RAG), SaaS tools, AI integrations, conversion-grade sites, and prediction engines—delivered as productized builds with
          clear timelines, observability, and handoff. Founder-led and technical from day one.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link
            href="/consulting#start"
            className="inline-flex items-center rounded-full bg-[#1f4ed8] px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-200/70 transition hover:-translate-y-0.5 hover:bg-[#1b44c2]"
          >
            Start a Project
          </Link>
          <Link
            href="/consulting"
            className="inline-flex items-center rounded-full border border-slate-900 px-6 py-2.5 font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            Explore Tech Consulting
          </Link>
          <Link
            href="/apps"
            className="inline-flex items-center rounded-full border border-slate-900 px-6 py-2.5 font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            View Software Products
          </Link>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Product lineup</p>
          <h2 className="text-2xl font-semibold text-slate-900">Select a product category</h2>
          <p className="max-w-3xl text-sm text-slate-600">
            Each card routes you to a pre-filled project form so we can jump straight into requirements and architecture.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/80 transition hover:-translate-y-2"
            >
              <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                {category.title}
              </div>
              <p className="mt-4 text-base font-semibold text-slate-900">{category.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {category.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-[#1f4ed8]">
                Start with {category.title}
                <svg
                  className="ml-2 h-4 w-4 transition group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white/90 p-8 md:grid-cols-2">
        {engagementModels.map((model) => (
          <div key={model.title} className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{model.title}</p>
              <p className="text-base text-slate-700">{model.body}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-slate-900">
              {model.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center rounded-full border border-slate-900 px-4 py-2 transition hover:-translate-y-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">How we operate</p>
            <h3 className="mt-1 text-2xl font-semibold text-slate-900">Delivery built for founders and operators</h3>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Every engagement includes architecture notes, observability, deployment scripts, and a handoff session so your team can own
              the system on day one.
            </p>
          </div>
          <Link
            href="/consulting#start"
            className="inline-flex items-center rounded-full bg-[#1f4ed8] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-200/70 transition hover:-translate-y-0.5 hover:bg-[#1b44c2]"
          >
            Start a Project
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h4 className="text-lg font-semibold text-slate-900">{principle.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{principle.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
