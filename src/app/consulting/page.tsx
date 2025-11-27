import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";

const serviceHighlights = [
  {
    title: "Custom Software",
    body: "Next.js dashboards, client portals, and web apps built with clean architecture.",
  },
  {
    title: "AI + GPT Systems",
    body: "Private GPTs, embeddings, and RAG workflows to augment your team’s expertise.",
  },
  {
    title: "Websites & Microsites",
    body: "Minimal, fast marketing sites with copy, strategy, and lead capture built in.",
  },
];

const pricing = [
  {
    title: "Implementation Partnerships",
    price: "Flexible budgets",
    body: "We match the build to your stage—whether that’s a lean MVP, a phased rollout, or ongoing improvements.",
    details: ["Scope aligned to your runway", "Transparent timelines + pricing", "Async updates + post-launch support"],
  },
  {
    title: "Strategy Intensive (optional)",
    price: "$120",
    body: "A 60-minute call to audit your idea, answer questions, and hand you a roadmap before we build.",
    details: ["Full Plan an Next Steps to Move Forward with Your Project", "Stack recommendations", "Prioritized next steps"],
  },
];

const processSteps = ["Discovery", "Plan", "Build", "Launch", "Support"];

export default function ConsultingPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-slate-200 bg-white/90 px-8 py-12">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Software Consulting</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Strategy, design, and builds for custom teams.</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-600">
          I work with founders, creators, and operators who want custom software that actually ships. From RAG-powered assistants to
          lean SaaS dashboards, we&apos;ll scope what matters, plan clearly, and build quickly.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#1f4ed8] px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-200/70 transition hover:-translate-y-0.5 hover:bg-[#1b44c2]"
          >
            Tell me about your project
          </Link>
          <Link
            href="https://cal.com/whylearntech/60mins"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-900 px-6 py-2.5 font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            Optional strategy call ($120)
          </Link>
        </div>
      </section>

      <div className="-mt-6">
        <ContactSection />
      </div>

      <section className="grid gap-6 md:grid-cols-3">
        {serviceHighlights.map((service) => (
          <div key={service.title} className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200/80">
            <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{service.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Proof</p>
        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">See what I&apos;ve built already</h2>
            <p className="text-sm text-slate-600">
              Insurance apps for Fortune 500s and scrappy indie launches—here&apos;s the portfolio.
            </p>
          </div>
          <Link
            href="/built"
            className="inline-flex items-center rounded-full border border-slate-900 px-6 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            View work
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {pricing.map((tier) => (
          <div key={tier.title} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/90 p-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{tier.title}</p>
              <p className="text-3xl font-semibold text-slate-900">{tier.price}</p>
              <p className="text-sm text-slate-600">{tier.body}</p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {tier.details.map((detail) => (
                <li key={detail} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Process</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">How we work together</h2>
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {processSteps.map((step, index) => (
            <div key={step} className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-center md:min-w-[140px]">
                <p className="text-xs font-semibold text-slate-400">0{index + 1}</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">{step}</p>
              </div>
              {index < processSteps.length - 1 && (
                <>
                  <div className="hidden md:flex">
                    <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 10H46" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M40 4L46 10L40 16" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="md:hidden text-slate-400">
                    <svg width="15" height="30" viewBox="0 0 15 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 0V26" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M2 20L7.5 26L13 20" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
