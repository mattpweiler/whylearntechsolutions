export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900">WhyLearn</p>
          <p className="text-xs text-slate-500">AI software studio building production-grade products and systems.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <a
            href="https://www.youtube.com/@whylearntech"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-slate-900"
          >
            YouTube
          </a>
          <a href="https://x.com/WhyLearnTech" target="_blank" rel="noreferrer" className="transition hover:text-slate-900">
            X / Twitter
          </a>
          <a href="mailto:whylearnwednesdays@gmail.com" className="transition hover:text-slate-900">
            Email
          </a>
        </div>
        <p className="text-xs text-slate-400">© {new Date().getFullYear()} WhyLearnTech LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
