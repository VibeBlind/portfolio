import Link from "next/link";

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.5em] text-white/40">work</p>
          <h1 className="text-4xl font-semibold tracking-tight">Systems</h1>
          <p className="max-w-2xl text-base text-white/70">
            Placeholder case study for constrained product systems, delivery architecture, and
            operational clarity.
          </p>
        </div>
        <p className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
          Status: v1 placeholder content. This page will expand with scope, decisions, and
          outcomes.
        </p>
        <Link href="/" className="self-start text-xs uppercase tracking-[0.5em] text-white/60">
          back to monitor room
        </Link>
      </div>
    </main>
  );
}
