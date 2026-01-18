import Link from "next/link";
import Image from "next/image";
import mattPhoto from "../../../images/mattphoto.png";

const milestones = [
  {
    period: "2024–Present",
    title: "Founder-led studio",
    bullets: [
      "WhyLearnTech LLC: AI-native software studio building document AI (RAG) platforms, SaaS tools, and prediction engines.",
      "Productized consulting for founders and operators who need software that ships—fast.",
      "Lead every engagement personally: discovery, architecture, build, and handoff.",
    ],
  },
  {
    period: "2015–2024",
    title: "Enterprise Engineering for 2 Fortune 500 Companies",
    bullets: [
      "B.S. Computer Science, University of Wisconsin. Built systems thinking habits early.",
      "Shipped insurance platforms, data-heavy internal apps, and customer portals inside Fortune 500 orgs.",
      "Operated as a senior engineer: architecture, accessibility, security reviews, and roadmap ownership.",
    ],
  },
  {
    period: "2018–Present",
    title: "Teaching & systems thinking",
    bullets: [
      "Public learning through @WhyLearnTech—translating engineering decisions into clear narratives.",
      "Help teams reason about data flows, observability, and governance before writing code.",
      "Blend UX, infra, and AI workflows so products are both usable and reliable.",
    ],
  },
];

const principles = [
  { title: "Clarity first", body: "Architecture notes, diagrams, and decision logs so everyone knows how the system works." },
  { title: "Product outcomes", body: "Working software, not slide decks. We demo early and measure adoption." },
  { title: "Operational empathy", body: "I build for operators—dashboards, alerts, and admin tools come baked in." },
];

export default function AboutPage() {
  return (
    <div className="space-y-14">
      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white/90 p-8 md:grid-cols-[0.6fr,1fr]">
        <div className="flex flex-col items-center justify-center">
          <div className="h-48 w-48 overflow-hidden rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_top,_#dbeafe,_#e2e8f0)] shadow-xl shadow-slate-200">
            <Image src={mattPhoto} alt="Matt W" className="h-full w-full object-cover" priority />
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Founder & Engineer</p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">I build AI-native products and the systems behind them.</h1>
          <p className="text-base text-slate-600">
            I&apos;m Matt W — full-stack engineer, systems thinker, and founder of WhyLearnTech. I lead every project: discovery,
            architecture, build, and production rollout. The studio exists to give teams a product-minded engineering partner without the
            overhead of a large agency.
          </p>
          <p className="text-base text-slate-600">
            My background spans enterprise platforms, document AI (retrieval-augmented generation, RAG) systems, SaaS dashboards, and prediction engines. I care about reliability,
            observability, and usability in equal measure.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-slate-100 px-4 py-1 font-medium text-slate-600">TypeScript · Next.js · Python</span>
            <span className="rounded-full bg-slate-100 px-4 py-1 font-medium text-slate-600">AI systems &amp; evals</span>
            <span className="rounded-full bg-slate-100 px-4 py-1 font-medium text-slate-600">Systems thinking</span>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/80 p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Trajectory</p>
        <div className="mt-8 space-y-6">
          {milestones.map((item) => (
            <div key={item.title} className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 md:grid-cols-[1fr,3fr]">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.period}</p>
              </div>
              <div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Principles</p>
          <h2 className="text-2xl font-semibold text-slate-900">How I work</h2>
          <p className="text-sm text-slate-600">
            Expect direct communication, transparent tradeoffs, and software you can operate without me in the room.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <p className="text-lg font-semibold text-slate-900">{principle.title}</p>
              <p className="mt-2 text-sm text-slate-600">{principle.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href="/consulting"
            className="inline-flex items-center rounded-full bg-[#1f4ed8] px-5 py-2 font-semibold text-white shadow-lg shadow-blue-200/70 transition hover:-translate-y-0.5 hover:bg-[#1b44c2]"
          >
            Explore Tech Consulting
          </Link>
          <Link
            href="/consulting#start"
            className="inline-flex items-center rounded-full border border-slate-900 px-5 py-2 font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
