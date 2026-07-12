import type { Route } from "./+types/contact";
import { PortfolioLayout } from "../components/PortfolioLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Portfolio" },
    { name: "description", content: "Contact Your Name to discuss your next project." },
  ];
}

export default function ContactPage() {
  return (
    <PortfolioLayout>
      <section className="mx-auto w-[min(100%-2rem,1100px)] py-16 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h1 className="font-['Fraunces'] text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Let’s Work Together
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Tell me about your project, and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-[2rem] border border-violet-400/20 bg-zinc-900/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.3)] sm:p-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">Contact Details</p>
          <h2 className="font-['Fraunces'] text-3xl text-white">Start a Conversation</h2>
          <p className="mt-3 text-zinc-400">Available for freelance projects, collaborations, and consulting.</p>

          <div className="mt-7 grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="block text-sm text-zinc-500">Email</span>
              <a className="mt-1 block font-semibold text-cyan-300 transition hover:text-cyan-200" href="mailto:famatefatef@gmail.com">famatefatef@gmail.com</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="block text-sm text-zinc-500">Phone</span>
              <a className="mt-1 block font-semibold text-cyan-300 transition hover:text-cyan-200" href="https://wa.me/201002864149" target="_blank" rel="noreferrer">+20 100 286 414 9</a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="block text-sm text-zinc-500">LinkedIn</span>
              <a className="mt-1 block font-semibold text-cyan-300 transition hover:text-cyan-200" href="https://www.linkedin.com/in/fam-atef-500a5b32a" target="_blank" rel="noreferrer">linkedin.com/in/fam-atef</a>
            </div>
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
}
