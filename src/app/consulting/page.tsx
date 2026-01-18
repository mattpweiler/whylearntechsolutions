import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

const consultingCategories = [
  {
    title: "Document AI Systems",
    who: "Support, ops, and research teams sitting on piles of docs, PDFs, and knowledge bases.",
    problem: "Make institutional knowledge searchable and safe with guardrails, observability, and human review (retrieval-augmented generation, RAG).",
    implementations: [
      "Document pipelines + embeddings with access control",
      "Evaluator harness to monitor drift and hallucinations",
      "User analytics, feedback loops, and exportable insights",
    ],
    timeline: "4–8 weeks · productized build + optional ongoing optimization",
    range: "$2,000 – $18,000+",
    costDrivers: ["Document volume + sensitivity", "Eval depth and human review", "Custom UI/UX + access control", "Deployment environment + compliance"],
    href: "/consulting?projectType=rag-software#start",
  },
  {
    title: "SaaS Tools for Businesses",
    who: "Founders and teams who need a client portal, dashboard, or internal system that can scale.",
    problem: "Ship a production-grade product with auth, roles, billing, and telemetry without a giant team.",
    implementations: ["Next.js apps with clean architecture and CMS hooks", "Role-based access + audit trails", "Usage metering, billing hooks, and operator dashboards"],
    timeline: "4–10 weeks · phased MVP to V1 delivery",
    range: "$10,000 – $35,000+",
    costDrivers: ["Role complexity + permissions", "Billing, subscriptions, metering", "Integrations (payments, CRM, analytics)", "Observability + support expectations"],
    href: "/consulting?projectType=saas-tools#start",
  },
  {
    title: "AI Integrations",
    who: "Product teams layering AI onto an existing product and need reliability, not just prompts.",
    problem: "Embed LLMs without breaking UX or trust—add guardrails, evaluations, and fallbacks.",
    implementations: ["Workflow orchestrations with retries/fallbacks", "Prompt governance + evals for quality", "Adapters for Slack/Zapier/API to meet users where they are"],
    timeline: "3–6 weeks · integration sprints with ongoing evals",
    range: "$4,000 – $15,000+",
    costDrivers: ["Number of workflows + automations", "Evaluation and guardrail requirements", "Legacy stack integration effort", "Change management + rollout support"],
    href: "/consulting?projectType=ai-integrations#start",
  },
  {
    title: "Customer-Facing Websites & Internal Systems",
    who: "Companies needing a conversion-grade site plus the internal tools to support it.",
    problem: "Modern, fast marketing sites paired with CRM/workflow tooling so leads are captured and routed.",
    implementations: ["High-performing marketing pages with SEO baked in", "Lead routing + CRM integrations", "Internal ops dashboards and data syncing"],
    timeline: "2–6 weeks · launch then iterate",
    range: "$5,000 – $20,000+",
    costDrivers: ["Data sources + ETL complexity", "Role-based access + approvals", "Dashboard depth + visualizations", "Admin tooling + training"],
    href: "/consulting?projectType=web-systems#start",
  },
  {
    title: "AI Prediction Engines",
    who: "Teams in sports, finance, or analytics who want reproducible forecasting with clear metrics.",
    problem: "Stand up data ingestion, feature stores, and model monitoring with transparent ROI tracking.",
    implementations: ["Pipelines for ingest/clean/feature generation", "Model evaluation dashboards + alerting", "APIs + UI for operators and stakeholders"],
    timeline: "6–12 weeks · experimentation to stable release",
    range: "$10,000 – $35,000+",
    costDrivers: ["Data ingestion + feature store design", "Model complexity + evaluation cadence", "Automation, alerts, and operator UI", "Performance and latency targets"],
    href: "/consulting?projectType=prediction-engines#start",
  },
];

const engagement = [
  {
    title: "Discovery + Architecture",
    body: "1–2 weeks. Product requirements, data mapping, risks, and a build plan you can hand to any engineer.",
    cta: "Book technical call",
    href: "/consulting?projectType=advisory#start",
  },
  {
    title: "Build Sprints",
    body: "2–6 week sprints. We design, build, and ship in production with weekly demos and async updates.",
    cta: "Request proposal",
    href: "/consulting#start",
  },
  {
    title: "Stabilize + Scale",
    body: "Post-launch instrumentation, evals, and backlog execution. Hand-off with training or retainers available.",
    cta: "Plan the rollout",
    href: "/consulting?projectType=saas-tools#start",
  },
];

