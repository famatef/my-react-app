export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/90 py-10 text-sm text-zinc-400">
      <div className="mx-auto flex w-[min(100%-2rem,1100px)] flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-zinc-900/70 px-6 py-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-semibold text-zinc-200">Let’s build something memorable.</p>
          <p className="mt-1">Available for freelance projects, collaborations, and thoughtful digital experiences.</p>
        </div>
        <a
          href="mailto:famatefatef@gmail.com"
          className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 font-semibold text-violet-300 transition hover:border-violet-400/40 hover:bg-violet-500/20"
        >
          famatefatef@gmail.com
        </a>
      </div>
    </footer>
  );
}
