import Link from "next/link";

const navCards = [
  {
    title: "About Me",
    description: "Get to know Matt, the engineer behind WhyLearn, and explore the story that started it all.",
    href: "/about",
  },
  {
    title: "Software Consulting",
    description: "Strategy, design, and build support for calm software, AI workflows, and lean teams.",
    href: "/consulting",
  },
  {
    title: "WhyLearn Apps",
    description: "Upcoming tools crafted for creators and operators. Follow along as they come to life.",
    href: "/apps",
  },
];

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="overflow-hidden rounded-3xl bg-white px-6 py-12 shadow-2xl shadow-slate-200/60 md:px-10 md:py-16">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">WhyLearn</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
          Build Your Future. One Skill at a Time.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          Hi, I&apos;m Matt. I design thoughtful software, teach what I learn, and help founders integrate AI without the noise.
          Everything here is crafted for clarity, speed, and real progress.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link
            href="/consulting"
            className="inline-flex items-center rounded-full bg-[#1f4ed8] px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-200/70 transition hover:-translate-y-0.5 hover:bg-[#1b44c2]"
          >
            Work With Me
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center rounded-full border border-slate-900 px-6 py-2.5 font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            Learn more
          </Link>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Explore</p>
          <h2 className="text-2xl font-semibold text-slate-900">Choose where to go next</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {navCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/80 transition hover:-translate-y-2"
            >
              <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                {card.title}
              </div>
              <p className="mt-4 text-base text-slate-600">{card.description}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900">
                Visit {card.title}
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

      <section className="grid gap-10 rounded-3xl border border-slate-200 bg-white/80 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Why I built this</p>
          <h3 className="text-2xl font-semibold text-slate-900">WhyLearn is a calm space to build, learn, and share momentum.</h3>
          <p className="text-sm text-slate-600">
            The internet feels louder than ever. WhyLearn is my answer: thoughtful videos, documented experiments, and modern software
            that keeps teams focused on what matters. No fluff, no jargon,just honest tools and stories from the journey.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h4 className="text-lg font-semibold text-slate-900">My mission</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              Help builders master tools faster with calm, practical education.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              Design simple systems so founders can actually ship and iterate.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
              Share the journey transparently so others can avoid the noise.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
