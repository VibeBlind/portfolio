import Link from "next/link";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.5em] text-white/40">work</p>
          <h1 className="text-4xl font-semibold tracking-tight">Selected work</h1>
          <p className="max-w-2xl text-base text-white/70">
            A compact set of projects that illustrate craft with discipline, not abundance.
            Each entry emphasizes clear intent, thoughtful constraints, and composure under pressure.
          </p>
        </div>

        <div className="space-y-6 text-sm text-white/80">
          <article className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold tracking-tight text-white">Inertial Studio</h2>
            <p>
              A reactive visuals experience for a physical installation, balancing tactile
              control with real-time imagery and hand-built shaders.
            </p>
          </article>
          <article className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold tracking-tight text-white">Remote Portal</h2>
            <p>
              A light, adaptive navigation pattern for distributed teams that reduces cognitive
              load and invites calm, deliberate movement through product decisions.
            </p>
          </article>
        </div>

        <Link
          href="/"
          className="self-start text-xs uppercase tracking-[0.5em] text-white/60"
        >
          back to portal
        </Link>
      </div>
    </main>
  );
}
