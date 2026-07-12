import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.25),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.16),_transparent_35%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,transparent_40%,rgba(255,255,255,0.02)_100%)]" />

      <Header />

      <main className="relative">{children}</main>

      <Footer />
    </div>
  );
}
