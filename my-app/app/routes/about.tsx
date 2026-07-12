import type { Route } from "./+types/about";
import { PortfolioLayout } from "../components/PortfolioLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | Portfolio" },
    { name: "description", content: "About me - background, skills, and professional approach." },
  ];
}

export default function AboutPage() {
  return (
    <PortfolioLayout>
      <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
        <section className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">About me</p>
          <h1 className="font-['Fraunces'] text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Learning frontend with curiosity and discipline.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I’m a Computer Science student who enjoys turning ideas into simple, attractive, and responsive web pages. I’m growing my skills every day through hands-on practice and real projects.
          </p>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur sm:p-10">
            <h2 className="font-['Fraunces'] text-3xl text-white">My background</h2>
            <div className="mt-6 space-y-5 leading-8 text-zinc-300">
              <p>
                I’m currently studying Computer Science and focusing on frontend development. I enjoy building websites that are clean, modern, and easy to use, while continuing to learn the tools behind them.
              </p>
              <p>
                My interest in web development comes from the mix of creativity and problem-solving. I like turning design ideas into working pages and improving them through feedback, practice, and consistency.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2" aria-label="Skills">
              <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1.5 text-sm font-medium text-violet-200">HTML</span>
              <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1.5 text-sm font-medium text-violet-200">CSS</span>
              <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1.5 text-sm font-medium text-violet-200">JavaScript</span>
              <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1.5 text-sm font-medium text-violet-200">React</span>
              <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1.5 text-sm font-medium text-violet-200">Responsive Design</span>
            </div>
          </article>

          <aside className="rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/15 to-cyan-400/10 p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">At a glance</p>
            <dl className="mt-8 space-y-6">
              <div className="border-b border-white/10 pb-6"><dt className="font-['Fraunces'] text-4xl text-white">3+</dt><dd className="mt-1 text-sm text-zinc-400">Personal projects</dd></div>
              <div className="border-b border-white/10 pb-6"><dt className="font-['Fraunces'] text-4xl text-white">6+</dt><dd className="mt-1 text-sm text-zinc-400">Frontend tools explored</dd></div>
              <div><dt className="font-['Fraunces'] text-4xl text-white">100%</dt><dd className="mt-1 text-sm text-zinc-400">Dedication to growth</dd></div>
            </dl>
          </aside>
        </section>
      </main>
    </PortfolioLayout>
  );
}
