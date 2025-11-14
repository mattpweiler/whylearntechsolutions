export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} WhyLearn. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="https://www.youtube.com/@whylearntech" target="_blank" rel="noreferrer" className="hover:text-sky-300">
            YouTube
          </a>
          <a href="https://x.com/WhyLearnTech" target="_blank" rel="noreferrer" className="hover:text-sky-300">
            X (Twitter)
          </a>
          <a href="mailto:whylearnwednesdays@gmail.com" className="hover:text-sky-300">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
