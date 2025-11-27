import Link from "next/link";

const freelanceClients = ["Karen - Custom Tutoring application", "Owen - Construction Client Management Tool", "Dylan - Custom GPT for His Clients", "Logan - Sports AI Analytics", "Ray - Help With His Music Marketplace App", "Matt - Health Tracking App"];

export default function BuiltPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-slate-200 bg-white/90 px-8 py-12">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">What I&apos;ve built</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Proof in shipped software.</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-600">
          From regulated Fortune 500 systems to scrappy indie launches, I obsess over custom execution. Below is a snapshot of the work
          that shaped WhyLearn.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/80 p-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Enterprise experience</p>
          <h2 className="text-2xl font-semibold text-slate-900">Insurance platforms for Fortune 500s</h2>
          <p className="text-sm text-slate-600">
            As a lead engineer inside 2 different Fortune 500 insurance companies, 
            I helped design customer facing insurance sales software and internal data systems. These systems were scalable and used by thousands of external and internal users.
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
            Senior Level React / Next JS manager for applications 
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              Built dashboards for internal use and data systems.
            </li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/80 p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Product lab</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Apps I&apos;m building now</h2>
        <p className="mt-2 text-sm text-slate-600">
          Beyond client work, I&apos;m shipping two focused tools under WhyLearn: Revenue (a finance tracker) and the combined 20s Crisis + Productivity companion for custom momentum.
        </p>
        <Link
          href="/apps"
          className="mt-6 inline-flex items-center rounded-full border border-slate-900 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
        >
          Go to my apps
        </Link>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Freelance Work and Clients</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">My Freelance Projects</h2>
        <p className="mt-2 text-sm text-slate-600">
          I collaborate closely with founders who need someone that can plan, design, and build without the agency overhead.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {freelanceClients.map((client) => (
            <div key={client} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
              {client}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-900 px-8 py-10 text-white">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Next project</p>
          <h2 className="text-3xl font-semibold">Ready to add your build to this list?</h2>
          <p className="text-sm text-slate-200">
            Tell me about your idea, budget, and timeline. I&apos;ll share an honest plan and we&apos;ll ship it together.
          </p>
          <Link
            href="/consulting#contact"
            className="inline-flex items-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            Start a project
          </Link>
        </div>
      </section>
    </div>
  );
}