export default function ConsultingPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-slate-200 bg-white/90 px-8 py-12">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Tech Consulting</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Productized engineering for AI systems and modern software.</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-600">
          WhyLearnTech pairs software products with tailored builds. You get direct access to Matt W — full-stack engineer and AI
          systems builder—to design, ship, and operationalize the software you need.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href="#start"
            className="inline-flex items-center rounded-full bg-[#1f4ed8] px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-200/70 transition hover:-translate-y-0.5 hover:bg-[#1b44c2]"
          >
            Request Proposal
          </Link>
          <Link
            href="https://cal.com/whylearntech/software-consult"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-900 px-6 py-2.5 font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            Book Technical Call
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Productized offerings</p>
            <h2 className="text-2xl font-semibold text-slate-900">Choose the playbook that fits your build</h2>
            <p className="text-sm text-slate-600">
              Clear scope, timelines, and ownership. Each category is backed by reusable components, infra patterns, and deployment guides.
            </p>
          </div>
          <Link
            href="#start"
            className="inline-flex items-center rounded-full border border-slate-900 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            Start a Project
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {consultingCategories.map((category) => (
            <div key={category.title} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm shadow-slate-200/80">
              <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500">
                {category.title}
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-900">Who it&apos;s for</p>
              <p className="text-sm text-slate-600">{category.who}</p>
              <p className="mt-3 text-sm font-semibold text-slate-900">What problem it solves</p>
              <p className="text-sm text-slate-600">{category.problem}</p>
              <p className="mt-3 text-sm font-semibold text-slate-900">Example implementations</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {category.implementations.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 grid gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                <div className="font-semibold">Typical timeline &amp; engagement</div>
                <div>{category.timeline}</div>
              </div>
              <div className="mt-3 grid gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                <div className="font-semibold text-slate-900">Typical range</div>
                <div className="text-sm font-semibold text-slate-800">{category.range}</div>
                <p className="text-xs text-slate-500">Final pricing varies by scope, data, security, integrations, and timeline.</p>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Key cost drivers</div>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  {category.costDrivers.map((driver) => (
                    <li key={driver} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{driver}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={category.href}
                className="mt-4 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5"
              >
                Start this project
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white/90 p-8 md:grid-cols-3">
        {engagement.map((item) => (
          <div key={item.title} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.title}</p>
            <p className="mt-3 text-sm text-slate-700">{item.body}</p>
            <Link
              href={item.href}
              className="mt-5 inline-flex items-center text-sm font-semibold text-[#1f4ed8] transition hover:translate-x-1"
            >
              {item.cta} →
            </Link>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">How pricing works</p>
          <h3 className="text-2xl font-semibold text-slate-900">Custom-scoped, transparent, and flexible</h3>
          <p className="text-sm text-slate-600">
            Every project is scoped after discovery. Ranges are directional; actual pricing depends on data volume/sensitivity, security and
            compliance, integrations, UX complexity, timeline, and ongoing support. Pricing is highly flexible based on project complexity.
          </p>
          <ul className="grid gap-2 text-sm text-slate-600 md:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              <span>Data landscape: volume, cleanliness, sensitivity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              <span>Security, compliance, and governance requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              <span>Integrations, automations, and legacy systems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              <span>UX complexity, roles, and analytics/observability needs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              <span>Timelines, delivery model, and post-launch support</span>
            </li>
          </ul>
          <p className="text-sm text-slate-600">We keep builds lean, measurable, and production-ready while staying premium and accessible.</p>
        </div>
      </section>

      <ContactSection
        id="start"
        eyebrow="Project intake"
        title="Tell us what to build"
        description="Include context on data sources, users, and deadlines. We respond with scope, architecture notes, and options to get started."
        ctaLabel="Request Proposal"
      />
    </div>
  );
}
