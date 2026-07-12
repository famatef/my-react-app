import type { Route } from "./+types/services";
import { PortfolioLayout } from "../components/PortfolioLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services | Portfolio" },
    { name: "description", content: "Services — web design, development, and consulting." },
  ];
}

export default function ServicesPage() {
  return (
    <PortfolioLayout>
      <section className="mx-auto w-[min(100%-2rem,1100px)] py-16 pb-24">
        <div className="mx-auto mb-12 max-w-[620px] text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">What I Offer</p>
          <h2 className="mb-3 font-['Fraunces'] text-4xl sm:text-5xl text-white">Services</h2>
          <p className="leading-8 text-zinc-400">
            I’m building my skills as a frontend developer and I’m happy to help with simple, modern, and responsive web projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🎨",
              title: "Responsive Landing Pages",
              body: "Clean, modern single-page websites designed to present your idea clearly and look great on all devices.",
              accent: "bg-violet-500/10 text-violet-300 ring-violet-400/20",
            },
            {
              icon: "⚡",
              title: "Frontend Development",
              body: "Building interactive web interfaces with HTML, CSS, JavaScript, and React in a structured and readable way.",
              accent: "bg-cyan-500/10 text-cyan-300 ring-cyan-400/20",
            },
            {
              icon: "✦",
              title: "UI Improvements",
              body: "Refining layouts, colors, spacing, and buttons to make a website feel more polished and user-friendly.",
              accent: "bg-fuchsia-500/10 text-fuchsia-300 ring-fuchsia-400/20",
            },
            {
              icon: "📱",
              title: "Portfolio Websites",
              body: "Personal or project-based portfolios that showcase your work in a simple and professional way.",
              accent: "bg-indigo-500/10 text-indigo-300 ring-indigo-400/20",
            },
            {
              icon: "🔧",
              title: "Bug Fixing & Improvements",
              body: "Helping improve existing pages by fixing layout issues, improving responsiveness, and making the design more consistent.",
              accent: "bg-amber-500/10 text-amber-300 ring-amber-400/20",
            },
            {
              icon: "💬",
              title: "Learning-Based Projects",
              body: "Creating small web projects to practice new skills, explore ideas, and build confidence as a developer.",
              accent: "bg-emerald-500/10 text-emerald-300 ring-emerald-400/20",
            },
          ].map((service) => (
            <article key={service.title} className="rounded-[1.5rem] border border-white/10 bg-zinc-900/75 p-8 shadow-[0_16px_50px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-violet-400/40">
              <div className={`mb-5 flex size-12 items-center justify-center rounded-xl text-xl ring-1 ring-inset ${service.accent}`} aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="mb-3 font-['Fraunces'] text-2xl text-white">{service.title}</h3>
              <p className="leading-7 text-zinc-400">{service.body}</p>
            </article>
          ))}
        </div>
      </section>
    </PortfolioLayout>
  );
}
