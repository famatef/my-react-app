import type { Route } from "./+types/home";
import { PortfolioLayout } from "../components/PortfolioLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Portfolio" },
    { name: "description", content: "Portfolio home — welcome and overview." },
  ];
}

export default function HomePage() {
  return (
    <PortfolioLayout>
      <section className="mx-auto w-[min(100%-2rem,1100px)] py-16 md:py-24">
        <div className="grid items-center gap-10 rounded-[2rem] border border-white/10 bg-zinc-900/60 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur xl:grid-cols-[1.15fr_0.85fr] xl:p-12">
          <div className="text-center xl:text-left">
            <span className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">
              CS Student • Frontend Learner
            </span>
            <h1 className="mb-5 font-['Fraunces'] text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I’m a Computer Science student building modern web experiences.
            </h1>
            <p className="mx-auto mb-8 max-w-[58ch] text-lg leading-8 text-zinc-400 xl:mx-0">
              I’m learning frontend development through practical projects, with a focus on responsive design, clean code, and user-friendly interfaces.
            </p>
            <div className="flex flex-wrap justify-center gap-4 xl:justify-start">
              <a href="/about" className="rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_12px_35px_rgba(99,102,241,0.35)] transition hover:-translate-y-0.5">
                Learn About Me
              </a>
              <a href="/services" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-200">
                See My Services
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[320px] items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/30 via-indigo-500/20 to-cyan-400/20 blur-3xl" />
            <div className="relative flex size-64 items-center justify-center rounded-full border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-cyan-400/10 text-6xl font-semibold text-violet-300 shadow-[0_0_60px_rgba(99,102,241,0.2)]">
              CS
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-2rem,1100px)] pb-24">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Quick view</p>
            <h2 className="mt-2 font-['Fraunces'] text-3xl text-white">What I’m learning and building</h2>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
            HTML • CSS • JavaScript • React
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-zinc-900/80 p-8 shadow-[0_16px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-violet-400/40">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-cyan-400">About</p>
            <h3 className="mb-3 font-['Fraunces'] text-2xl text-white">About Me</h3>
            <p className="mb-5 leading-7 text-zinc-400">
              I’m a student who enjoys turning ideas into simple, polished websites and learning new frontend skills every day.
            </p>
            <a href="/about" className="font-semibold text-violet-300 transition hover:text-violet-200">
              Go to About →
            </a>
          </article>

          <article className="rounded-3xl border border-white/10 bg-zinc-900/80 p-8 shadow-[0_16px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-cyan-400/40">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-cyan-400">Work</p>
            <h3 className="mb-3 font-['Fraunces'] text-2xl text-white">Services</h3>
            <p className="mb-5 leading-7 text-zinc-400">
              I can help with landing pages, portfolio websites, UI improvements, and small frontend projects.
            </p>
            <a href="/services" className="font-semibold text-cyan-300 transition hover:text-cyan-200">
              View Services →
            </a>
          </article>
        </div>
      </section>
    </PortfolioLayout>
  );
}
