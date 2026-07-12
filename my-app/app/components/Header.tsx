import type { ReactNode } from "react";
import { Link, NavLink } from "react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header({ children }: { children?: ReactNode }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(100%-2rem,1100px)] items-center justify-between py-4">
        <Link
          to="/"
          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold tracking-[0.2em] text-white/90 transition hover:border-violet-400/40 hover:text-violet-300"
        >
          FAM ATEF
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 p-1.5 text-sm shadow-lg shadow-black/20">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 px-3 py-2 font-medium text-violet-300 ring-1 ring-inset ring-violet-400/30"
                      : "rounded-full px-3 py-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {children}
    </header>
  );
}
