import Link from "next/link";
import Image from "next/image";
import mattPhoto from "../../../images/mattphoto.png";

const timelineEntries = [
  {
    period: "2015 – 2024",
    title: "Corporate software background and education",
    bullets: [
      "Studied Computer Science at the University of Wisconsin. Received My Bachelors in CS in 2018.",
      "Worked as a Senior Software Engineer and Shipped insurance apps and internal, data-heavy tools for two Fortune 500 companies during 2018-2024.",
      "Focused on clean, maintainable, scalable software while operating as a senior engineer inside regulated orgs.",
    ],
  },
  {
    period: "2024 – Present",
    title: "YouTube & teaching",
    icon: true,
    bullets: [
      "Grew @WhyLearnTech to 60k subs by treating it like a public lab of life, entrepreneurship, finance, and gaming experiments.",
      "Share practical life advice for leveling up your income and staying consistent.",
      "Consult creators and founders on growing online brands with honest storytelling.",
    ],
  },
  {
    period: "2024 - Present",
    title: "Freelance Software Engineering",
    bullets: [
      "Launched WhyLearn to combine consulting, product building, and public learning in one ecosystem.",
      "Partner with founders to scope, design, and ship AI-powered workflows and software.",
      "Build the WhyLearn app suite (Revenue, 20s Crisis + Productivity) alongside client work.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-14">
      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white/90 p-8 md:grid-cols-[0.6fr,1fr]">
        <div className="flex flex-col items-center justify-center">
          <div className="h-48 w-48 overflow-hidden rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_top,_#dbeafe,_#e2e8f0)] shadow-xl shadow-slate-200">
            <Image src={mattPhoto} alt="Matt Weiler" className="h-full w-full object-cover" priority />
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">About Matt</p>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">I build software and share the process.</h1>
          <p className="text-base text-slate-600">
            I&apos;m a full-stack engineer who left big-company life to help founders, creators, and small teams build useful software
            without the chaos. WhyLearn is the home for all of it, client work, products, education, and experimentation.
          </p>
          <p className="text-base text-slate-600">
            My work blends thoughtful design, practical engineering, and storytelling. Whether it&apos;s a custom RAG workflow, a lean SaaS,
            or a YouTube series, the goal is the same: help people build momentum and clarity.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-slate-100 px-4 py-1 font-medium text-slate-600">TypeScript · Next.js</span>
            <span className="rounded-full bg-slate-100 px-4 py-1 font-medium text-slate-600">AI / GPT workflows</span>
            <span className="rounded-full bg-slate-100 px-4 py-1 font-medium text-slate-600">Systems thinking</span>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/80 p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Story</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">The path so far</h2>
        <div className="mt-8 space-y-6">
          {timelineEntries.map((item) => (
            <div key={item.title} className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 md:grid-cols-[1fr,3fr]">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                </div>
              <div className="text-sm font-semibold text-slate-500">{item.period}</div>
              <div>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
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
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Case studies</p>
          <h2 className="text-2xl font-semibold text-slate-900">Curious what I&apos;ve shipped?</h2>
          <p className="text-sm text-slate-600">
            Explore a snapshot of enterprise insurance platforms and the indie clients I help every month.
          </p>
          <Link
            href="/built"
            className="inline-flex items-center rounded-full border border-slate-900 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            See what I&apos;ve built
          </Link>
        </div>
      </section>
    </div>
  );
}
